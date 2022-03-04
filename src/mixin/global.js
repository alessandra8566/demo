export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => this.loading = false, 1000)
  },
  watch: {
    '$route.path'(){
      this.loading = true
      setTimeout(() => this.loading = false, 1000)
    }
  }
}