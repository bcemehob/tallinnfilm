<template>
  <div id="topMenu">
    <div class="title clickable" v-on:click="clickMenu"> </div>
    <ul class="menu" :class="listClassName">
      <li class="clickable" @click="toggleLinks">links</li>
      <li class="clickable" @click="toggleTshirts">t-shirts</li>
    </ul>
    <Links v-if="linksShown" @hide-subpage="onHideSubpage"/>
    <Tshirts v-if="tShirtsShown" @hide-subpage="onHideSubpage"/>
  </div>
</template>

<script>

import Links from "./Links.vue";
import Tshirts from "./Tshirts.vue";
export default {
  components: {Links, Tshirts},
  data()  {
    return {
      listClassName: 'hidden',
      linksShown: false,
      tShirtsShown: false
    }
  },
  methods: {
    clickMenu() {
      this.toggleMenu()
      this.linksShown = false;
      this.tShirtsShown = false;
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
    onHideSubpage() {
      this.linksShown = false;
      this.tShirtsShown = false;
    },
  },
  mounted() {
  }
} 
</script>
<style scoped></style>
