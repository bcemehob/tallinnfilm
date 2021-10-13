<template lang="pug">
  .header-wrap
    div The ultimate cover rock band
</template>

<script>
export default {
  name: 'Tallinnfilm',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap{
  text-align: right;
}
</style>
