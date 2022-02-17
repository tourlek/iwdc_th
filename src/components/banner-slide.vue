<template>
  <div>
    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      animation
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        :img-src="require('../assets/images/main.png')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../assets/images/LINE_ALBUM_2022_2.2.17_220218.jpg')"
      ></b-carousel-slide>
      <b-carousel-slide
        :img-src="require('../assets/images/LINE_ALBUM_2022_3.2.17_220218.jpg')"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "banner-slide",
};
</script>

<style></style>
