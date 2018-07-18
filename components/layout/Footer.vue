<template>
  <div class="l-footer">
    <div class="p-share">
      <img src="~assets/images/leaf6.svg" class="leaf6">
      <img src="~assets/images/leaf5.svg" class="leaf5">
      <img src="~assets/images/leaf9.svg" class="leaf9">
      <div class="c-container">
        <h3 class="p-share_heading">SNSでシェア</h3>
        <div class="p-share_read">
          Scala関西Summitには、できるだけ多くの皆さんに参加いただきたいです！<br>
          より多くの人にイベントを知ってもらいたいので、どうぞSNSでのシェアにご協力ください！
        </div>
        <div class="p-share_action">
          <a class="p-share_tiwtter" href="https://twitter.com/intent/tweet?text=Scala関西Summit 2018 - 関西最大級Scalaカンファレンス 11/10(土),11/11(日)開催  https://2018.scala-kansai.org/&amp;hashtags=scala_ks" target="_blank">
            <i class="fab fa-twitter" aria-hidden="true"></i>
            twitterでつぶやく</a>
          <a class="p-share_facebook" href="https://www.facebook.com/sharer.php?u=https://2018.scala-kansai.org/&amp;amp;t=Scala関西Summit 2018 - 関西最大級Scalaカンファレンス 11/10(土),11/11(日)開催&amp;hashtags=scala_ks" target="_blank">
            <i class="fab fa-facebook-f" aria-hidden="true"></i>
            Facebookでシェア</a>
        </div>
      </div>
    </div>
    <div class="p-official">
      <div class="c-container">
        <h3 class="p-official_heading">
          公式アカウントをフォローして
          <br>
          最新情報をチェック！
        </h3>
        <div class="p-official_social">
          <div class="p-official_socialIcon">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="p-official_socialAccount">
            <a href="https://twitter.com/scalakansai" target="_blank">@ScalaKansai</a>
            <p>ハッシュタグ <a href="https://twitter.com/hashtag/scala_ks?src=hash" target="_blank">#scala_ks</a></p>
          </div>
        </div>
        <div class="p-official_contact">
          当イベントに関するお問い合わせは<a href="http://goo.gl/forms/0jgvS6ufhL" target="_blank">こちら</a>のフォームからお願いします。
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
  @mixin leaf {
    position: absolute;
    max-width: 180px;
  }

  .l-footer {

    .p-share {
      @include secPadding;
      background: $clr_bg-cream;
      text-align: center;
      position: relative;

      .leaf6 {
        @include leaf;
        width: 20vw;
        max-width: 80px;
        top: 20px;
        left: 20px;
        @include desktop {
          width: 18vw;
          max-width: 200px;
          top: 30px;
          left: 13vw
        }

      }
      .leaf5 {
        @include leaf;
        width: 30vw;
        max-width: 80px;
        top: -15px;
        right: 0;
        @include desktop {
          width: 15vw;
          max-width: 200px;
          top: 10px;
          right: 8vw;
        }

      }
      .leaf9 {
        @include leaf;
        width: 20vw;
        max-width: 80px;
        bottom: 10px;
        right: 30px;
        @include desktop {
          width: 10vw;
          max-width: 150px;
          top: 50%;
          right: 15vw;
        }

      }

      .c-container {
        position: relative;
      }

      &_heading {
        @include secHeading;
      }

      &_read {
        @include secRead;
      }
      &_tiwtter {
        margin-bottom: 1em;
        @include btnIcon(white,$clr_twitter);

        @include desktop {
          margin-bottom: 0;
          margin-right: 1rem;
        }
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
         border-bottom: 2px dashed rgba(0,0,0,.1);
         margin-bottom: 30px;
         padding-bottom: 30px;
         display: flex;
         align-items: center;
       }
       &_socialIcon {
         width: 30%;

         text-align: right;
         font-size: 4rem;
         @include desktop {
           width: 46%;
         }
       }
       &_socialAccount {
         padding-left: 30px;
         width: 60%;
         text-align: left;

         a {
           padding-bottom: .1em;
           border-bottom: 1px solid rgba(255,255,255,.8);
           font-weight: bold;
         }
       }
       &_contact {
         a {
           padding-bottom: .1em;
           border-bottom: 1px solid rgba(255,255,255,.8);
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
        border-bottom: 1px solid rgba(255,255,255,.8);
      }
    }
  }
</style>
