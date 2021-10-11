<template lang="pug">
  .menu(:class='{active:isMenuOpen}')
    ol.main-menu
      router-link(to='/info')
        li.info info
      router-link(to='/video')
        li.video video
</template>

<script>
export default {
  name: "MiddleSnippet",
  computed: {
    isMenuOpen() {
      return this.$store.getters['getMenuOpenFlag'];
    }
  },

}
</script>

<style lang="scss" scoped>

.menu{
  opacity: 0;
  height: 0;
  margin-bottom: 75px;
  transition: opacity .3s ease;
  @media (max-width: 500px) {
    height: unset;
    text-align: right;
    margin-top: -100%;
    margin-bottom: 0;
  }

  ol.main-menu {
    font-size: 25px;
    a {
      li {
        padding: 10px 20px;
        font-family: Orbitron, sans-serif;
        color: #aaefe7;
        transition: color .2s ease-in-out;
        &:hover {
          color: #ffffff;
        }
        &.video:before {
          content: '\e955';
        }
        &.info:before {
          content: '\e937';
        }
        &:before {
          font-family: Tallinnfilm;
          padding-right: 6px;
        }

      }
    }
  }
}
.active {
  opacity: 1;
}

</style>