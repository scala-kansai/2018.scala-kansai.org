<template>
  <section class="p-timeTable" id="top-timetable">
    <div class="c-container">
      <h3 class="p-timeTable_heading">タイムテーブル</h3>
      <div class="p-timeTable_read">
        comming soon...
        <br>
        もうしばらくお待ち下さい。公開までお楽しみに！
        <br>
      </div>
      <h3 class="p-timeTable_heading">セッション</h3>
      <div class="p-timeTable_read">
        セッションの詳細や登壇者プロフィールなどはこちらよりご確認ください。
      </div>
      <div>
        <router-link to="/session" class="btn">
          <i class="fas fa-star"></i>
          セッション一覧
        </router-link>
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

    a{
      text-decoration: underline;
    }

    .btn {
      @include btnIcon();
    }

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

  }
</style>
