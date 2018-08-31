<template>
  <section>
    <div>
      <div class="p-session_header">
        <router-link
          to="/">
          <img src="~assets/images/logo.svg" class="p-session_logo" alt="Scala Kansai summit2018">
        </router-link>
      </div>
      <div class="p-session">
        <div class="c-container">
          <h3 class="p-session_heading">
            セッション一覧
          </h3>
          <div class="p-session_read">
            仮テキスト仮テキスト仮テキスト仮テキスト仮テキスト
          </div>
          <div class="p-session_sessions" v-if="sponsors.platinum">
            <div class="list" v-for="sponsor in sponsors.platinum" :key="sponsor.name" v-if="sponsor.job" :id="sponsor.name">
              <div class="listItem">
                <div class="inner">
                  <div class="status">
                    <span class="level high">上級者向け</span>
                    <span class="level easy">初心者向け</span>
                    <span class="time"><i class="far fa-clock"></i>20分</span>
                  </div>
                  <p class="title" target="_blank">{{sponsor.name}}</p>
                  <div class="description" v-html="md(sponsor.job.message)" />
                  <div class="recommend">
                    <p class="recommendTitle">こんな人にオススメ</p>
                    <ul>
                      <li>Scalaの基礎文法は学んだが、何を作れるのかがまだ分からない方</li>
                      <li>Scalaの基礎文法は学んだが、何を作れるのかがまだ分からない方</li>
                      <li>Scalaの基礎文法は学んだが、何を作れるのかがまだ分からない方</li>
                    </ul>
                  </div>
                  <div class="speaker">
                    <div class="row">
                      <div class="col-auto">
                        <img class="icon" src="http://placehold.it/200x200/ccc/fff/&text=hoge" alt="">
                      </div>
                      <div class="col">
                        <div class="name">竹添 直樹</div>
                        <p class="profile">
                          株式会社ビズリーチ所属。Scala関連書籍の執筆・翻訳をしたり、GitBucket、Scalatra、Apache PredictionIOなどのコミッタをやったりしています。
                        </p>
                        <div class="links">
                          <a href="#">GitHub</a>
                          <a href="#">Twitter</a>
                          <a href="#">Facebook</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <router-link
                    to="/"
                    class="p-session_btn-top">
              <i class="fas fa-chevron-left"></i>
              TOPに戻る
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import marked from "marked"

export default {
  computed:{
    sponsors(){
      return this.$store.state.sponsors
    },
  },
  methods:{
    logoStyle (sponsor){
      return {
        backgroundImage: `url('/sponsors/${sponsor.image}')`
      }
    },
    md (string) {
      return marked(string);
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-session {
    @include secPadding;
    background: #FFEBB8;

    &_header {
      background: white;
    }
    &_logo {
      padding: 10px;
      width: 75%;
      max-width: 150px;
      @include desktop {
        padding: 20px;
        width: 60%;
        max-width: 300px;
      }
    }

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

    &_sessions {
      margin-bottom: 30px;
      @include desktop {
        margin-bottom: 60px;
      }

      .row {
        justify-content: center;
      }

      .list {
        box-sizing: border-box;
        text-align: center;
      }

      .listItem {
        margin-bottom: 30px;
        box-sizing: border-box;
        padding: 30px 0 0;
        text-align: center;
        background: white;
        position: relative;

        @include desktop {
          padding: 50px 0 0;
        }

        .inner {
          width: 100%;
          max-width: 750px;
          margin: 0 auto 30px;
          padding: 0 25px;
          display: inline-block;
          text-align: left;
          box-sizing: border-box;

          @include desktop {
            margin: 0 auto 60px;
          }
        }
        .status {
          margin-bottom: 20px;
        }

        .level {
          display: inline-block;
          margin-right: 15px;
          padding: 3px 5px;
          color: white;
          border-radius: 4px;
          background: #ccc;
        }
        .level.high {
          background: #D64F2C;
        }
        .level.easy {
          background: #0F996B;
        }
        .time {
          i {
            display: inline-block;
            margin-right: 5px;
            font-size: 1.6rem;

          }
        }

        .title {
          display: block;
          margin-top: 0;
          margin-bottom: 10px;
          padding-bottom: 0;
          width: 100%;
          text-align: left;
          font-size: 2.3rem;
          font-weight: bold;
          color: $clr_brown;
          @include desktop {
            padding-bottom: .1em;
          }
        }

        .description {
          display: block;
          margin-bottom: 40px;
          width: 100%;
          font-size: 1.6rem;
          box-sizing: border-box;
          /deep/ a {
            color: #C95F1C;
            text-decoration: underline;
          }
        }

        .recommend {
          margin-bottom: 20px;

          ul {
            -webkit-padding-start: 20px;
          }
        }
        .recommendTitle {
          font-weight: bold;
        }

        .speaker {
          border-top: 1px dotted $clr_brown;
          padding: 30px 0 0;

          .icon {
            display: inline-block;
            margin-bottom: 10px;
            width: 100px;
            height: 100px;
            border-radius: 50%;

          }
          .name {
            font-size: 1.8rem;
            font-weight: bold;
          }
          .links {
            a {
              display: inline-block;
              margin-right: 15px;
              margin-bottom: 10px;
              color: #C95F1C;
              text-decoration: underline;
            }
          }
        }
      }
    }


    &_btn-top {
      @include btnIcon(white,$clr_brown);
    }
  }
</style>
