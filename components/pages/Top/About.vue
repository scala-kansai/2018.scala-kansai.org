<template>
  <section class="p-about">
    <img src="~assets/images/leaf4.svg" class="leaf4">
    <img src="~assets/images/leaf6.svg" class="leaf6">
    <div class="p-about_frame"/>
    <div class="c-container">
      <img src="~assets/images/logo.svg" class="p-about_logo">
      <h3 class="p-about_heading">Scala関西Summit2018について</h3>
      <div class="p-about_read">
        Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
      </div>
      <div class="p-about_list">
        <div class="p-about_listItem">
          <div class="row">
            <div class="col-auto detail">
              <img class="img" src="~assets/images/about_session.png" alt="session">
            </div>
            <div class="col">
              <h3 class="title">
                <span class="day">1日目</span>
                セッション
              </h3>
              <p class="description">Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）</p>
            </div>
          </div>
        </div>
        <div class="p-about_listItem">
          <div class="row">
            <div class="col-auto">
              <img class="img" src="~assets/images/about_unConf.png" alt="unConference">
            </div>
            <div class="col">
              <h3 class="title">
                <span class="day">2日目</span>
                アンカンファレンス
              </h3>
              <p class="description">Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）</p>
            </div>
          </div>
        </div>
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
    max-width: 180px;
  }

  .p-about {
    @include secPadding;
    padding-top: 80px;
    width: 100%;
    background: $clr_bg-Green;
    background-image: url("~assets/images/about_background.png");
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    .leaf4 {
      @include leaf;
      width: 15vw;
      bottom: 0;
      left: 10vw;

    }
    .leaf6 {
      @include leaf;
      width: 10vw;
      top: 40%;
      right: 8vw;

    }

    &_frame {
      width: 100vw;
      background-image: url("~assets/images/hero_bottom.svg");
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: 0;
      z-index: 1000;
      &::before {
        content: "";
        display: block;
        padding-top: 17%;
      }

    }
    &_logo {
      margin-bottom: 30px;
      width: 60%;
      max-width: 650px;
    }

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }
    &_list {
      margin:  0 auto;
      display: inline-block;
      max-width: 750px;
    }
    &_listItem {
      margin-bottom: 20px;
      padding: 40px;
      border-radius: 10px;
      background: white;
      box-sizing: border-box;
      .detail{
        text-align: left;
      }
      .img {
        max-width: 130px;
      }
      .title {
        margin: 0;
        font-size: 2.3rem;
        font-weight: bold;
        text-align: left;
      }
      .day{
        margin-right: .5em;
        font-size: 2rem;
        color: $clr_brown;
        text-align: left;
      }

      .description {
        text-align: left;
      }
    }
  }
</style>
