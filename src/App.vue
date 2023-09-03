<template>
  <div class="logo">
  </div>
  <TopMenu />
  <MiddleContainer msg="2" />
</template>

<script setup>
import MiddleContainer from './components/MiddleContainer.vue'
import TopMenu from './components/TopMenu.vue'
</script>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    linksShown() {
      return true
    }
  }
}

</script>

<style scoped></style>
