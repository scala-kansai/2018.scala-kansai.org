<template>
  <section class="p-access">
    <div class="c-container">
      <h3 class="p-access_heading">アクセス</h3>
      <div class="p-access_read">
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

  .p-access {
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
