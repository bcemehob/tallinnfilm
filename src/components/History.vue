<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">Past Events</div>
      <ul class="inline-list">
        <li>Dec 23, 2025 -- <a href="https://www.facebook.com/events/1389898789424924">Acoustics+</a> @ Fort bar</li>
        <li>Dec 20, 2025 -- <a href="https://www.facebook.com/events/1370279694644174">Tallinnfilm & James Watt Steam Machine</a> @ BH pub </li>
        <li>Nov 7, 2025 -- <a href="https://www.facebook.com/events/4142336279387560">Nonsence & Tallinnfilm</a> @ BH pub</li>
        <li>Aug 30, 2025 -- <a href="https://www.facebook.com/events/2236793670109622">Lite My Fire: Duo Marinad & Tallinnfilm</a> @ Fort bar</li>
        <li>Jun 23, 2025 -- <a href="https://www.facebook.com/events/1047020377335486">Elupuu Fest 2025</a></li>
        <li>Jun 20, 2025 -- <a href="https://www.facebook.com/events/1488305685466752">Hundred Seas</a> @ BH Pub </li>
        <li>Apr 10, 2025 -- <a href="https://www.facebook.com/groups/teasoundpiano0/">Клавиши с нуля</a> @ Fort bar </li>
        <li>Feb 7, 2025 -- <a href="https://www.facebook.com/events/1280232749936607">Nonsense & TALLINNFILM</a> @ BH Pub </li>
        <li>Jan 3, 2025 -- <a href="https://www.facebook.com/events/1811427913021384">The Dead Santa Abstinent Party: Novogodnij Rock-Fest</a> @ Fort bar </li>
        <li>Dec 14, 2024 -- <a href="https://www.facebook.com/events/1087698292991564">Tallinnfilm & James Watt Steam Machine</a> @ Fort bar </li>
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
