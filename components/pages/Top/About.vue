<template>
  <section class="p-about">
    <div class="c-container">
      <h3 class="p-about_heading">Scala関西Summit2018について</h3>
      <div class="p-about_read">
        Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
      </div>
      <div class="p-about_list">
        <div class="p-about_listItem">
          <div class="row">
            <div class="col-4 detail">
              <img src="" alt="session">
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
            <div class="col">
              <h3 class="title">
                <span class="day">2日目</span>
                アンカンファレンス
              </h3>
              <p class="description">Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）</p>
            </div>
            <div class="col-4">
              <img src="" alt="unConference">
            </div>
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

  .p-about {
    @include secPadding;
    background: $clr_bg-Green;

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
