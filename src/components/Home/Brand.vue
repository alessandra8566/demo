<template>
  <div id="service" className="fix">
    <div class="service-area creative-service-wrapper ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center service-style--3 mb--30">
              <h2 class="title">{{ title }}</h2>
              <p>{{ describle }}</p>
            </div>
          </div>
        </div>
        <div class="row creative-service">
          <div class="col-lg-12">
            <div class="row">
              <div
                v-for="(item, index) in BrandList"
                class="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                :key="index"
              >
                <a>
                  <div class="service service__style--2">
                    <a-icon :type="item.icon" class="icon" />
                    <div class="content">
                      <h3 class="title">{{ item.title }}</h3>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Brand",
  data() {
    return {
      title: "My Best Client",
      describle:
        "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration.",
      BrandList: [
        {
          icon: "alert",
          title: "Business Stratagy",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: "appstore",
          title: "Website Development",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: "audio",
          title: "Marketing & Reporting",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: "container",
          title: "Mobile App Development",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: "idcard",
          title: "Marketing & Reporting",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
        {
          icon: "reconciliation",
          title: "Mobile App Development",
          description:
            "I throw myself down among the tall grass by the stream as I lie close to the earth.",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.service.service__style--2 {
  background: url("/images/home/400x400.jpg") !important;
  background-size: cover;
  background-position: 50% 50% !important;
  overflow: hidden;
  .icon {
    color: #1f1f25;
  }
  &:hover {
    .icon {
      color: #fff;
    }
    &::before {
      background-image: none !important;
      background-size: 120%;
    }
  }
  &::before {
    background-image: none !important;
  }
}

.icon {
  color: #1f1f25;
}
</style>
