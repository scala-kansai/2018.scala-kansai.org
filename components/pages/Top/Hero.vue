<template>
  <section class="p-hero">
    <div class="c-container">
      <h3 class="p-hero_heading">関西最大級Scalaカンファレンス</h3>
      <div class="p-hero_read">
        2018年  11月 10日 ( 土 )  -  11日 ( 日 )　大阪にて開催！
        <br>
        今年は2日間に渡っての開催となります！
      </div>
      <p>スピーカー・スポンサー募集中！</p>
      <p>SNSでシェア</p>
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
