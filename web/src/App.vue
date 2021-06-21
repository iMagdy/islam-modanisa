<template>
  <div id="app">
    <h1>Modanisa Todos</h1>

    <TodoInput @modanisa-create-todo="postTODO" />
    <TodoList :items="items" />
    {{JSON.stringify(items, null, 2)}}
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { API_URL } from '@/config';

export default {
  name: 'ModanisaApp',
  components: {
    TodoInput,
    TodoList
  },
  data() {
    return {
      items: []
    }
  },
  methods: {
    postTODO(todo) {
      return fetch(`${API_URL}/todos`, { method: 'post', body: todo });
    },
    async getTODOs() {
      this.items = await fetch(`${API_URL}/todos`).then(res => res.json());
    }
  },
  mounted() {
    this.getTODOs();
  }
}
</script>

<style>
</style>
