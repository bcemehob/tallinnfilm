<template lang="pug">
    .video-snippet
      .overlay(@click="closeVideo")
      youtube(:video-id="videoId" id='current-video' fitParent=true ref="youtube" @playing="playing")

</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('/ we are watching!!!')
    },
    closeVideo() {
      this.$store.dispatch("closeVideo");
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
    videoId() {
      return this.$store.getters['getVideoId']
    }
  },
  mounted() {
    this.playVideo()
  }
}
</script>

<style lang="scss" scoped>

.video-snippet {
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  @media (max-width: 500px) {
    top: 15%;
  }

  .overlay {
    opacity: .5;
    transition: opacity .2s ease;
    height: 20px;
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    &:hover {
        opacity: 1;
    }
    &:before{
      cursor: pointer;
      font-family: Tallinnfilm, sans-serif;
      font-size: 33px;
      background-color: #0e3446;
      padding: 10px;
      border-radius: 100%;
      position: absolute;
      top: 12px;
      right: 12px;
      width: 30px;
      height: 30px;
      text-align: right;
      content: '\e976';

    }
  }
}
</style>