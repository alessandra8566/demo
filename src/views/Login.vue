<template>
  <div id="login_nest_bg" class="flex jcc aic" ref="login_nest_bg">
    <vue-canvas-nest :config="canvasConfig" />
    <a-card class="card login_card">
      <div class="flex jcc mar_4">
        <img src="/images/logo/logo-all-dark.png" class="login_logo" alt="">
      </div>
      <a-form :form="form">
        <a-form-item label="Account">
          <a-input
            v-decorator="['account', { rules: [{ required: true, message: 'Please input your Account!' }], initialValue: 'money8020219@gmail.com' }]"
            type="email" placeholder="Email" label="Account" />
        </a-form-item>
        <a-form-item label="Password" class="marb_4">
          <a-input-password
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }], initialValue: 'st910019' }]"
            type="password" placeholder="Password" />
        </a-form-item>
        <a-form-item>
          <a-button size="large" block>
            <router-link to="/">
              LOGIN
            </router-link>
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
  import vueCanvasNest from 'vue-canvas-nest/src/vueCanvasNest.vue'
  export default {
    name: "Login",
    components: {
      vueCanvasNest
    },
    data() {
      return {
        form: this.$form.createForm(this, {
          name: "login"
        }),
        canvasConfig: {
          color: '164,127,134',
          // color: "241,90,41",
          // color: "0, 0, 0",
          // color: "255, 255, 255",
          count: 300,
          opacity: 1,
        },
      }
    },
    mounted() {},
    beforeDestroy() {}
  }
</script>

<style lang="scss" scoped>
  .ant-layout {
    background-color: transparent !important;
  }
</style>