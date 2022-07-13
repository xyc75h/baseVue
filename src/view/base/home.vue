<template>
    <div>
        <public-header></public-header>
        <router-view></router-view>
        <public-footer></public-footer>
    </div>
</template>

<script>
import PublicHeader from './header'
import PublicFooter from './footer'

export default {
    name: "home",
    components:{
        PublicHeader,PublicFooter
    },
}
</script>

<style scoped>

</style>
