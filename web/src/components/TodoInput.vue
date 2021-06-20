<template>
  <form @submit.prevent="createTODO">
    <input type="text" v-model="todo" />
    <button @click="createTODO" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  methods: {
    createTODO(e) {
      this.$emit('modanisa-create-todo', this.todo);
    }
  }
}
</script>

<style>
</style>
