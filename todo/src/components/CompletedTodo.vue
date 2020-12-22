<template>
  <div>
      Completed Todo: {{ numberOfCompleted }}
      
  </div>
</template>

<script>
export default {
    computed: {
        // todos() {
        //     return this.$store.state.todos;
        // },
        numberOfCompleted() {
            return this.$store.getters['todo/numberOfCompleted'];
        }
    }
}
</script>

<style>

</style>