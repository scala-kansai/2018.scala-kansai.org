<template>
  <section class="p-hero">
    <div class="p-hero_imgArea">
      <img src="~assets/images/leaf1.svg" class="leaf1">
      <img src="~assets/images/leaf2.svg" class="leaf2">
      <img src="~assets/images/leaf3.svg" class="leaf3">
      <img src="~assets/images/leaf4.svg" class="leaf4">
      <img src="~assets/images/leaf5.svg" class="leaf5">
      <img src="~assets/images/leaf6.svg" class="leaf6">
      <img src="~assets/images/leaf7.svg" class="leaf7">
      <img src="~assets/images/leaf8.svg" class="leaf8">
      <img src="~assets/images/leaf9.svg" class="leaf9">
      <img src="~assets/images/leaf10.svg" class="leaf10">
    </div>

    <div class="c-container">
      <img src="~assets/images/keyVisual.png" class="p-hero_keyVisual">
      <h3 class="p-hero_heading">
        関西最大級
        <br>
        Scalaカンファレンス
      </h3>
      <div class="p-hero_read">
        2018年 &nbsp;<span class="day">11</span>月 <span class="day">10</span>日 (<span class="week">土</span>)  &nbsp; -  &nbsp; <span class="day">11</span>日 (<span class="week">日</span>)　大阪にて開催！
        <br>
        今年は2日間に渡っての開催となります！
      </div>
      <div class="p-hero_now">
        <a href="">スピーカー・スポンサー募集中！</a>
      </div>
      <div class="p-hero_share">
        <a class="btn" href="https://twitter.com/intent/tweet?text=Scala関西Summit 2018 - 関西のScala大規模イベント11/10(土),11/11(日)開催  http://summit.scala-kansai.org/&amp;hashtags=scala_ks" target="_blank">
          <i class="fab fa-twitter" aria-hidden="true"></i>
        </a>
        <a class="btn" href="https://www.facebook.com/sharer.php?u=http://summit.scala-kansai.org/&amp;amp;t=Scala関西Summit 2018 - 関西のScala大規模イベント11/10(土),11/11(日)開催&amp;hashtags=scala_ks" target="_blank">
          <i class="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <p class="title">SNSでシェア</p>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  @mixin leaf {
    position: absolute;
    max-width: 500px;
  }

  .p-hero {
    padding: 40px 0 20px;
    background: #FFEBB8;
    text-align: center;
    position: relative;


    &_imgArea {
      margin:  0 auto;
      max-width: 1500px;
    }

    .leaf1 {
      @include leaf;
      width: 20vw;
      top: 2%;
      right: 7vw;

    }
    .leaf2 {
      @include leaf;
      width: 10vw;
      top: 20%;
      right: 2vw;

    }
    .leaf3 {
      @include leaf;
      width: 21vw;
      right: 4vw;
      top: 45%;

    }
    .leaf4 {
      @include leaf;
      width: 11vw;
      right: 13vw;
      top: 34%;

    }
    .leaf5 {
      @include leaf;
      width: 17vw;
      left: 59%;
      top: 20%;

    }
    .leaf6 {
      @include leaf;
      width: 16vw;
      left: 22vw;
      top: 27%;
    }
    .leaf7 {
      @include leaf;
      width: 14vw;
      left: 19vw;
      top: 51%;
    }
    .leaf8 {
      @include leaf;
      width: 19vw;
      left: 1vw;
      top: 48%;
    }
    .leaf9 {
      @include leaf;
      width: 10vw;
      top: 33%;
      left: 2vw;
    }
    .leaf10 {
      @include leaf;
      width: 12vw;
      top: 12%;
      left: 12vw;
    }
    .c-container {
      position: relative;
    }


    &_keyVisual {
      max-width: 280px;

    }

    &_heading {
      margin-top: 0;
      margin-bottom: 20px;
      font-size: 4rem;
      font-weight: bold;
      line-height: 1.4;

    }

    &_read {
      margin-bottom:  2em;
      font-size: 1.8rem;
      font-feature-settings : "palt";

      .day {
        font-size: 1.5em;
      }
      .week {
        font-weight: bold;
      }
    }

    &_now {
      display: inline-block;
      margin-bottom: 30px;
      border-radius: 9999px;
      padding: .5em 1em;
      min-width: 320px;
      font-size: 1.6rem;
      font-weight: bold;
      background: white;
    }
    &_share {
      .btn {
        display: inline-block;
        margin: 0 10px;
        border-radius: 50%;
        padding: .3em;
        font-size: 2rem;
        width: 40px;
        height: 40px;
        background: $clr_brown;
        line-height: 2;
        color: white;
      }
      .title {
        font-weight: bold;
        letter-spacing: 2px;
      }

    }
  }
</style>
