<template>
  <div>
    <router-link :to="toUrl">登录</router-link>
  </div>
</template>
<script>

export default {
  data() {
    return {
      toUrl: '/test/home/home'
    };
  }
};
</script>

