<template lang="pug">
  .footer-wrap
    .tallinnfilm-logo
      img(alt='Tallinnfilm logo' src='../assets/logo.png')
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
.tallinnfilm-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
}
.tallinnfilm-logo img {
  width: 20px;
}


</style>
