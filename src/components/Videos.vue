<template lang="pug">
  SlidingPane(title='Video')
    .snippet
      .thumb-wrap(v-if="!videoId")
        .thumb(@click="startVideo(0)")
          img(src='./../assets/vid_thumb2.png')
          .label Promo video 2020
        .thumb(@click="startVideo(1)")
          img(src='./../assets/vid_thumb1.png')
          .label Tsoi songs performance on Aug 15, 2021 in Tallinn
        .thumb(@click="startVideo(2)")
          img(src='./../assets/vid_thumb3.png')
          .label The Game song performance on Jun 15, 2021 at Elupuu fest
      Video(v-if="videoId")
</template>

<script>
import SlidingPane from "./SlidingPane"
import Video from "./Video"

const VIDEO_IDS=['-Z6WXAWMjl0','QTuGIZd05QI','6TxIQCuKfgo'];


export default {
  components: {SlidingPane, Video},
  name: "Videos",
  data() {
    return {
      videoStarted: false,
      frameW: 420,
      frameH: 400,
      big: false
    }
  },

  computed: {
    /*
    ...mapGetters({
      videoUrl: 'getCurrentVideoUrl',
    }),
*/

    videoId() {
      return this.$store.getters['getVideoId']
    }
  },
  methods: {
    startVideo(id) {
      this.$store.dispatch('setVideoId', VIDEO_IDS[id]);
    }
  }
}
</script>

<style lang="scss" scoped>

.snippet {
  display: flex;
  flex-flow: column;
  justify-content: left;
  .title {
    width: 100%;
    h3 {
      font-size: 22px;
      text-align: left;
    }
  }
}
h3 {
  font-size: 22px;
}

.thumb-wrap {
  position: relative;
  display: flex;
  flex-flow: row;
  justify-content: left;
  margin-top: 100px;
  @media (max-width: 768px) {
    flex-flow: column;
  }
  .thumb {
    margin: 20px;
    max-width: 250px;
    opacity: 0.7;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
      opacity: 1;
      transform: scale(1.3);
    }
    img {
      width: 200px;
    }
    .label{
      font-size: 16px;
    }
    &.big {
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
    }
    iframe {
    }
  }
}
</style>