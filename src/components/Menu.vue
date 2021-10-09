<template lang="pug">
  .menu(:class='{active:isMenuOpen}')
    ol
      router-link(to='/info')
        li INFO
      router-link(to='/video')
        li VIDEOS
</template>

<script>
export default {
  name: "MiddleSnippet",
  props: {
    isMenuOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>

.menu{
  opacity: 0;
  font-size: 16px;
  position: absolute;
  top: 340px;
  transition: opacity .3s ease;
}
.active {
  opacity: 1;
}

</style>