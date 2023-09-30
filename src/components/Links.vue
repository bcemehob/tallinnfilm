<template>
  <div id="links" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">
        Links
      </div>
      <ul class="links">
        <li class="clickable external-link facebook">
          <a href="https://www.facebook.com/TallinnfilmBand" target="_blank">facebook</a>
        </li>
        <li class="clickable external-link youtube">
          <a href="https://www.youtube.com/channel/UC3vrgzbBPVViqOVv9ORA0IQ" target="_blank">youtube</a>
        </li>
        <li class="clickable external-link instagram">
          <a href="https://www.instagram.com/tallinnfilmband/" target="_blank">instagram</a>
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
