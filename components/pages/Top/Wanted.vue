<template>
  <section class="p-wanted">
    <img src="~assets/images/leaf5.svg" class="leaf5">
    <img src="~assets/images/leaf7.svg" class="leaf7">
    <div class="c-container">
      <h3 class="p-wanted_heading">スピーカー &amp; スポンサー募集</h3>
      <div class="p-wanted_read">
        Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
      </div>
      <div class="p-wanted_list row">
        <div class="col-md">
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
        <div class="col-md">
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

  @mixin leaf {
    position: absolute;
    max-width: 180px;
  }

  .p-wanted {
    @include secPadding;
    background: $clr_bg-lightOrange;
    position: relative;

    .leaf5 {
      @include leaf;
      width: 20vw;
      max-width: 120px;
      bottom: -10px;
      left: 10vw;
      @include desktop {
        width: 18vw;
        max-width: 100%;
        bottom: -5%;
        left: 20vw;
      }

    }
    .leaf7 {
      @include leaf;
      width: 20vw;
      max-width: 100px;
      top: -3%;
      right: 14vw;

      @include desktop {
        width: 13vw;
        max-width: 100%;
      }

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

    &_listItem {
      margin-bottom: 30px;
      padding: 40px;
      border-radius: 10px;
      background: white;

      @include desktop {
        margin-bottom: 0;
      }

      .title {
        margin-bottom: .5em;
        font-size: 2rem;
        font-weight: bold;
        @include desktop {
          font-size: 2.3rem;
        }

        i {
          font-size: 2rem;
          margin-right: .2em;
          color: $clr_brown;

        }
      }
      .description {
        margin-bottom: 2em;
      }
      .deadline {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1.5em;
        @include desktop {
          font-size: 1.6rem;
        }
      }

    }


  }
</style>
