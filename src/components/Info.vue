<template lang="pug">
  SlidingPane
    .snippet
      .info Some important information about Tallinnfilm rock band coming soon.
      .info ------------------
      .info Keep in touch!
</template>

<script>
import SlidingPane from "./SlidingPane";

export default {
  components: {SlidingPane},
  name: "MiddleSnippet"
}
</script>

<style lang="scss" scoped>
.snippet {
  flex-flow: column;
  .info {
    display: block;
    font-size: 14px;
  }

}
</style>