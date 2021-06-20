<template>
  <form @submit="createTODO">
    <input type="text" v-model="todo" />
    <button @click="createTODO" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  methods: {
    createTODO(e) {
      e.preventDefault();
      this.$emit('modanisa.createTODO', this.todo);
    }
  }
}
</script>

<style>
</style>
