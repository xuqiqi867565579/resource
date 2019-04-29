<template>
    <div>
        <h1>{{id}}</h1>
        <router-link :to="toUrl">列表</router-link>
        <router-link :to="'/test/home/index'">home/index</router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            toUrl: '/test/list'
        }
    },
    props:['id'],
    beforeCreate(){
        console.log('home-beforeCreate');
    },
    beforeRouteEnter(to, from, next){
        console.log('home-beforeRouteEnter');
        next(home => { // 仅仅该守卫可以让next接收一个回调函数，并给回调传递组件实例
            console.log(home);
        });
    },
    beforeRouteUpdate(to, from, next){ // 在动态路由下生效
        console.log('home-beforeRouteUpdate');
        next();
    },
    beforeRouteLeave(to, from, next){
        console.log('home-beforeRouteLeave');
        next();
    }

}
</script>

