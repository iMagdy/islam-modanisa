<template>
  <div id="app">
    <h1>Modanisa Todos</h1>

    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default {
  name: 'ModanisaApp',
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
</style>
