<template>
  <div id="app">
    <div class="back">
      <img alt="background" src="./assets/main.jpg">
    </div>
    <Tallinnfilm/>
  </div>
</template>

<script>
import Tallinnfilm from './components/Tallinnfilm.vue'

export default {
  name: 'App',
  components: {
    Tallinnfilm
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #18185d;
  overflow-y: hidden;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-flow: column;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 2px;

}
.back {
  position: absolute;
  width:100%;
  height: 100%;
  background: url(./assets/main.jpg) no-repeat center top;
  background-blend-mode: soft-light;
  background-color: rgba(22, 42, 16, 0.73);
  filter: blur(2px);
  background-size: cover;
  transform-style: preserve-3d;
  transform: translateZ(-3.5px) scale(3.5);
  img {
    width: 100%;
    max-width: 100%;
    visibility: hidden;
  }
}
.wrap {
  transform: scale(0.9);
}
</style>
