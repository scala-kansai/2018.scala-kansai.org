<template>
  <section class="p-about" id="p-about">
    <img src="~assets/images/leaf4.svg" class="leaf4">
    <img src="~assets/images/leaf6.svg" class="leaf6">
    <div class="p-about_frame"/>
    <div class="c-container">
      <img src="~assets/images/logo.svg" class="p-about_logo">
      <h3 class="p-about_heading">Scala関西Summit&nbsp;2018について</h3>
      <div class="p-about_read">
        Scala関西Summitは、Scalaをテーマとした技術カンファレンスです。地方開催という特色を活かし、地元企業の導入事例や、普段の仕事で気づいたTIPS、新しい技術の導入事例など、幅広いコンテンツが一般公募によって持ち寄られます。Scalaを書いたことがないけれど気になっているという人や、仕事でヘビーに使っている人など、Scalaに関わるあらゆる人々を対象としたイベントです。Scala関西Summitは「参加者全員でつくるイベント」を目指しており、ぜひ明日からのScala仲間を探しに来てください。
      </div>
      <div class="p-about_list">
        <div class="p-about_listItem">
          <div class="row ">
            <div class="col-md-auto">
              <img class="img" src="~assets/images/about_session.png" alt="session">
            </div>
            <div class="col-md detail">
              <h3 class="title">
                <span class="day">1日目</span>
                セッション
              </h3>
              <p class="description">
                講演やハンズオンなどを通じて、Scalaについて学んだり知見を共有したりします。
                コンテンツは広く一般に公募し、例年地元企業による事例紹介、入門ハンズオン、学習や現場への導入に苦労したエピソードなど、さまざまな立場の人たちから幅広いコンテンツが持ち寄られます。
                大阪の天満研修センターでの開催です。
              </p>
            </div>
          </div>
          <div class="afterParty">
            <h4 class="title">懇親会</h4>
            <div class="description">
              懇親会は多くのスポンサー・スピーカーのみなさまが参加予定で、LT大会も行われ例年大変盛り上がっております。 ぜひご参加ください。
            </div>
            <div class="row info">
              <div class="col-2 infoTitle">会場</div>
              <div class="col">さくらインターネット株式会社 本社</div>
            </div>
            <div class="row info">
              <div class="col-2 infoTitle">参加費</div>
              <div class="col">学生 ¥2,000　<br> 一般 ¥4,000</div>
            </div>
          </div>
          <a class="btn" href="https://skug.connpass.com/event/100075/" target="_blank">
            <i class="fas fa-ticket-alt"></i>
            １日目に参加する！</a>
        </div>
        <div class="p-about_listItem">
          <div class="row">
            <div class="col-md-auto">
              <img class="img" src="~assets/images/about_unConf.png" alt="unConference">
            </div>
            <div class="col">
              <h3 class="title">
                <span class="day">2日目</span>
                アンカンファレンス
              </h3>
              <p class="description">
                アンカンファレンスは、参加者によって作り上げる1日となります。
                事前に用意されたプログラムはなく、当日、イベント参加者全員でその日に何をするかを決めます。
                初日のセッションを聴いて、こういうところが気になった、わからないことを教えてほしい、セッションにはなかったこのテーマについて話ができますなど、ぜひ皆さんのやりたいことを発表してください。
                <br><br>
                さくらインターネットの開放的なオフィスで、前日のセッションスピーカーにさらに追加で質問したい、とか、ハッカソンをやりましょう、と周囲に呼びかけてみたり、会場を自由に使ってScalaについての意見交換をしましょう。
                さくらインターネット株式会社 本社が会場となります。
              </p>
            </div>
          </div>
          <a class="btn" href="https://skug.connpass.com/event/99741/" target="_blank">
            <i class="fas fa-ticket-alt"></i>
            ２日目に参加する！</a>
        </div>
      </div>
      <p class="attention">※両日参加の場合は両方の参加登録が必要になります！</p>
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
    padding-top: 40px;
    width: 100%;
    background: $clr_bg-Green;
    background-image: url("~assets/images/about_background.png");
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;

    @include desktop {
      padding-top: 80px;
    }

    .leaf4 {
      @include leaf;
      width: 20vw;
      max-width: 80px;
      bottom: 20px;
      left: 10vw;
      @include desktop {
        width: 15vw;
        max-width: 200px;
        bottom: 0;
      }

    }
    .leaf6 {
      @include leaf;
      width: 15vw;
      max-width: 60px;
      top: 26%;
      right: 8vw;

      @include desktop {
        max-width: 200px;
        width: 10vw;
        top: 40%;
      }

    }

    &_frame {
      width: 100vw;
      background-image: url("~assets/images/hero_bottom.svg");
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      top: -1px;
      z-index: 1000;
      &::before {
        content: "";
        display: block;
        padding-top: 17%;
      }

    }
    &_logo {
      margin-bottom: 30px;
      width: 75%;
      max-width: 300px;
      @include desktop {
        width: 60%;
        max-width: 650px;
      }
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
        margin-bottom: 10px;
        max-width: 100px;
        @include desktop {
          margin-bottom: 0;
          max-width: 130px;
        }
      }
      .title {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
        text-align: left;
        @include desktop {
          font-size: 2.3rem;
        }
      }
      .day{
        margin-right: .5em;
        font-size: 1.8rem;
        color: $clr_brown;
        text-align: left;
        @include desktop {
          font-size: 2rem;
        }
      }
      .btn {
        @include btnIcon();
        .fa-ticket-alt{
          transform: rotate(-45deg);
        }
      }

      .description {
        margin-bottom: 30px;
        text-align: left;
      }

      .afterParty {
        border-top: 1px dotted $clr_brown;
        padding-top: 20px;

        @include desktop {
          padding: 20px 40px 0;
        }


        .title {
          margin-bottom: .5em;
        }

        .info {
          margin-bottom: 1rem;
          text-align: left;
          &:last-of-type {
            margin-bottom: 30px;
          }
        }
        .infoTitle {
          position: relative;
          @include desktop {
            max-width: 60px;
          }
          &::after {
            content: "：";
            position: absolute;
            right: 0;
          }
        }

      }
    }

    .attention {
      font-weight: bold;
      font-size: 1.8rem;
      letter-spacing: 1px;
      color: red;
    }
  }
</style>
