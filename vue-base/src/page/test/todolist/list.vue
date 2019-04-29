<template>
    <ul>
        <li v-for="(item,key) in todolist" :key="key">
          <span>{{item.text}}</span>
        </li>
    </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['todolist']),
  },
  methods: {
    ...mapActions(['getAllList']),
  },
  mounted() {
    // this.$store.dispatch('getAllList');
    this.getAllList();
  },
};
</script>

<style>

</style>
