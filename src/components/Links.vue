<template>
  <div id="links" :class="listClassName">
    <div class="close-box clickable" @click="hideList">x</div>
    <ul class="links">
      <li class="clickable">
        <a href="https://www.facebook.com/TallinnfilmBand" target="_blank">facebook</a>
      </li>
      <li class="clickable">
        <a href="https://www.youtube.com/channel/UC3vrgzbBPVViqOVv9ORA0IQ" target="_blank">youtube</a>
      </li>
      <li class="clickable">
        <a href="https://www.instagram.com/tallinnfilmband/" target="_blank">instagram</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data()  {
    return {
      listClassName: 'shown'
    }
  },
  methods: {
    hideList() {
      this.$emit('hide-links')
    },
    showLinks() {
      console.log("SHOW LINSK")
    }
  },
  mounted() {
  }
} 
</script>
<style scoped></style>
