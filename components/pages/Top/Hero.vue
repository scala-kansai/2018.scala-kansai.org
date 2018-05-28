<template>
  <section class="p-hero">
    <div class="c-container">
      <h3 class="p-hero_heading">ヒーローセクション</h3>
      <div class="p-hero_read">
        Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
      </div>
    </div>
  </section>
</template>

<script>

  export default  {
    components: {

    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-hero {
    @include secPadding;
    background: $clr_bg-Green;

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

  }
</style>
