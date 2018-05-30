<template>
  <section class="p-thanks">
    <div class="c-container">
      <div class="p-thanks_title">
        Special Thanks
      </div>
      <div class="p-thanks_list row">
        <div class="col-3">
          <div class="p-thanks_listItem">
            <div class="inner">
              <a href="#" ><div class="thumb"/></a>
              <span class="work">Logo Desiginer</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="p-thanks_listItem">
            <div class="inner">
              <a href="#" ><div class="thumb"/></a>
              <span class="work">Logo Desiginer</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="p-thanks_listItem">
            <div class="inner">
              <a href="#" ><div class="thumb"/></a>
              <span class="work">Logo Desiginer</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="p-thanks_listItem">
            <div class="inner">
              <a href="#" ><div class="thumb"/></a>
              <span class="work">Logo Desiginer</span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="p-thanks_listItem">
            <div class="inner">
              <a href="#" ><div class="thumb"/></a>
              <span class="work">Logo Desiginer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

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
    .col,.col-3,.col-4,.col-6 {
      box-sizing: border-box;
    }

    &_list {
      justify-content: flex-start;
    }

    &_listItem {
      margin-bottom: 40px;
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
        margin-bottom: 10px;
        display: inline-block;
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
