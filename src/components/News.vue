<template>
  <div id="news" class="subPage">
    <div class="close-box clickable" @click="hideSubpage">x</div>
    <div class="text">
      News
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
    hideSubpage() {
      this.$emit('hide-subpage')
    },
  },
  mounted() {
  }
} 
</script>
<style scoped></style>
