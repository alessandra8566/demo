<template>
  <div
    class="footer-style-2 ptb--30 bg_image bg_image--1"
    data-black-overlay="6"
  >
    <div class="wrapper plr--50 plr_sm--20">
      <div class="row align-items-center justify-content-between">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="inner">
            <div class="logo text-center text-sm-left mb_sm--20">
              <a href="/home-one">
                <img src="@/assets/images/logo/logo.png" alt="Logo images" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 col-12">
          <div class="inner text-lg-right text-center mt_md--20 mt_sm--20">
            <div class="text">
              <p>Copyright © 2020 FifteenFab. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~@/assets/scss/default/_variables.scss";
[data-black-overlay]:before {
    background-color: #00010c;
    opacity: 0.9;
}
</style>
