<template>
  <div class="l-footer">
    <div class="p-share">
      <div class="c-container">
        <h3 class="p-share_heading">SNSでシェア</h3>
        <div class="p-share_read">
          Scala関西Summit はScala初心者から上級者まで楽しめる、Scalaの技術を共有するイベントです（このテキストは仮で入れています。）
        </div>
        <div class="p-share_action">
          <a class="p-share_tiwtter" href="https://twitter.com/intent/tweet?text=Scala関西Summit 2018 - 関西のScala大規模イベント11/10(土),11/11(日)開催  http://summit.scala-kansai.org/&amp;hashtags=scala_ks" target="_blank">
            <i class="fab fa-twitter" aria-hidden="true"></i>
            twitterでつぶやく</a>
          <a class="p-share_facebook" href="https://www.facebook.com/sharer.php?u=http://summit.scala-kansai.org/&amp;amp;t=Scala関西Summit 2018 - 関西のScala大規模イベント11/10(土),11/11(日)開催&amp;hashtags=scala_ks" target="_blank">
            <i class="fab fa-facebook-f" aria-hidden="true"></i>
            Facebookでシェア</a>
        </div>
      </div>
    </div>
    <div class="p-official">
      <div class="c-container">
        <h3 class="p-official_heading">公式アカウントをフォローして最新情報をチェック！</h3>
        <div class="p-official_social">
          <div class="p-official_socialIcon">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="p-official_socialAccount">
            <a href="" target="_blank">@ScalaKansai</a>
            <p>ハッシュタグ <a href="" target="_blank">#scala_ks</a></p>
          </div>
        </div>
        <div class="p-official_contact">
          当イベントに関するお問い合わせは<a href="" target="_blank">こちら</a>のフォームからお願いします。
        </div>
      </div>
    </div>
    <div class="p-ohter">
      <div class="c-container">
        <div class="p-copyRight">
          <small>copyright &copy; 2018 Scala関西ユーザーグループ All Rights Reserved.</small>
        </div>
        <div class="p-history">
          <a href="http://summit.scala-kansai.org/2017/index.html" target="_blank">2017</a>
          <a href="http://summit.scala-kansai.org/2016/index.html" target="_blank">2016</a>
          <a href="http://summit.scala-kansai.org/2015/index.html" target="_blank">2015</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~/assets/scss/library/_variable.scss";
  @import "~/assets/scss/library/_mixin.scss";
  .l-footer {
      
    .p-share {
      @include secPadding;
      background: $clr_bg-cream;
      text-align: center;

      &_heading {
        @include secHeading;
      }

      &_read {
        @include secRead;
      }
      &_tiwtter {
        margin-right: 1rem;
        @include btnIcon(white,$clr_twitter);
      }
      &_facebook{
        @include btnIcon(white,$clr_facebook);
      }
    }

     .p-official {
       @include secPadding;
       color: white;
       text-align: center;
       background: #DE5A38;

       &_heading {
         @include secHeading;
       }

       &_social {
         border-bottom: 1px solid rgba(255,255,255,.8);
         margin-bottom: 30px;
         padding-bottom: 40px;
         display: flex;
         align-items: center;
       }
       &_socialIcon {
         width: 40%;
         text-align: right;
         font-size: 4rem;
       }
       &_socialAccount {
         padding-left: 30px;
         width: 60%;
         text-align: left;

         a {
           font-weight: bold;
         }
       }
       &_contact {
         a {
           text-decoration: underline;
         }
       }
     }

    .p-ohter {
      @include secPadding;
      text-align: center;
      color: white;
      background: #73533B;
    }
    .p-copyRight {
      margin-bottom: 2rem;
      small {
        font-size: 1.3rem;
      }
    }
    .p-history {
      display: inline-flex;
      width: 200px;
      justify-content: space-between;

      a {
        text-decoration: underline;
      }
    }
  }
</style>
