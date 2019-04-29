<template>
    <div>
        <h1>{{msg}}</h1>  
        <button @click="setMsg">点击</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg: '用户管理'
        }
    },
    methods: {
        setMsg(){
            this.msg = '哈哈哈'
        }
    }
}
</script>
<style scoped>

</style>


