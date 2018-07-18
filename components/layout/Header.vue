<template>
  <div>
    <header class="l-header">
      <div class="row">
        <div class="col-auto">
          <a href="/">
            <img class="l-header_logo" src="~/assets/images/header_logo.svg" alt="Scala Kansai summit2018">
          </a>
        </div>
        <div class="col l-header_nav">
          <nav class="l-header_links">
            <a href="#top-access">ACCESS</a>
            <a href="#top-sponsor">SPONSOR</a>
          </nav>
          <router-link
              to="/jobs/"
              class="l-header_jobs">
            <i class="l-header_jobsIcon fas fa-bullhorn"></i>
            <span class="l-header_jobsLabel">求人・広告</span>
          </router-link>
          <a v-on:click="activeNav" :class="activeNavClass">
            <span></span>
          </a>
        </div>
      </div>
    </header>
    <div :class="activeMenuClass">
      <a href="#top-access">ACCESS</a>
      <a href="#top-sponsor">SPONSOR</a>
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
        // if(this.nav == true){
        //   this.nav = false
        // }else{
        //   this.nav = true
        // }
        this.nav = !this.nav
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
        top: 50%;
        transform: translate(-50%,-50%);
        transition: all .3s;
        &::before {
          content: "";
          display: inline-block;
          width: 30px;
          height: 4px;
          background: white;
          border-radius: 9999px;
          position: absolute;
          left: 50%;
          top: -10px;
          transform: translate(-50%);
          transition: all .3s;
        }
        &::after {
          content: "";
          display: inline-block;
          width: 30px;
          height: 4px;
          background: white;
          border-radius: 9999px;
          position: absolute;
          left: 50%;
          top: 10px;
          transform: translate(-50%);
          transition: all .3s;
        }
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
    transition: all .3s;

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
    transition: all .3s;
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
    transition: all .3s;

    @include desktop{
      display: none;
    }

    span {
      display: inline-block;
      width: 30px;
      height: 4px;
      background: transparent;
      border-radius: 9999px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      transition: all .3s;
      &::before {
        content: "";
        display: inline-block;
        width: 34px;
        height: 4px;
        background: white;
        border-radius: 9999px;
        position: absolute;
        left: 0;
        top: 25%;
        transform: rotate(45deg);
        transition: all .3s;
      }
      &::after {
        content: "";
        display: inline-block;
        width: 34px;
        height: 4px;
        background: white;
        border-radius: 9999px;
        position: absolute;
        left: 0;
        top: 25%;
        transform: rotate(-45deg);
        transition: all .3s;
      }
    }
  }
</style>
