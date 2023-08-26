<template>
  <div id="imgContainer" class="wallpaper">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div>{{ msg }}</div>
</template>

<script setup>

defineProps({
  msg: String,
})

function randomClass() {
  return "slide" + (Math.floor(Math.random() * 6) + 1)
}
function change() {

}

</script>
<script>
const NUMBER_OF_IMAGES = 16
let currentImage = 0
let currentContainer = 1
let array = shuffle([...Array(NUMBER_OF_IMAGES).keys()])
function shuffle(arr) {
  var m = arr.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}

function changeContainer() {
  let newIndex = currentContainer
  while (newIndex == currentContainer) {
    newIndex = Math.floor(Math.random() * 4)
  }
  currentContainer = newIndex
}
function changeImage() {
  currentImage = currentImage == NUMBER_OF_IMAGES - 1 ? 0 : ++currentImage
}

export default {
  methods: {
    doByTimeout() {
      setTimeout(() => {
        changeContainer()
        let container = document.getElementById("imgContainer").children[currentContainer]
        let className = " slide" + (new Number(array[currentImage]) + 1)
        container.className = "anim" + className
        changeImage()
        setTimeout(() => {
          container.className = "dark" + className
        }, "2000")
        this.doByTimeout()
      }, "3000");

    },


  },
  mounted() {
    this.doByTimeout();

  }
} 
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
