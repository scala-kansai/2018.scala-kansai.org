<template>
  <section class="p-timeTable">
    <div class="c-container">
      <h3 class="p-timeTable_heading">タイムテーブル</h3>
      <div class="p-timeTable_read">
        comming soon...
        <br>
        もうしばらくお待ち下さい。公開までお楽しみに！
        <br>
        現在、みなさんがどんなセッションを聞きたいかの調査アンケートを実施中です！ｌ<a href="https://docs.google.com/forms/d/e/1FAIpQLSfgBnUpW2lSkv5eddA34S_3VUMNf_BcD_Gw1bW5Jnyhqn6vWA/viewform?usp=sf_link" target="_blank">こちらのリンク</a> からぜひご協力ください。
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
