<template>
  <div>
      Completed Todo: {{ numberOfCompleted }}
  </div>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    computed: {
        numberOfCompleted() {
            return this.todos.filter(todo => todo.checked).length
        }
    }
}
</script>

<style>

</style>