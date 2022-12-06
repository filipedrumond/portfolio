<template>
  <div>
    <default-template></default-template>
  </div>
</template>

<script>
import DefaultTemplate from '@/components/templates/DefaultTemplate.vue'

export default {
  name: 'Home',
  components: { DefaultTemplate },
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
