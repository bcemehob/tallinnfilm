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
      this.$emit('hide-tshirts')
    },
    showLinks() {
      console.log("SHOW LINSK")
    }
  },
  mounted() {
  }
} 
</script>
<style scoped></style>
