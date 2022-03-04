<template>
  <div>
    <a-carousel dot-position="bottom" autoplay>
      <div v-for="(item, index) in SlideList"
        class="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--16 width100"
        :style="{'background-image': `url('/images/homedesign/1920x950_${index}.jpg') !important`}" :key="index">
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
    <div class="commercial">
      <a-row type="flex" justify="center" :gutter="64">
        <a-col :xs="{span: 24, order: 2}" :lg="{span: 12, order: 1}" class="flex jcfn">
          <div class="comercail_container">
            <h3 class="commercial_title">Commercial/Office</h3>
            <p class="commercial_discrible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi
              consequatur praesentium minus enim
              ipsum laborum, ad voluptatibus cum velit nemo, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Provident, sit. Iusto harum eligendi consectetur doloribus sit, minima impedit, autem
              tenetur nihil suscipit debitis. Veniam voluptatum eaque doloribus obcaecati reprehenderit placeat.</p>
            <button class="rn-btn">More Details</button>
          </div>
        </a-col>
        <a-col :xs="{span: 24, order: 1}" :lg="{span: 12, order: 1}" class="commercial_image">
          <div class="comercail_container">
            <h3 class="commercial_title">Commercial/Office</h3>
            <p class="commercial_discrible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi
              consequatur praesentium minus enim
              ipsum laborum, ad voluptatibus cum velit nemo, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Provident, sit. Iusto harum eligendi consectetur doloribus sit, minima impedit, autem
              tenetur nihil suscipit debitis. Veniam voluptatum eaque doloribus obcaecati reprehenderit placeat.</p>
            <button class="rn-btn">More Details</button>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="residential">
      <a-row type="flex" justify="center" class="height100">
        <a-col :xs="24" :lg="16" :xl="12" class="flex jcc aifn height100">
          <div class="residential_container">
            <h3>Residential</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorum harum, porro aliquam voluptatum
              repellat tempore nemo ipsa possimus quos. Dignissimos eum incidunt doloremque nulla nisi labore, dicta
              delectus fugit?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quasi aliquid, vero, dolore praesentium
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem distinctio tenetur maiores eveniet</p>
            <button class="rn-btn mart_2">More Details</button>
          </div>
        </a-col>
        <a-col :xs="24" :lg="12"></a-col>

      </a-row>
    </div>
    <div class="about_us">
      <a-row type="flex" justify="center">
        <a-col :lg="{span: 6, order: 1}" :md="{span: 8, order: 1}" :sm="{span: 12, order: 1}" :xs="24"
          class="img_container">
          <img src="/images/homedesign/portfolio-item-44.jpg" class="width100" alt="">
        </a-col>
        <a-col :lg="{span: 6, order: 2}" :md="{span: 8, order: 2}" :sm="{span: 12, order: 2}" :xs="24"
          class="img_container">
          <img src="/images/homedesign/portfolio-item-45.jpg" class="width100" alt="">
        </a-col>
        <a-col :lg="{span: 12, order: 3}" :md="{span: 16, order: 4}" :sm="{span: 24, order: 3}" :xs="24"
          class="flex aic">
          <div class="aboutus_container">
            <h3>About Us</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore recusandae, fuga facere corporis dolorum
              nemo porro dignissimos est quidem culpa, similique ullam esse eum? Lorem ipsum dolor.</p>
            <button class="rn-btn">More</button>
          </div>
        </a-col>
        <a-col :lg="{span: 6, order: 4}" :md="{span: 8, order: 3}" :sm="{span: 12, order: 4}" :xs="24"
          class="img_container">
          <img src="/images/homedesign/portfolio-item-46.jpg" class="width100" alt="">
        </a-col>
        <a-col :lg="{span: 6, order: 5}" :md="{span: 8, order: 5}" :sm="{span: 12, order: 5}" :xs="24"
          class="img_container">
          <img src="/images/homedesign/portfolio-item-47.jpg" class="width100" alt="">
        </a-col>
        <a-col :lg="{span: 6, order: 6}" :md="{span: 8, order: 6}" :sm="{span: 12, order: 6}" :xs="24"
          class="img_container">
          <img src="/images/homedesign/portfolio-item-48.jpg" class="width100" alt="">
        </a-col>
        <a-col :lg="{span: 6, order: 7}" :md="{span: 8, order: 7}" :sm="{span: 12, order: 7}" :xs="24"
          class="img_container">
          <img src="/images/homedesign/portfolio-item-49.jpg" class="width100" alt="">
        </a-col>
        <a-col :lg="{span: 6, order: 8}" :md="{span: 8, order: 8}" :sm="{span: 12, order: 8}" :xs="24"></a-col>
      </a-row>
    </div>
  </div>
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
  p {
    font-size: 16px !important;
  }

  h1 {
    color: white !important;
  }

  .bg_image--16 {
    background-position: 50% 80% !important;
  }
</style>