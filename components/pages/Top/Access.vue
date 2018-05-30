<template>
  <section class="p-access">
    <img src="~assets/images/leaf4.svg" class="leaf4">
    <img src="~assets/images/leaf6.svg" class="leaf6">
    <img src="~assets/images/leaf3.svg" class="leaf3">
    <img src="~assets/images/leaf5.svg" class="leaf5">
    <div class="c-container">
      <h3 class="p-access_heading">アクセス</h3>
      <div class="p-access_read">
        Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
      </div>
      <div class="p-access_list">
        <div class="p-access_listItem">
          <div class="map">マップが入る</div>
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
            <a href="#" class="link" target="_blank">Googleマップで開く</a>
          </div>
        </div>
        <div class="p-access_listItem">
          <div class="map">マップが入る</div>
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
            <a href="#" class="link" target="_blank">Googleマップで開く</a>
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
        width: 10vw;
        max-width: 100%;
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
        max-width: 100%;
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
        max-width: 100%;
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

      .map {
        background: red;
      }

      .detail {
        padding: 20px 40px 40px;
        background: white;
      }

      .title {
        font-size: 2rem;
        font-weight: bold;
      }
      .day {
        margin-right: .5em;
        font-weight: normal;
        font-size: 2rem;
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
