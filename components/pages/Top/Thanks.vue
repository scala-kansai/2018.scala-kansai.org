<template>
  <section class="p-thanks">
    <div class="c-container">
      <div class="p-thanks_title">
        Special Thanks
      </div>
      <div class="p-thanks_list row">
        <div
          class="col-sm-3"
          v-for="(thank,index) in thanks"
          :key="index">
          <div class="p-thanks_listItem">
            <div class="inner">
              <a :href="thank.url" target="_blank" rel="noopener">
                <div class="thumb" :style="logoStyle(thank)" />
              </a>
              <span class="work">{{thank.title}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default{
    props:{
      thanks:{
        type:Array,
        default: ()=>[]
      }
    },
    methods:{
      logoStyle(thanks){
        return {
          backgroundImage: `url('/thanks/${thanks.image}')`
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";

  .p-thanks {
    @include secPadding;
    background: $clr_bg-lightOrange;

    &_title {
      @include title-border;
    }
    .row {

    }
    .col-sm-3 {
      box-sizing: border-box;
      width: 50%;
      @include desktop {
        max-width: 25%;
      }
    }

    &_list {
      justify-content: flex-start;
    }

    &_listItem {
      margin-bottom: 30px;
      box-sizing: border-box;
      text-align: center;
      background: white;
      .inner {
        width: 100%;
        padding: 20px;
        display: inline-block;
        text-align: center;
        color: $clr_brown;
        font-weight: bold;
        box-sizing: border-box;
      }

      .thumb {
        margin: 0 auto;
        margin-bottom: 10px;
        display: block;
        width: 100%;
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
        .work {
          font-weight: bold;
          color: $clr_brown;
        }
      }
    }
  }
</style>
