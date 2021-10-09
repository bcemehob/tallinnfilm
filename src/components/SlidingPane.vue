<template lang="pug">
  .main-wrap
    router-link(to='/')
      .mw-header
    .snippet-wrap
      slot
</template>

<script>
export default {
  name: "SlidingPane"
}
</script>

<style lang="scss" scoped>
.main-wrap {
  border-radius: 27px;
  border-top: 1px solid rgba(0, 7, 7, 0.55);
  border-left: 3px solid rgba(0, 7, 7, 0.55);
  background-color: rgba(1, 38, 35, 0.55);
  //animation: .2s linear slidein;
  .mw-header {
    position: relative;
    border-radius: 27px 27px 0 0;
    height: 54px;
    background-image: linear-gradient(rgba(0, 17, 14, 0.85), rgba(1, 38, 35, 0));
    &:before {
      cursor: pointer;
      font-family: "Material Icons", sans-serif;
      position: absolute;
      top:12px;
      right:12px;
      font-size: 33px;
      width: 30px;
      height: 30px;
      color: #8fcfff;
      text-align: right;
      content: 'close'
    }

  }
}
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0;
    width: 100%;
  }
}
@keyframes slideout {
  from {

    margin-right: 0;
    width: 100%
  }

  to {
    margin-right: 100%;
    width: 0;
  }
}
.routerf-leave-active {
  height: 0;
  animation: .2s linear slideout;
}
.routerf-enter-active {
  opacity: 1;
  animation: .2s linear slidein;
}

.routerf-enter {
  opacity: 0;
}

.snippet {
  width: 200vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  font-family: 'Amatic SC', sans-serif;
  font-size: 100px;

}
.snippet-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.effect {
  width: 0;
}

h1 {
  position: relative;
  font-size: calc(20px + 5vw);
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  user-select: none;
  white-space: nowrap;
}

h1 span {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

h1::before,
h1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}

</style>