<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">News</div>
      <ul>
        <li>On Sept 6, 2023 the EP "В Доме Напротив" (In The Opposite House) has been released by Tallinnfilm.</li>
        <li class="clickable">
          <a href="https://open.spotify.com/album/46PuKuMG6XE5pJwZ390ZmH?si=jS5WqXSGRASjLEW0laGUGQ" target="_blank">Spotify</a>
        </li>
        <li class="clickable">
          <a href="https://www.youtube.com/playlist?list=OLAK5uy_n5c0cU21BBrWzST7lVTOLsOrMsugqS1w0" target="_blank">YT Music</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data()  {
    return {
      listClassName: 'shown'
    }
  },
  methods: {
    hideSubpage() {
      this.$emit('hide-subpage')
    },
  },
}
</script>
<style scoped></style>
