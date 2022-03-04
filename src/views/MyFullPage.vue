<template>
  <div>
    <div class="section_bg"></div>
    <div class="section_lost">
      <div class="container">
        <a-row type="flex" justify="center" class="inside">
          <a-col :xs="12" :xl="12" :lg="12" class="flex jcfs aic">
            <lost-to-found @svgTypeDataFn="setSvgTypeData" :class="classes.lost" />
          </a-col>
          <a-col :xs="12" :xl="12" :lg="12" class="flex jcfs aic"></a-col>
        </a-row>
      </div>
    </div>
    <full-page :options="fullpageOption" ref="fullpage" class="por">
      <div class="section section1 slide personal-portfolio-slider slider-style-3">
        <div class="container">
          <a-row type="flex" justify="end">
            <a-col :xs="24" :lg="12">
              <div class="inner text-left">
                <h2 class="title"> Please help: War Survival kits needed! </h2>
                <p class="description">Every $10.14 you give will help deliver winter essentials and prayer to a
                  homeless neighbor. </p>
                <a-button shape="round" size="large" class="rn-btn">
                  &nbsp;&nbsp; Donate &nbsp;&nbsp;
                </a-button>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="section section2 slide personal-portfolio-slider slider-style-3">
        <div class="container">
          <a-row type="flex" justify="center" class="heigth100">
            <a-col :xs="24" :sm="12" :md="12" class="flex jcc aic">
              <lost-to-found @svgTypeDataFn="setSvgTypeData" class="section2_lost" />
            </a-col>
            <a-col :xs="24" :sm="12" :lg="12" class="initPositionCard flex jcc aic hidden" :class="classes.card">
              <a-row type="flex" justify="space-around" :gutter="[16, 16]" class="lost_section_container"
                id="lost_section_container">
                <a-col :xs="24" :md="24" :lg="12" v-for="(item, ind) in section2Filter" :key="ind">
                  <div class="lost_section">
                    <a-icon :type="item.icon" class="marb_2" />
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.describle }}</p>
                  </div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="section section3 slide personal-portfolio-slider slider-style-3">
        <div class="container">
          <a-row type="flex" class="">
            <a-col :xs="24" :lg="16" class="initPositionCard" :class="classes.card">
              <div class="survival_container">
                <h3>Survival</h3>
                <p>This is the stage you see most often — people living on streets, often struggling with addiction. We
                  go out 365 days a year to connect them to life-saving assistance</p>

                <a-button class="mart_2" :style="{color: '#f15a29'}" shape="round" size="large">Learn More</a-button>
              </div>
            </a-col>
            <a-col :xs="24" :lg="8"></a-col>
          </a-row>
        </div>
      </div>
      <!-- 
      <div class="section section4 slide personal-portfolio-slider slider-style-3">
        <div class="container">
          <a-row type="flex" class="">
            <a-col :xs="12" class="initPositionCard" :class="classes.card">
              <div class="survival_container">
                <h3>Survival</h3>
                <p>This is the stage you see most often — people living on </p>
                <p>streets, often struggling with addiction. We go out 365 </p>
                <p>days a year to connect them to life-saving assistance.</p>
                <a-button class="mart_2" :style="{color: '#f15a29'}" shape="round" size="large">Learn More</a-button>
              </div>
            </a-col>
          </a-row>
        </div>
      </div> -->
    </full-page>
  </div>
</template>

<script>
  import LostToFound from '../components/common/lostTofound.vue'
  export default {
    name: "MyFullPage",
    components: {
      LostToFound
    },
    data() {
      return {
        svgTypeData: null,
        fullPageInstance: null,
        fullpageOption: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          afterLoad: this.afterLoad,
          normalScrollElements: '#lost_section_container'
        },
        section2: [{
            icon: "api",
            type: "Survival",
            title: "Outreach Team",
            describle: "The Mission’s Outreach Team acts as first responders, delivering love"
          },
          {
            icon: "appstore",
            type: "Survival",
            title: "Search + Rescue",
            describle: "Every night, Search + Rescue vans bring life-saving supplies care"
          },
          {
            icon: "calculator",
            type: "Survival",
            title: "Mobile Shower",
            describle: "Our mobile shower trailer offers hot showers along with soap, shampoo"
          },
          {
            icon: "camera",
            type: "Survival",
            title: "Search + Rescue",
            describle: "Every night, Search + Rescue vans bring life-saving supplies, care"
          },
          {
            icon: "compass",
            type: "Stabilization",
            title: "Men's Shelter",
            describle: "The Men’s Shelter serves free meals with invitations to join our."
          },
          {
            icon: "container",
            type: "Stabilization",
            title: "KentHOPE Shelter",
            describle: "KentHOPE provides emergency meals and shelter to homeless women."
          },
          {
            icon: "cloud",
            type: "Stabilization",
            title: "Post-Hospital Recovery",
            describle: "We offer respite care to men and women with severe medical issues."
          },
          {
            icon: "control",
            type: "Stabilization",
            title: "Spanish Ministries",
            describle: "The Mission provides services in Spanish, including chapel, counseling."
          },
          {
            icon: "control",
            type: "Recovery",
            title: "Outreach Team",
            describle: "The Mission’s Outreach Team acts as first responders, delivering."
          },
          {
            icon: "cloud",
            type: "Recovery",
            title: "Search + Rescue",
            describle: "Every night, Search + Rescue vans bring life-saving supplies, care."
          },
          {
            icon: "container",
            type: "Recovery",
            title: "Mobile Shower",
            describle: "Our mobile shower trailer offers hot showers along with soap, shampoo."
          },
          {
            icon: "compass",
            type: "Recovery",
            title: "Mental Health Services",
            describle: "We help mentally ill people get off the streets and into treatment."
          },
          {
            icon: "camera",
            type: "Post Graduation",
            title: "Men's Shelter",
            describle: "The Men’s Shelter serves free meals with invitations to join."
          },
          {
            icon: "calculator",
            type: "Post Graduation",
            title: "KentHOPE Shelter",
            describle: "KentHOPE provides emergency meals and shelter to homeless women."
          },
          {
            icon: "appstore",
            type: "Post Graduation",
            title: "Post-Hospital Recovery",
            describle: "We offer respite care to men and women with severe medical issues."
          },
          {
            icon: "api",
            type: "Post Graduation",
            title: "Spanish Ministries",
            describle: "The Mission provides services in Spanish, including chapel, counseling."
          }
        ],
        classes: {
          lost: "novisibility",
          card: ""
        }
      }
    },
    methods: {
      setSvgTypeData(data) {
        console.log(data)
        this.svgTypeData = data
      },
      afterLoad(pre, next) {
        this.classes.lost = (next.index == 0 && pre.index == 0 && 'novisibility') ||
          (pre.index == 0 && next.index == 1 && "changePosition-rotate-start") ||
          (next.index == 0 && pre.index == 1 && "changePosition-rotate-back") ||
          (pre.index == 1 && next.index == 2 && "changePosition-top") ||
          (pre.index == 2 && next.index == 1 && "changePosition-down") ||
          // (pre.index == 2 && next.index == 3 && "changePosition-right") ||
          // (pre.index == 3 && next.index == 2 && "changePosition-left") ||
          "animate__animated animate__fadeOut"

        this.classes.card = (pre.index == 0 && next.index == 1 && "changePosition-card-down") ||
          (pre.index == 2 && next.index == 1 && "changePosition-card-down") ||
          (pre.index == 1 && next.index == 2 && "changePosition-card-left")
        // (pre.index == 2 && next.index == 3 && "changePosition-card-right")

      }
    },
    computed: {
      section2Filter() {
        const data = this.section2.filter(s => s.type == this.svgTypeData)
        return data
      }
    },
    mounted() {},
    beforeDestroy() {}

  }
</script>

<style lang="scss" scoped>
  * {
    transition: all .3s;
  }

  body {
    background-color: transparent !important;
  }

  @media only screen and (max-width: 1199px) {
    .slide.personal-portfolio-slider.slider-style-3 {
      padding: 0 !important;
    }
  }

  .section2_lost {
    display: none;
  }

  @media only screen and (max-width: 991px) {
    .slide.personal-portfolio-slider.slider-style-3 {
      padding: 0 !important;
    }

    .lost_section_container {
      overflow: auto;
      max-height: 60vh;
    }

    .hero-second-scene__circle-graphics {
      width: 40vw;
      height: 40vw;
    }
  }

  @media only screen and (max-width: 767px) {
    .slide.personal-portfolio-slider.slider-style-3 {
      padding: 0 !important;
    }

    .section2_lost {
      display: block;
    }
  }
</style>