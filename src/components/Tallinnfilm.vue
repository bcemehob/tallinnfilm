<template>
  <div class="wrap">
    <Header/>
    <Mid msg="Tallinnfilm rock band"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Mid from './Mid.vue'
import Footer from './Footer.vue'


export default {
  name: 'Tallinnfilm',
  components: {
    Header, Mid, Footer
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
