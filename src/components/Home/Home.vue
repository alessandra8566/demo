<template>
  <a-carousel dot-position="bottom" effect="fade" autoplay>
    <div v-for="(item, index) in SlideList"
      class="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16 width100"
      :style="{'background-image': `url('/images/home/1920x950_${index}.jpg') !important`}" :key="index">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner" :class="item.textPosition">
              <span v-if="item.category">{{ item.category }}</span>
              <h1 class="title" v-if="item.title" v-html="item.title"></h1>
              <p class="description" v-if="item.description">
                {{ item.description }}
              </p>
              <div class="slide-btn" v-if="item.buttonText">
                <a class="rn-button-style--2 btn-primary-color" :href="item.buttonLink">{{ item.buttonText }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-carousel>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "Home",
    data() {
      return {
        SlideList: [{
            textPosition: "text-left",
            category: "Freelance digital designer",
            title: "Hello, I’m <span>Sandra</span> Welcome to my World.",
            description: "",
            buttonText: "",
            buttonLink: "",
          },
          {
            textPosition: "text-left",
            category: "Freelance digital designer",
            title: "Hello, I’m <span>Sandra</span> Welcome to my World.",
            description: "",
            buttonText: "",
            buttonLink: "",
          },
          {
            textPosition: "text-left",
            category: "Freelance digital designer",
            title: "Hello, I’m <span>Sandra</span> Welcome to my World.",
            description: "",
            buttonText: "",
            buttonLink: "",
          },
        ],
        carouselInd: 0
      };
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
  .bg_image--16 {
    background-position: 50% 80% !important;
  }
</style>