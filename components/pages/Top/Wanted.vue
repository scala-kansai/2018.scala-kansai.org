<template>
  <section class="p-wanted">
    <div class="c-container">
      <h3 class="p-wanted_heading">スピーカー&スポンサー募集</h3>
      <div class="p-wanted_read">
        Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
      </div>
      <div class="p-wanted_list row">
        <div class="col">
          <div class="p-wanted_listItem">
            <div class="title">
              <i class="fas fa-microphone"></i>
              スピーカー募集</div>
            <div class="description">Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）</div>
            <div class="deadline">応募締切：8月31日（仮）</div>
            <a class="btn" href="#" target="_blank">
              <i class="fas fa-microphone"></i>
              スピーカー申込み</a>
          </div>
        </div>
        <div class="col">
          <div class="p-wanted_listItem">
            <div class="title">
              <i class="fas fa-star"></i>
              スポンサー募集</div>
            <div class="description">Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）</div>
            <div class="deadline">応募締切：8月31日（仮）</div>
            <a class="btn" href="#" target="_blank">
              <i class="fas fa-star"></i>
              スポンサー申込み</a>
          </div>
        </div>
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

  .p-wanted {
    @include secPadding;
    background: $clr_bg-lightOrange;

    .btn {
      @include btnIcon();
    }

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

    &_listItem {
      padding: 40px;
      border-radius: 10px;
      background: white;

      .title {
        margin-bottom: .5em;
        font-size: 2.5rem;
        font-weight: bold;
        i {
          margin-right: .2em;
          color: $clr_brown;
        }
      }
      .description {
        margin-bottom: 2em;
      }
      .deadline {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 1.5em;
      }

    }


  }
</style>
