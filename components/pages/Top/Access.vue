<template>
  <section class="p-access">
    <img src="~assets/images/leaf4.svg" class="leaf4">
    <img src="~assets/images/leaf6.svg" class="leaf6">
    <img src="~assets/images/leaf3.svg" class="leaf3">
    <img src="~assets/images/leaf5.svg" class="leaf5">
    <div class="c-container">
      <h3 class="p-access_heading">アクセス</h3>
      <div class="p-access_read">
        Scala関西Summitは、はじめての2日間開催となります。
        初日のセッションと、2日目のアンカンファレンス。参加者の皆さんには移動のお手間をおかけすることになりますが、イベント形式にとって最適な会場を検討した結果、2日間それぞれで開催場所が異なります。
        お間違えのないようよろしくお願いします。
      </div>
      <div class="p-access_list">
        <div class="p-access_listItem">
          <div class="mapArea">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.00535833887!2d135.5116563157123!3d34.70504479049216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6c65a212a67%3A0x29b74f158dc09739!2z5aSn6Ziq5aSp5rqA56CU5L-u44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1527664830140" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="detail">
            <div class="title">
              <span class="day">1日目</span>
              天満研修センター
            </div>
            <p>〒530-0034　大阪市北区錦町2-21</p>
            <ul class="list">
              <li>JR「天満駅」より徒歩2分</li>
              <li>地下鉄堺筋線「扇町駅」 1番出口 より徒歩７分</li>
              <li>地下鉄谷町線「天神橋筋六丁目駅」 12番出口より徒歩10分</li>
            </ul>
            <a href="https://goo.gl/maps/3t8k2vZp4xq" class="link" target="_blank">Googleマップで開く</a>
          </div>
        </div>
        <div class="p-access_listItem">
          <div class="mapArea">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313.7435464286166!2d135.49451015203658!3d34.70446987236609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e721f00199e5%3A0x627d8007a7d27230!2z44GV44GP44KJ44Kk44Oz44K_44O844ON44OD44OI5qCq5byP5Lya56S-!5e0!3m2!1sja!2sus!4v1527665206765" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </div>
          <div class="detail">
            <div class="title">
              <span class="day">2日目</span>
              さくらインターネット株式会社 本社
            </div>
            <p>〒530-0011 大阪市北区大深町4番20号 グランフロント大阪タワーA 35階</p>
            <ul class="list">
              <li>JR「大阪駅」より徒歩7分</li>
              <li>地下鉄御堂筋線「梅田駅」より徒歩9分</li>
              <li>阪神「梅田駅」、阪急「梅田駅」より徒歩10分</li>
              <li>地下鉄四つ橋線「西梅田駅」、地下鉄谷町線「東梅田駅」、JR「北新地駅」より徒歩13分</li>
            </ul>
            <a href="https://goo.gl/maps/poGvnuveHZt" class="link" target="_blank">Googleマップで開く</a>
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

  .p-access {
    @include secPadding;
    background: $clr_bg-Green;
    position: relative;

    .leaf3 {
      @include leaf;
      width: 30vw;
      top: -20px;
      right: 5vw;

      @include desktop {
        max-width: 300px;
        width: 25vw;
        top: 1%;
        right: 10vw;
      }
    }
    .leaf4 {
      @include leaf;
      width: 20vw;
      max-width: 100px;
      bottom: -40px;
      right: 5vw;
      @include desktop {
        max-width: 200px;
        width: 10vw;
      }
    }
    .leaf5 {
      @include leaf;
      width: 20vw;
      max-width: 100px;
      bottom: 50px;
      left: 5vw;

      @include desktop {
        width: 15vw;
        max-width: 250px;
      }

    }
    .leaf6 {
      @include leaf;
      width: 20vw;
      max-width: 100px;
      top: 30%;
      left: 10vw;
      @include desktop {
        width: 12vw;
        max-width: 200px;
        top: 150px;
      }

    }

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

    &_list {
      position: relative;
    }

    &_listItem {
      margin-bottom: 60px;
      text-align: left;
      .mapArea {
        width: 100%;
        height: 250px;
        @include desktop {
          height: 400px;
        }
      }
      .map {
        width: 100%;
        height: 100%;
      }

      .detail {
        padding: 20px 35px 40px;
        background: white;
        @include desktop {
          padding: 20px 40px 40px;
        }
      }

      .title {
        font-size: 1.8rem;
        font-weight: bold;
        @include desktop {
          font-size: 2rem;
        }
      }
      .day {
        margin-right: .5em;
        font-weight: normal;
        font-size: 1.5rem;
        @include desktop {
          font-size: 2rem;
        }
      }
      .list {
        margin-bottom: 2em;
      }

      .link {
        font-size: 1.6rem;
        padding-bottom: .5em;
        border-bottom: 1px solid $clr_accent;
        color: $clr_accent;
      }
    }
  }
</style>
