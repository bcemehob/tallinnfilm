<template>
  <div id="tshirts" class="subPage">
    <div class="close-box clickable" @click="hideList">x</div>
    <div class="text">
      You can be an owner of Tallinnfilm branded T-Shirt
    </div>
  </div>
</template>

<script>

export default {
  data()  {
    return {
      listClassName: 'shown'
    }
  },
  methods: {
    hideList() {
      this.$emit('hide-subpage')
    },
  },
}
</script>
<style scoped></style>
