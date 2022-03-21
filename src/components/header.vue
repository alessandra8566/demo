<template>
  <header class="header-area header-style-two header--fixed color-black">
    <div class="header-wrapper">
      <div class="header-left d-flex align-items-center">
        <div class="logo flex jcc aic">
          <router-link to="/">
            <!-- <img src="/images/wistron.png" alt="Digital Agency" class="width100" /> -->
            <h3 class="mar_0">Wistron</h3>
          </router-link>
        </div>
        <nav class="mainmenunav d-lg-block ml--50">
          <ul class="mainmenu">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <!-- <li>
              <router-link to="/fullpage">Full Page</router-link>
            </li>
            <li>
              <router-link to="/homedesign">Home Design</router-link>
            </li> -->

            <!-- <li class="has-droupdown">
              <router-link to="/pages">Pages</router-link>
            </li> -->
            <!-- <li class="has-droupdown">
              <router-link to="/blocks">Blocks</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li> -->
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <div class="social-share-inner">
          <ul class="social-share social-style--2 color-black d-flex justify-content-start liststyle">
            <!-- {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))} -->
            <li></li>
          </ul>
        </div>
        <div class="header-btn">
          <router-link to="/login">
            <a class="rn-btn">
              <span>Login In</span>
            </a>
          </router-link>
        </div>
        <!-- {/* Start Humberger Menu */} -->
        <div class="humberger-menu d-block d-lg-none pl--20">
          <span @click="menuTrigger" class="menutrigger text-white">
            <a-icon type="menu"></a-icon>
          </span>
        </div>
        <!-- {/* End Humberger Menu */} -->
        <div class="close-menu d-block d-lg-none">
          <span @click="CLoseMenuTrigger" class="closeTrigger">
            <a-icon type="menu"></a-icon>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
  import $ from "jquery";
  export default {
    name: "Header",
    data() {
      return {
        currentScrollTop: 0,
      };
    },
    methods: {
      scroll() {
        window.onscroll = () =>
          (this.currentScrollTop = document.documentElement.scrollTop);
      },
      menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
      },
      CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
      }
    },
    mounted() {
      this.scroll();
    },
    watch: {
      currentScrollTop(newVal) {
        this.currentScrollTop > 110 ?
          $(".header--fixed").addClass("sticky") :
          $(".header--fixed").removeClass("sticky");
        this.currentScrollTop = newVal;
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/scss/default/_variables.scss";

  .logo {
    h3 {
      // font-size: 2rem;
      font-weight: bold;
      color: $white
    }
  }

  .header-wrapper .mainmenunav ul.mainmenu>li a {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      width: 0;
      height: 3px;
      background: $theme-color;
      transition: 0.3s;
      bottom: 0;
    }

    &.router-link-exact-active {
      color: $theme-color;
      ;

      &::after {
        width: 100% !important;
      }
    }
  }

  // .header-area .header-wrapper .mainmenunav ul.mainmenu li.has-droupdown>a::after {
  //   display: none !important;
  // }
</style>