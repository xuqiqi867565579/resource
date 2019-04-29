<template>
  <div>
    <span>性别：{{sex}}</span>
    <todolist-input></todolist-input>
    <todolist-list></todolist-list>
    <span>性别：{{sex}}</span>
    <span>{{sname}}</span>
    <span>{{revName}}</span>
  </div>
</template>
<script>
import TodolistInput from './input';
import TodolistList from './list';
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters({ sex:'showSex'}),
    ...mapGetters('shopcar', ['revName']),
    ...mapState('shopcar',{sname:'name'})
  },
  components: {
    TodolistInput,
    TodolistList,
  },
};
</script>

