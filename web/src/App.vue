<template>
  <div class="app">
    <div class="input">
      <h1>Modanisa Todos</h1>
      <TodoInput @modanisa-create-todo="postTODO" />
    </div>
      
    <TodoList :items="items" />
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
      return fetch(`${API_URL}/todos`, { method: 'post', body: todo }).then(this.getTODOs);
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
  .app {
    background: #fff;
    width: 80vw;
    max-width: 550px;
    height: 70vh;
    margin-top: 15vh;
    padding: 0 20px 20px 20px;
    overflow-y: auto;
  }
  .input {
    position: sticky;
    top: 0;
    background: #fffffff2;
    margin-bottom: 20px;
    padding: 20px 0;
  }
  h1 {
    margin-bottom: 20px;
  }
</style>
