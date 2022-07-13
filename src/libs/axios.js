import axios from 'axios'
import qs from 'qs';
import {getToken} from '@/libs/util'

const addErrorLog = errorInfo => {
    const {statusText, status, request: {responseURL}} = errorInfo
    let info = {
        type: 'ajax',
        code: status,
        mes: statusText,
        url: responseURL
    }
    if (!responseURL.includes('save_error_logger')) {
        console.log(info);
    }
}

class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'token': getToken()
            }
        }
        return config
    }

    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }

    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // Spin.show() // 不建议开启，因为界面不友好
            }
            this.queue[url] = true;
            config.data = qs.stringify(config.data);
            return config
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const {data, status} = res
            /*//如果服务器端返回错误，则统一报错
            if (data.code !== 1) {
                Notice.error({title: data.msg})
            }*/
            return {data, status}
        }, error => {
            this.destroy(url)
            console.log(error);
            return
            // eslint-disable-next-line no-unreachable
            let errorInfo = error.response
            console.log(errorInfo);
            if (!errorInfo) {
                const {request: {statusText, status}, config} = JSON.parse(JSON.stringify(error))
                errorInfo = {
                    statusText,
                    status,
                    request: {responseURL: config.url}
                }
            }
            addErrorLog(errorInfo)
            return Promise.reject(error)
        })
    }

    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default HttpRequest
