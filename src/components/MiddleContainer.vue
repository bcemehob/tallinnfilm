<template>
  <div id="imgContainer" class="wallpaper">
    <div v-for="_ in containers"></div>
  </div>
</template>

<script setup>

defineProps({
  msg: String,
})
</script>
<script>
const NUMBER_OF_IMAGES = 25
const NUMBER_OF_CONTAINERS = window.innerWidth < 920 ? 2 : 4
let currentImage = 0
let currentContainerIndex = 1
let array = shuffle([...Array(NUMBER_OF_IMAGES).keys()])

function shuffle(arr) {
  let m = arr.length, t, i
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}

function changeContainer() {
  let newIndex = currentContainerIndex
  while (newIndex === currentContainerIndex) {
    newIndex = Math.floor(Math.random() * NUMBER_OF_CONTAINERS)
  }
  currentContainerIndex = newIndex
}

function setContainer(index) {
  currentContainerIndex = index
}

function changeImage() {
  currentImage = currentImage !== NUMBER_OF_IMAGES - 1 ? ++currentImage : 0
}

export default {
  data() {
    return {
      containers: [...Array(NUMBER_OF_CONTAINERS).keys()]
    }
  },
  methods: {
    doByTimeout() {
      setTimeout(() => {
        this.hideSlideAndShowNext()
        this.doByTimeout()
      }, 5000)
    },
    showSlide() {
      this.container().className = "anim" + this.className()
      changeImage()
    },
    container() {
      return document.getElementById("imgContainer").children[currentContainerIndex]
    },
    className() {
      return " slide" + (Number(array[currentImage]) + 1)
    },
    hideSlideAndShowNext() {
      changeContainer()
      this.container().className = this.container().className.replace("anim", "dark")
      setTimeout(() => {
        this.showSlide()
      }, 1000)
    },
    showAllSlides() {
      this.containers.forEach(index => {
        setTimeout(() => {
          setContainer(index)
          this.showSlide()
        }, 10)
      })
    }
  },
  mounted() {
    this.showAllSlides()
    this.doByTimeout()
  }
}
</script>
