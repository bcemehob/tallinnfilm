<template lang="pug">
  .hello
    .clickable()
      MiddleSnippet(:isMenuOpen='isMenuOpen' @toggle-menu="toggleMenu")
      h1 {{ msg }}
      p official page
</template>

<script>
import MiddleSnippet from './MiddleSnippet.vue'
import Menu from './Menu.vue'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    MiddleSnippet, Menu
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.routerf-leave-active {
  height: 0;
}

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
.clickable {
  cursor: pointer;
}

</style>
