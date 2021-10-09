<template lang="pug">
  .wrap
    Header
    transition(name="routerf")
      router-view(name="main")
    Footer
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Tallinnfilm',
  components: {
    Header, Footer
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
