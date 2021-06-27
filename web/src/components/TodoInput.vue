<template>
  <form @submit.prevent="createTODO">
    <input placeholder="Buy some milk?..." type="text" v-model="todo" required />
    <button @click="createTODO" type="button">Add</button>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  methods: {
    createTODO() {
      this.$emit('modanisa-create-todo', this.todo);
    }
  }
}
</script>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr 90px;
    gap: 20px;
  }
  
  input {
    font-size: 21px;
    padding: 10px;
  }

  button {
    font-size: 21px;
  }
</style>
