<template>
  <section class="p-timeTable">
    <div class="c-container">
      <h3 class="p-timeTable_heading">タイムテーブル</h3>
      <div class="p-timeTable_read">
        comming soon...
        <br>
        もうしばらくお待ち下さい。公開までお楽しみに！
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

  .p-timeTable {
    @include secPadding;
    background: $clr_bg-cream;

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

  }
</style>
