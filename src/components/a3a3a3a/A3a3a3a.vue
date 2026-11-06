<template>
  <main class="album-page">
    <header class="album-header">
      <a class="wordmark" href="/" aria-label="Tallinnfilm home">
        <img :src="logo" alt="Tallinnfilm" />
      </a>
      <a class="back-link" href="/">← Back to the site</a>
    </header>

    <section class="hero" aria-labelledby="album-title">
      <div class="hero-copy">
        <h1 id="album-title">
          <span class="album-band-name">Tallinnfilm</span>&nbsp;<span class="album-title-script">azazaza!</span>
        </h1>
        <p class="intro">
           <ol class="tracklist">
            <li><span>Ouverture</span><time>1:23</time></li>
            <li><span class="track-name-cyrillic">Полетели</span><time>4:04</time></li>
            <li><span>Melita</span><time>4:29</time></li>
            <li>
              <span>Teatri Vabrik<small>In memoriam Timur Ilikajev</small></span>
              <time>3:19</time>
            </li>
            <li>
              <span>Rocinante<small>In memoriam Alexey Navalny</small></span>
              <time>4:22</time>
            </li>
            <li><span class="track-name-cyrillic">Послевойны</span><time>4:07</time></li>
            <li><span>La Divina Commedia</span><time>3:41</time></li>
            <li><span class="track-name-cyrillic">Один Из Нас</span><time>4:37</time></li>
            <li><span>Lacrimoaзaзaзa!</span><time>4:34</time></li>
            <li><span class="track-name-cyrillic">Старый Робот</span><time>3:52</time></li>
            <li><span>Melita (bonus)</span><time>3:55</time></li>
          </ol>
        </p>
      </div>

      <img class="album-cover" :src="albumCover" alt="A3a3a3a! album cover" />
      <span class="side-note" aria-hidden="true">STuudio Records 2026 Tallinn </span>
    </section>

    <section id="about" class="about" aria-label="Streaming platforms">
      <ul class="streaming-links">
        <li>
          <a class="featured" href="https://music.apple.com/us/artist/tallinnfilm/1705937339" target="_blank" rel="noopener noreferrer">
            <img :src="appleMusicIcon" alt="" />
            <span>Apple Music</span>
          </a>
        </li>
        <li>
          <a class="featured" href="https://open.spotify.com/artist/3GJveR781wAjBBFy5YLRrF" target="_blank" rel="noopener noreferrer">
            <img :src="spotifyIcon" alt="" />
            <span>Spotify</span>
          </a>
        </li>
        <li>
          <a class="featured" href="https://music.youtube.com/channel/UCHLg-88_lk4yxHW5b-voY4Q" target="_blank" rel="noopener noreferrer">
            <img :src="youtubeMusicIcon" alt="" />
            <span>YouTube Music</span>
          </a>
        </li>
        <li>
          <a href="https://music.amazon.com/albums/B0HPX1BKPY" target="_blank" rel="noopener noreferrer">
            <img :src="amazonMusicIcon" alt="" />
            <span>Amazon Music</span>
          </a>
        </li>
        <li>
          <a href="https://us.7digital.com/artist/tallinnfilm/release/a3a3a3a-explicit-82053754?f=20%2C19%2C12%2C16%2C17%2C9%2C2" target="_blank" rel="noopener noreferrer">
            <span class="streaming-icon-seven-digital" aria-hidden="true">7d</span>
            <span>7digital</span>
          </a>
        </li>
        <li>
          <a href="https://www.deezer.com/en/album/1135161321" target="_blank" rel="noopener noreferrer">
            <img :src="deezerIcon" alt="" />
            <span>Deezer</span>
          </a>
        </li>
      </ul>
    </section>

    <section id="details" class="album-details" aria-labelledby="details-title">
      <div class="details-grid">
        <div>
          <h3>Music</h3>
          <dl class="credits-list">
            <div>
              <dt class="credit-name-cyr">Стиховед Семенов</dt>
              <dd>Music, lyrics, vocals, guitar, whistling (4), programming, mixing</dd>
            </div>
            <div>
              <dt>Slava Mogilevtsev</dt>
              <dd>Saxophone, clarinet (7, 8), mixing, mastering</dd>
            </div>
            <div>
              <dt>Nikita Babich</dt>
              <dd>Bass guitar, devices</dd>
            </div>
            <div>
              <dt>Katya Semenova</dt>
              <dd>Vocals (7, 11), backing vocals (6, 9)</dd>
            </div>
            <div>
              <dt>Dan Rotar</dt>
              <dd>Drums, screams (1)</dd>
            </div>
        
          </dl>
        </div>
        <div>
          <h3>Credits</h3>
          <dl class="credits-list">
            <div>
              <dt>Jelena Semenova</dt>
              <dd>Inspiration, cover model</dd>
            </div>
            <div>
              <dt>W. A. Mozart</dt>
              <dd>Music (9)</dd>
            </div>
            <div>
              <dt>Marek Kusmin</dt>
              <dd>Photography</dd>
            </div>
          </dl>
          <p class="special-thanks">
            <strong>Special thanks:</strong> 
            <div>Alexey Palych</div>
            <div>Ian S.</div>
            <div>Yura D.</div>
            <div>Grisha M.</div>
          </p>
        </div>
        <div>
          <h3>Info</h3>
          <div class="album-info">
            <p>Recorded, mixed, and mastered<br />
            in 2024–2026 <br />
            at STuudio Records,<br />
            Tallinn, Estonia</p>
            <p><span class="copyright-symbol">©</span> 2026 Vadim Semenov<br /><span class="copyright-symbol phonogram-symbol">℗</span> 2026 Vadim Semenov</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="album-footer">
      <span>STuudio Records</span>
      <span>2026</span>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import logo from '../../assets/img/logo_w_no_bg.svg'
import albumCover from '../../assets/img/a3a3a3a/p1.jpg'
import spotifyIcon from '../../assets/img/spotify.svg'
import youtubeMusicIcon from '../../assets/img/ytmusic.svg'
import appleMusicIcon from '../../assets/img/applemusic.svg'
import amazonMusicIcon from '../../assets/img/amazonmusic.svg'
import deezerIcon from '../../assets/img/deezer.svg'

let previousTitle

onMounted(() => {
  previousTitle = document.title
  document.title = 'New Album — Tallinnfilm'
  document.body.classList.add('a3a3a3a-album-page')

})

onUnmounted(() => {
  document.title = previousTitle
  document.body.classList.remove('a3a3a3a-album-page')
})
</script>

<style scoped src="./a3a3a3a.css"></style>
