<template>
  <section class="p-thanks">
    <div class="c-container">
      <div class="p-thanks_title">
        Special Thanks
      </div>
      <ul class="p-thanks_list row">
        <li class="col">
          <div class="p-thanks_listItem">
            <a href="#" ><div class="thumb"/></a>
            <span class="work">Logo Desiginer</span>
          </div>
        </li>
        <li class="col">
          <div class="p-thanks_listItem">
            <a href="#" ><div class="thumb"/></a>
            <span class="work">Logo Desiginer</span>
          </div>
        </li>
        <li class="col">
          <div class="p-thanks_listItem">
            <a href="#" ><div class="thumb"/></a>
            <span class="work">Logo Desiginer</span>
          </div>
        </li>
        <li class="col">
          <div class="p-thanks_listItem">
            <a href="#" ><div class="thumb"/></a>
            <span class="work">Logo Desiginer</span>
          </div>
        </li>
      </ul>
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

    &_list {
      margin: 0 auto;
      list-style: none;
      justify-content: space-between;
    }

    &_listItem {
      padding: 20px 18px;
      text-align: center;
      background: white;

      .thumb {
        display: inline-block;
        margin-bottom: 15px;
        width: 100%;
        max-width: 180px;
        background-image: url("http://placehold.it/200x160");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        &::before {
          content: "";
          display: block;
          padding-top: 80%;
        }
      }
      .work {
        font-weight: bold;
        color: $clr_brown;
      }

    }


  }
</style>
