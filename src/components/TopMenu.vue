<template>
  <div id="topMenu">
    <BurgerMenuIcon class="clickable title" @click="clickMenu" />
    <ul class="menu" :class="listClassName">
      <li class="clickable" @click="toggleUpcoming">upcoming events</li>
      <li class="clickable" @click="toggleHistory">past events</li>
      <li class="clickable" @click="toggleNews">news</li>
      <li class="clickable" @click="toggleLinks">links</li>
      <li class="clickable" @click="toggleTshirts">t-shirts</li>
    </ul>
    <Upcoming   v-if="upcomingShown"  @hide-subpage="hideSubpage"/>
    <News       v-if="newsShown"      @hide-subpage="hideSubpage"/>
    <Links      v-if="linksShown"     @hide-subpage="hideSubpage"/>
    <History    v-if="historyShown"   @hide-subpage="hideSubpage"/>
    <Tshirts    v-if="tShirtsShown"   @hide-subpage="hideSubpage"/>
  </div>
</template>

<script>

import BurgerMenuIcon from "./BurgerMenuIcon.vue";
import Links from "./Links.vue"
import Tshirts from "./Tshirts.vue"
import News from "./News.vue"
import Upcoming from "./Upcoming.vue"
import History from "./History.vue";

export default {
  components: {History, BurgerMenuIcon, Links, Tshirts, News, Upcoming},
  data()  {
    return {
      listClassName: 'hidden',
      upcomingShown: false,
      newsShown: false,
      linksShown: false,
      historyShown: false,
      tShirtsShown: false
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
    toggleUpcoming() {
      this.upcomingShown = !this.upcomingShown
      this.toggleMenu();
    },
    toggleNews() {
      this.newsShown = !this.newsShown
      this.toggleMenu()
    },
    toggleLinks() {
      this.linksShown = !this.linksShown
      this.toggleMenu()
    },
    toggleHistory() {
      this.historyShown = !this.historyShown
      this.toggleMenu()
    },
    toggleTshirts() {
      this.tShirtsShown = !this.tShirtsShown
      this.toggleMenu()
    },
    hideSubpage() {
      this.upcomingShown = false
      this.newsShown = false
      this.linksShown = false
      this.tShirtsShown = false
      this.historyShown = false
    },
  },
}
</script>
