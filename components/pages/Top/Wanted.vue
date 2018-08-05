<template>
  <section id="p-wanted" class="p-wanted">
    <img src="~assets/images/leaf5.svg" class="leaf5">
    <img src="~assets/images/leaf7.svg" class="leaf7">
    <div class="c-container">
      <h3 class="p-wanted_heading">スピーカー &amp; スポンサー募集</h3>
      <div class="p-wanted_read">
        Scala関西Summitは、Scalaにかかわるすべての人たちと一緒につくりあげていくイベントです。
        イベント当日のコンテンツや、Scalaを利用されている企業のご支援など、ぜひご協力をお願いします。
      </div>
      <div class="p-wanted_list row">
        <div class="col-md">
          <div class="p-wanted_listItem">
            <div class="title">
              <i class="fas fa-microphone"></i>
              スピーカー募集</div>
            <div class="description">
              Scala関西Summitでは、Scalaについて話をしたいすべての人に登壇のチャンスがあります！
              日々のお仕事や、研究・学習の成果をぜひわたしたちに聴かせてください。
            </div>
            <div class="deadline">応募締切：2018年8月31日</div>
            <a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSer9U30kuLodBr_7x6j2R7c0IxHfLLyiJ6f4Pe-SJWyz3GUuw/viewform?usp=sf_link" target="_blank">
              <i class="fas fa-microphone"></i>
              スピーカー申込み</a>
          </div>
        </div>
        <div class="col-md">
          <div class="p-wanted_listItem">
            <div class="title">
              <i class="fas fa-star"></i>
              スポンサー募集</div>
            <div class="description">
              Scala関西Summitでは、イベントを支援してくださるスポンサーを募集します。
              関西だけでなく、毎年日本全国から多く参加者が集まるこのイベントで、参加者とスポンサーの良い出会いがあるものと期待しています。
              さまざまなスポンサー特典を用意していますので、ご支援よろしくお願いします。
            </div>
            <div class="deadline">応募締切：2018年9月30日</div>
            <a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdEdPzvXlaB7RfeaqmIy4hPpGlhz-I8ciNw-QNws7S150gHgg/viewform?usp=sf_link" target="_blank">
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
        max-width: 200px;
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
        max-width: 200px;
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
      padding: 20px;
      border-radius: 10px;
      background: white;

      @include desktop {
        margin-bottom: 0;
        padding: 40px;
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
