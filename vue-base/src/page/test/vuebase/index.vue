<template>
  <div id="box">
    <h1>{{msg}}</h1>
    <tao-button :changeMsg="changeMsg">
      <template v-slot="obj">
          <span slot="s1">{{obj.s1}}</span>
      </template>
      
    </tao-button>
  </div>
</template>
<script>
import TaoButton from "./Button";
export default {
  data() {
    return {
      msg: "vuebase"
    };
  },
  mounted() {
    window.tao = this;
  },
  methods: {
    changeMsg() {
      this.msg = "hello";
    }
  },
  components: {
    TaoButton
  }
};
</script>
<style scoped>
</style>


