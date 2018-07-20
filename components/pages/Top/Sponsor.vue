<template>
  <section class="p-sponsor" v-if="visible">
    <div class="c-container">
      <h3 class="p-sponsor_heading">スポンサー</h3>
      <div class="p-sponsor_platinum" v-if="sponsors.plutinum && sponsors.plutinum.length">
        <div class="title">
          Platinum
        </div>
        <div class="row">
          <div class="list col-md-10" v-for="sponsor in sponsors.plutinum" :key="sponsor.name">
            <div class="listItem">
              <div class="inner">
                <a :href="sponsor.url"><div class="thumb" :style="logoStyle(sponsor)" /></a>
                <a :href="sponsor.url" class="company">{{ sponsor.name }}</a>
                <p class="description">{{ sponsor.introduction }}</p>
              </div>
              <router-link
                to="/jobs"
                class="btn">広告・求人ページ<i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-sponsor_gold" v-if="sponsors.gold && sponsors.gold.length">
        <div class="title">
          Gold
        </div>
        <div class="row">
          <div class="list col-sm-6" v-for="sponsor in sponsors.gold" :key="sponsor.name">
            <div class="listItem">
              <div class="inner">
                <a :href="sponsor.url"><div class="thumb" :style="logoStyle(sponsor)" /></a>
                <a :href="sponsor.url" class="company">{{ sponsor.name }}</a>
                <p class="description">{{ sponsor.introduction }}</p>
              </div>
              <router-link
                to="/jobs"
                class="btn">広告・求人ページ<i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-sponsor_silver" v-if="sponsors.silver && sponsors.silver.length">
        <div class="title">
          Silver
        </div>
        <div class="row">
          <div class="list col-sm-4" v-for="sponsor in sponsors.silver" :key="sponsor.name">
            <div class="listItem">
              <div class="inner">
                <a :href="sponsor.url" ><div class="thumb" :style="logoStyle(sponsor)" /></a>
              </div>
              <router-link
                      to="/jobs"
                      class="btn">広告・求人ページ<i class="fas fa-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="p-sponsor_bronze" v-if="sponsors.bronze && sponsors.bronze.length">
        <div class="title">
          Bronze
        </div>
        <div class="row">
          <div class="list col-sm-3" v-for="sponsor in sponsors.bronze" :key="sponsor.name">
            <div class="listItem">
              <div class="inner">
                <a :href="sponsor.url" ><div class="thumb" :style="logoStyle(sponsor)" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default  {
  props: {
    sponsors: {
      type: Object,
      default: ()=>({}),
    },
  },
  computed: {
    visible () {
      // スポンサー情報が、どれか1つ以上のプラン入っていたら表示する
      return this.sponsors.plutinum && this.sponsors.plutinum.length ||
        this.sponsors.gold && this.sponsors.gold.length ||
        this.sponsors.silver && this.sponsors.silver.length ||
        this.sponsors.bronze && this.sponsors.bronze.length;
    }
  },
  methods:{
    logoStyle (sponsor){
      return {
        backgroundImage: `url('/sponsors/${sponsor.image}')`
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-sponsor {
    @include secPadding;
    background: $clr_bg-orange;

    &_heading {
      @include secHeading;
    }

    &_read {
      @include secRead;
    }

    .title {
      @include title-border;
    }
    .row {
      justify-content: flex-start;
    }
    .btn {
      display: block;
      width: 100%;
      padding: 1em 0;
      font-size: 1.3rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
      background: $clr_accent;
      cursor: pointer;
      transition: opacity .3s;

      @include desktop {
        font-size: 1.8rem;
        font-weight: normal;
      }

      :hover {
        opacity: .9;
        transition: opacity .3s;
      }

      i {
        margin-left: .5em;
      }
    }

    .company {
      display: block;
      margin: 0 0 .5em;
      padding-bottom: .1em;
      font-size: 2rem;
      font-weight: bold;
      color: $clr_brown;
      text-align: left;

    }

    .list {
      box-sizing: border-box;
      text-align: center;

    }
    .listItem {
      margin-bottom: 40px;
      box-sizing: border-box;
      padding: 40px 0 0;
      text-align: center;
      background: white;
      @include desktop {
        padding: 50px 0 0;
      }

      .inner {
        width: 100%;
        margin: 0 auto 30px;
        padding: 0 30px;
        display: inline-block;
        text-align: left;
        box-sizing: border-box;

        @include desktop {
          margin: 0 auto 40px;
        }
      }
    }

    &_platinum {
      margin-bottom: 30px;
      @include desktop {
        margin-bottom: 60px;
      }

      @include desktop {

      }
      .row {
        justify-content: center;
      }
      .listItem {
        .inner {
          max-width: 660px;
        }
        .thumb {
          display: inline-block;
          margin-bottom: 15px;
          width: 100%;
          max-width: 600px;
          background-image: url("http://placehold.it/600x480");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;

          &::before {
            content: "";
            display: block;
            padding-top: 80%;
          }
        }

        .description {
          display: inline-block;
          width: 100%;
          box-sizing: border-box;

          @include desktop {
            max-width: 600px;
          }
        }

      }
    }

    &_gold {
      margin-bottom: 30px;
      @include desktop {
        margin-bottom: 60px;
      }
      .list {

      }
      .listItem {
        .inner {
          max-width: 100%;
          @include desktop {
            max-width: 360px;
          }
        }
        .thumb {
          display: block;
          margin: 0 auto;
          margin-bottom: 15px;
          width: 100%;
          max-width: 200px;
          background-image: url("http://placehold.it/300x240");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;

          @include desktop {
            max-width: 300px;
          }

          &::before {
            content: "";
            display: block;
            padding-top: 80%;
          }
        }
      }
    }

    &_silver {
      margin-bottom: 30px;
      @include desktop {
        margin-bottom: 60px;
      }

      .list {
        box-sizing: border-box;
        width: 50%;
        padding-right: 10px;
        padding-left: 10px;
      }

      .listItem {
        margin-bottom: 20px;
        padding-top: 30px;

        @include desktop {
          margin-bottom: 30px;
        }

        .inner {
          margin-bottom: 20px;
          width: 100%;
          padding: 0 20px;
          @include desktop {
            max-width: 260px;
          }
        }
        .thumb {
          display: block;
          margin: 0 auto;
          width: 100%;
          max-width: 160px;
          background-image: url("http://placehold.it/200x160");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;

          @include desktop {
            max-width: 200px;
          }

          &::before {
            content: "";
            display: block;
            padding-top: 80%;
          }
        }
      }
    }
    &_bronze {
      margin-bottom: 30px;
      @include desktop {
        margin-bottom: 60px;
      }

      .list {
        box-sizing: border-box;
        width: calc( 100% / 3 );
        padding-right: 5px;
        padding-left: 5px;

        @include desktop {
          padding-right: 15px;
          padding-left: 15px;
        }

      }

      .listItem {
        margin-bottom: 10px;
        padding-top: 10px;
        @include desktop {
          margin-bottom: 30px;
          padding-top: 20px;
        }
        .inner {
          margin-bottom: 5px;
          max-width: 220px;
          text-align: center;
          padding: 0 10px;
          @include desktop {
            margin-bottom: 20px;
            padding: 0 20px;
          }
        }
        .thumb {
          display: block;
          margin: 0 auto;
          max-width: 160px;
          background-image: url("http://placehold.it/160x128");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;

          &::before {
            content: "";
            display: block;
            padding-top: 80%;
          }
        }
      }
    }
  }
</style>
