<template lang="pug">
  .menu(:class='{active:isMenuOpen}')
    ol.main-menu
      li.info
        router-link(to='/info') info
      li.video
        router-link(to='/video') video
      li.review
        router-link(to='/review') review
      li.fb
        a(href='https://www.facebook.com/Tallinnfilm-102142218935952' target='_blank') latest news
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

.menu {
  opacity: 0;
  height: 0;
  margin-bottom: 75px;
  transition: opacity .3s ease;
  @media (max-width: 500px) {
    height: unset;
    text-align: right;
    margin-top: -50%;
    margin-bottom: 0;
    width: 100%;

  }

  ol.main-menu {
    @media (max-width: 500px) {
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
    }

    font-size: 25px;

    li {
      &:before {
        font-family: Tallinnfilm;
        padding-right: 6px;
        color: #aaefe7;
        transition: color .2s ease;

      }

      padding: 10px 20px;
      &:hover:before {
        color: #fff;
        transition: color .2s ease-in-out;

      }

      &.video:before {
        content: '\e955';
      }

      &.info:before {
        content: '\e937';
      }

      &.review:before {
        content: '\e938';
      }
      &.fb:before {
        content: '\ea90';
      }
      a {
        text-decoration: none;
        font-family: Orbitron, sans-serif;
        color: #aaefe7;
        transition: color .2s ease-in-out;
        &:hover {
          color: #ffffff;
        }

      }
    }
  }
}
.active {
  opacity: 1;
}

</style>