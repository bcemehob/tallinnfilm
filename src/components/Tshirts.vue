<template>
  <div id="tshirts" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      <div class="subpage-title">
        T-Shirt!
      </div>
      <div>
        You can be an owner of Tallinnfilm branded T-Shirt
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    hideSubpage() {
      this.$emit('hide-subpage')
    },
  },
}
</script>