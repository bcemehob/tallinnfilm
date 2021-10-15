<template lang="pug">
  SlidingPane
    .snippet
      .header Info
      .info Tallinnfilm band is a cover project initiated by musicians from Tallinn, Estonia in 2021.
      .info Their musical work is mainly concentrated on the interpretation of songs of the famous russian band named Kino.
      .info Musicians are Vadim Semenov (guitar, vocal), Aleksey Pavlenko (guitar), Vladislav Starovoitov (drums), Andrey Borodin (bass) and Sergey Vassilyev (keyboard)
      .info During the 2021 the band performed at the several events:
      .info Elupuu festival, Jun 23-24, 2021
      .info Tsoy songs, Tallinn, Aug 15, 2021

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
  text-align: left;
  padding: 0 15px 15px;
  justify-content: start;
  .header {
    font-size: 20px;
    font-weight: 600;
    margin: 20px;
  }
  .info {
    display: block;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 12px;
  }

}
</style>