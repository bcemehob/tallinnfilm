<template>
  <A3a3a3a v-if="isAlbumPage" />
  <template v-else>
    <div class="logo"></div>
    <a class="album-promo" href="/a3a3a3a" aria-label="Discover the A3a3a3a album">
      <img :src="albumTitle" alt="A3a3a3a album" />
    </a>
    <TopMenu />
    <MiddleContainer msg="2" />
  </template>
</template>

<script setup>
import A3a3a3a from './components/a3a3a3a/A3a3a3a.vue'
import albumTitle from './assets/img/a3a3a3a/album_title.png'
import MiddleContainer from './components/MiddleContainer.vue'
import TopMenu from './components/TopMenu.vue'

const isAlbumPage = window.location.pathname.replace(/\/+$/, '') === '/a3a3a3a'
</script>

<style scoped>
.album-promo {
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 100;
  display: block;
  width: min(28vw, 280px);
}

.album-promo img {
  display: block;
  width: 100%;
  height: auto;
  transition: filter 200ms ease;
}

.album-promo:hover img {
  filter: drop-shadow(0 0 7px #dad8d0);
}

@media (max-width: 600px) {
  .album-promo {
    right: 12px;
    bottom: 12px;
    width: min(42vw, 200px);
  }
}
</style>
