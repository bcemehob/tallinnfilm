<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">Upcoming Events</div>
      <ul class="inline-list">
        <li>On Dec 14th, 2024 Tallinnfilm band will perform at
          <a href="https://www.facebook.com/fortbar.tallinn" target="_blank">Fort Bar</a> (joint event) </li>
        <li>On Jan 3rd, 2025 Tallinnfilm band will perform at
          <a href="https://www.facebook.com/fortbar.tallinn" target="_blank">Fort Bar</a> (joint event) </li>
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
