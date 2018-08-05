<template>
  <div>
    <header class="l-header">
      <div class="row">
        <div class="col-auto">
          <router-link to="/">
            <img class="l-header_logo" src="~/assets/images/header_logo.svg" alt="Scala Kansai summit2018">
          </router-link>
        </div>
        <div class="col l-header_nav">
          <nav class="l-header_links">
            <router-link to="/#top-access" v-smooth-scroll="{offset: -50 }">ACCESS</router-link>
            <router-link to="/#top-sponsor" v-smooth-scroll="{offset: -50 }">SPONSOR</router-link>
          </nav>
          <router-link
              to="/jobs/"
              class="l-header_jobs">
            <i class="l-header_jobsIcon fas fa-bullhorn"></i>
            <span class="l-header_jobsLabel">求人・広告</span>
          </router-link>
          <a v-on:click="activeNav" :class="activeNavClass">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </header>
    <div :class="activeMenuClass">
      <router-link to="/#top-access" v-on:click.native="closeNav" v-smooth-scroll="{offset: -50 }">ACCESS</router-link>
      <router-link to="/#top-sponsor" v-on:click.native="closeNav" v-smooth-scroll="{offset: -50 }">SPONSOR</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: false
      }
    },
    computed: {
      activeNavClass() {
        return {
          "l-header_spNav": true,
          active: this.nav
        }
      },
      activeMenuClass() {
        return {
          "l-header_spNavLinks": true,
          active: this.nav
        }
      }
    },
    methods: {
      activeNav() {
        this.nav = !this.nav
      },
      closeNav() {
        this.nav = false
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";
  .l-header {
    width: 100%;
    height: $header-size;
    background: white;
    position: fixed;
    z-index: 999999;
    box-shadow: 0 0 6px rgba(0,0,0,.1);

    &_logo {
      display: inline-block;
      margin-left: 10px;
      padding: 5px 0;
      width: 160px;
      box-sizing: border-box;
      @include desktop {
        margin-left: 30px;
      }
    }
    &_nav {
      display: flex;
      justify-content: flex-end;
    }
    &_links {
      display: none;
      padding: 16px 0;
      height: $header-size;
      box-sizing: border-box;
      font-size: 1.5rem;
      font-weight: bold;

      @include desktop {
        display: block;
      }

      a {
        display: inline-block;
        margin-right: 2em;
      }

    }
    &_jobs {
      display: inline-block;
      padding: 12px 5px;
      width: 60px;
      height: $header-size;
      font-size: 1rem;
      box-sizing: border-box;
      color: white;
      background: $clr_defaultBlack;

      @include desktop {
        padding: 12px 10px;
        width: auto;
        font-size: 1.4rem;
      }

      &:active{
        opacity: 1;
      }
      &:visited {
        opacity: 1;
      }
    }
    &_jobsIcon {
      display: block;
      margin-bottom: 5px;
      font-size: 1.6rem;
      @include desktop {
        margin-bottom: 2px;
      }
    }
    &_jobsLabel{
      display: block;
    }
    &_spNav {
      display: inline-block;
      padding: 5px;
      width: 60px;
      height: $header-size;
      box-sizing: border-box;
      text-align: center;
      background: $clr_red;
      position: relative;

      &:hover {
        opacity: 1;
      }
      &:active {
        opacity: 1;
      }
      &:visited {
        opacity: 1;
      }

      @include desktop{
        display: none;
      }
      span {
        display: inline-block;
        width: 30px;
        height: 4px;
        background: white;
        border-radius: 9999px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: all .4s;
      }
      span:nth-of-type(1) {
        top: 20px;
      }
      span:nth-of-type(2) {
        top: 30px;
        }
      span:nth-of-type(3) {
        top: 40px;
      }
    }
  }
  .l-header_spNavLinks {
    display: block;
    visibility: hidden;
    width: 100%;
    min-height: 100vh;
    background: rgba(222,90,56,.95);
    opacity: 0;
    position: fixed;
    top: $header-size;
    z-index: 9999;
    transition: all .4s;

    a {
      display: block;
      padding: 25px;
      text-align: center;
      font-weight: bold;
      color: white;

    }
  }

  .l-header_spNavLinks.active {
    visibility: visible;
    opacity: 1;
    transition: all .4s;

      @include desktop {
          display: none;
      }
  }
  .l-header_spNav.active {
    display: inline-block;
    padding: 5px;
    width: 60px;
    height: $header-size;
    box-sizing: border-box;
    text-align: center;
    background: $clr_red;
    position: relative;
    transition: all .4s;

    @include desktop{
      display: none;
    }

    span:nth-of-type(1) {
      transform: translateY(7px) translateX(-50%) rotate(-45deg);
    }
    span:nth-of-type(2) {
      opacity: 0;
      }
    span:nth-of-type(3) {
      transform: translateY(-13px) translateX(-50%) rotate(45deg);
    }
  }
</style>
