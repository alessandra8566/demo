<template>
  <div>
    <Home />
    <About />
    <Brand />
  </div>
</template>
<script>
  import Home from '@/components/Home/Home';
  import About from "@/components/Home/About";
  import Brand from '@/components/Home/Brand';
  export default {
    name: 'HomePage',
    components: {
      Home,
      About,
      Brand,
    }
  }
</script>