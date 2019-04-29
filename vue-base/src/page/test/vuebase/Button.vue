<template>
    <button @click="changeMsg1">
        <span class="s1">
            <slot :s1="s1"></slot>
        </span>
    </button>
</template>
<script>
export default {
    data(){
        return {
            s1: 10,
            s2: 2
        }
    },
    props:['changeMsg'],
    methods: {
        changeMsg1(){
            this.changeMsg();
        }
    }
}
</script>
<style scoped>

</style>


