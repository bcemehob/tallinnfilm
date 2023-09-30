<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">Upcoming Events</div>
      <ul class="inline-list">
        <li>On Ocn 20th, 2023 Tallinnfilm band will perform at
          <a href="https://www.facebook.com/fortbar.tallinn" target="_blank">Fort Bar</a>
           in the joint session with Nonsens band </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    hideSubpage() {
      this.$emit('hide-subpage')
    }
  }
}
</script>