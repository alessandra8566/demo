<template>
  <div id="about" class="fix">
    <div class="about-area ptb--120  bg_color--1">
      <div class="about-wrapper">
        <div class="container">
          <div class="row row--35 align-items-center">
            <div class="col-lg-5">
              <div class="thumbnail">
                <img
                  class="w-100"
                  src="https://picsum.photos/800/885"
                  alt="About Images"
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="about-inner inner">
                <div class="section-title">
                  <h2 class="title">{{ title }}</h2>
                  <p class="description" v-html="description"></p>
                </div>
                <div class="row mt--30">
                  <Tab tabStyle="tab-style--1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab from '@/components/common/tab'
export default {
  name: "About",
  components: {
    Tab
  },
  data() {
    return {
      title: "About Me",
      description:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="#">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,',
    };
  },
};
</script>
<style lang="scss" scoped></style>
