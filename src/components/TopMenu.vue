<template>
  <div id="topMenu">
    <div class="title clickable" v-on:click="clickMenu"> </div>
    <ul class="menu" :class="listClassName">
      <li class="clickable" @click="toggleLinks">links</li>
      <li class="clickable" @click="toggleTshirts">t-shirts</li>
      <li class="clickable" @click="toggleNews">news</li>
    </ul>
    <Links v-if="linksShown" @hide-subpage="hideSubpage"/>
    <Tshirts v-if="tShirtsShown" @hide-subpage="hideSubpage"/>
    <News v-if="newsShown" @hide-subpage="hideSubpage"/>
  </div>
</template>

<script>

import Links from "./Links.vue";
import Tshirts from "./Tshirts.vue";
import News from "./News.vue";
export default {
  components: {Links, Tshirts, News},
  data()  {
    return {
      listClassName: 'hidden',
      linksShown: false,
      tShirtsShown: false,
      newsShown: false
    }
  },
  methods: {
    clickMenu() {
      this.toggleMenu()
      this.hideSubpage()
    },
    toggleMenu() {
      this.listClassName = this.listClassName === 'shown' ? 'hidden' : 'shown'
    },
    toggleLinks() {
      this.linksShown = !this.linksShown;
      this.toggleMenu();
    },
    toggleTshirts() {
      this.tShirtsShown = !this.tShirtsShown;
      this.toggleMenu();
    },
    toggleNews() {
      this.newsShown = !this.newsShown;
      this.toggleMenu();
    },
    hideSubpage() {
      this.linksShown = false
      this.tShirtsShown = false
      this.newsShown = false
    },
  },
}
</script>