<template>
  <div>
    <l-header/>
    <div class="content">
      <nuxt/>
    </div>
    <l-footer/>
  </div>
</template>

<script>
  import lHeader from '~/components/layout/Header.vue'
  import lFooter from '~/components/layout/Footer.vue'

  export default {
    components: {
      lHeader,
      lFooter
    }
  }
</script>


<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";
  .content {
    padding-top: $header-size;
  }
</style>
