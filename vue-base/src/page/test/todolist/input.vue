<template>
  <div>
    <input v-model="inputVal" type="text">
    <button @click="sure">确定</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  mounted() {
    window.inp = this;
  },
  data() {
    return {
      inputVal: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    sure() {
      // this.$store.dispatch('addTodo', { text: this.inputVal });
      this.addTodo({ text: this.inputVal });
    },
  },
};
</script>

<style>
</style>
