<template>
  <div>
    <div class="tabs-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div>
              <ul class="tab-style--1">
                <li
                  class="about_tab"
                  :class="{ 'react-tabs__tab--selected': item.selected }"
                  v-for="(item, index) in tabInfos"
                  :key="index"
                  @click="changeTab(index)"
                >
                  {{ item.title }}
                </li>
              </ul>

              <div v-for="(item, index) in tabInfos" :key="index">
                <div v-if="item.selected">
                  <div
                    class="single-tab-content"
                    v-for="(subItem, subIndex) in item.info"
                    :key="subIndex"
                  >
                    <ul>
                      <li>
                        <a href="/service" v-html="subItem.subTitle"></a>
                        {{ subItem.detail }}
                      </li>
                    </ul>
                  </div>
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
export default {
  name: "Tab",
  data() {
    return {
      tabInfos: [
        {
          title: "Main skills",
          selected: true,
          info: [
            {
              subTitle: "User experience design <span> - UI/UX</span>",
              detail: "Delight the user and make it work.",
            },
            {
              subTitle: "Interaction design <span> - Animation</span>",
              detail: " Websites, web experiences, ...",
            },
            {
              subTitle: "Interaction design <span> - Animation</span>",
              detail: "I like to move it move it.",
            },
          ],
        },
        {
          title: "Awards",
          selected: false,
          info: [
            {
              subTitle: "Awwwards.com <span>- Winner</span>",
              detail: "2019 - 2020",
            },
            {
              subTitle: "CSS Design Awards <span>- Winner</span>",
              detail: "2017 - 2018",
            },
            {
              subTitle: "Design nominees <span>- site of the day</span>",
              detail: "2013- 2014",
            },
          ],
        },
        {
          title: "Experience",
          selected: false,
          info: [
            {
              subTitle: "User experience design <span> - UI/UX</span>",
              detail: "Delight the user and make it work.",
            },
            {
              subTitle: "Interaction design <span> - Animation</span>",
              detail: " Websites, web experiences, ...",
            },
            {
              subTitle: "Interaction design <span> - Animation</span>",
              detail: "I like to move it move it.",
            },
          ],
        },
        {
          title: "Education & Certification",
          selected: false,
          info: [
            {
              subTitle: "Awwwards.com <span>- Winner</span>",
              detail: "2019 - 2020",
            },
            {
              subTitle: "CSS Design Awards <span>- Winner</span>",
              detail: "2017 - 2018",
            },
            {
              subTitle: "Design nominees <span>- site of the day</span>",
              detail: "2013- 2014",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeTab(index) {
      this.tabInfos.forEach((el) => (el.selected = false));
      this.tabInfos[index].selected = true;
    },
  },
};
</script>
<style lang="scss" scoped>
  @import "~@/assets/scss/default/_variables.scss";
  .react-tabs__tab--selected {
    color: $theme-color;
  }
</style>
