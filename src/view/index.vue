<template>
    <div>
        首页
    </div>
</template>

<script>
    import {login} from "../api/user";

    export default {
        name: 'index',
        data() {
            return {
                'index': '首页'
            }
        },
        mounted: function () {

        },
        methods: {
            getIndex() {
                let data = {
                    'username': '1111',
                    'password': '22222'
                }
                login(data).then(res => {
                    // eslint-disable-next-line no-empty
                    if (res.code === 1) {

                    }
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="less">


</style>
