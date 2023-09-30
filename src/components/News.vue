<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">News</div>
      <ul class="inline-list">
        <li>On Sept 6, 2023 the EP <span class="rus">"В Доме Напротив"</span> (In The Opposite House) has been released by Tallinnfilm.</li>
        <li class="clickable external-link spotify">
          <a href="https://open.spotify.com/album/46PuKuMG6XE5pJwZ390ZmH?si=jS5WqXSGRASjLEW0laGUGQ" target="_blank">Spotify</a>
        </li>
        <li class="clickable external-link yt-music">
          <a href="https://www.youtube.com/playlist?list=OLAK5uy_n5c0cU21BBrWzST7lVTOLsOrMsugqS1w0" target="_blank">YT Music</a>
        </li>
        <li class="clickable external-link bandcamp">
          <a href="https://tallinnfilm.bandcamp.com/album/-" target="_blank">Bandcamp</a>
        </li>
        <li class="clickable external-link apple-music">
          <a href="https://music.apple.com/us/album/в-доме-напротив-ep/1705938194" target="_blank">Apple Music</a>
        </li>
        <li class="clickable external-link amazon-music">
          <a href="https://music.amazon.com.mx/albums/B0CHBMSSYY" target="_blank">Amazon Music</a>
        </li>
        <li class="clickable external-link deezer">
          <a href="https://www.deezer.com/en/album/484768865" target="_blank">Deezer</a>
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
    },
  },
}
</script>
<style scoped></style>
