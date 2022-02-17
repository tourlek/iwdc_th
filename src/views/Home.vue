<template>
  <div class="home">
    <bannerSlide/>
    <tabs/>
  </div>
</template>

<script>
// @ is an alias to /src
import bannerSlide from "@/components/banner-slide.vue";
import tabs from "@/components/tabs.vue";

export default {
  name: "Home",
  components: {
    bannerSlide,
    tabs,
  },
};
</script>
