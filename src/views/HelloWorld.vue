<template>
  <div>
    <default-template-vue></default-template-vue>
  </div>
</template>

<script>
import DefaultTemplateVue from '@/components/templates/DefaultTemplate.vue'

export default {
  name: 'HelloWorld',
  components: { DefaultTemplateVue },
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped></style>
