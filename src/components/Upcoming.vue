<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">Upcoming Events</div>
      <ul class="inline-list">
        <li>
          <p>On November 27, 2026, Tallinnfilm will present its new album "a3a3a3a!" at
          <a href="https://www.facebook.com/events/2379397392893359/" target="_blank">BH Pub</a>.</p>
          <p><a href="https://lemontreestallinn.bandcamp.com/" target="_blank">Lemon Trees</a> will also perform at the event.</p>
        </li>
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
