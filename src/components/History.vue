<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">Past Events</div>
      <ul class="inline-list">
        <li>Oct 18, 2024 -- <a href="https://www.facebook.com/events/520064107646293">Oktoober Fest</a> @ Fort bar</li>
        <li>Sep 13, 2024 -- <a href="https://www.facebook.com/events/544776954566097">παρασκευήκατριαφοβία @</a> Russow galerii</li>
        <li>Jun 28, 2024 -- <a href="https://www.facebook.com/events/478764621191278">Summer sound</a> live evening @ Fort bar</li>
        <li>Jun 24, 2024 -- <a href="https://www.facebook.com/events/331256493318551">Elupuu fest</a> 2024</li>
        <li>Mar 1, 2024 -- <a href="https://www.facebook.com/events/952051459684303">Early Spring</a> Rock @ Fort bar</li>
        <li>Feb 24, 2024 -- <a href="https://www.facebook.com/events/1136299817538513">Vaba Riik</a> @ Põhja Öökull</li>
        <li>Oct 20, 2023 -- Fort bar</li>
        <li>Sep 09, 2023 -- <a href="https://www.facebook.com/events/336296152077364">Стиховед Семенов: Юбилейный концерт</a> @ Põhja Öökull</li>
        <li>Aug 12, 2023 -- <a href="https://www.facebook.com/events/1241067239945396">Tallinnfilm  @</a> Fort bar</li>
        <li>Jun 25, 2023 -- <a href="">Elupuu fest</a> 2023</li>
        <li>May 5, 2023 -- <a href="https://www.facebook.com/events/534549562176563">C'MON, ÇA VA </a> @ Põhja Öökull</li>
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
