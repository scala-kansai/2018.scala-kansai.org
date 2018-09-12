<template>
  <section class="p-timeTable" id="top-timetable">
    <div class="c-container">
      <h3 class="p-timeTable_heading">タイムテーブル</h3>
      <div class="p-timeTable_timeTable">
        <iframe class="p-timeTable_PDF" src="https://drive.google.com/file/d/1vdQXIf4D4M-iVFgShDB3YZwGyq48eUEi/preview"></iframe>
      </div>
      <div class="p-timeTable_read">
        <a class="btn" href="https://drive.google.com/file/d/1vdQXIf4D4M-iVFgShDB3YZwGyq48eUEi/preview">
          <i class="fas fa-search-plus"></i>
          別窓で開く
        </a>
      </div>
      <h3 class="p-timeTable_heading">セッション</h3>
      <div class="p-timeTable_read">
        セッションの詳細や登壇者プロフィールなどはこちらよりご確認ください。
      </div>
      <div>
        <router-link to="/session" class="btn">
          <i class="fas fa-bookmark"></i>
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
    &_timeTable {
      margin-bottom: 10px;
      max-width: 100%;
      height: 200px;
      overflow: scroll;

      @include desktop{
        height: 600px;
      }
    }

    &_PDF {
      min-width: 100%;
      @include desktop{
        height: 600px;
      }
    }

  }
</style>
