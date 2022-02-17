<template>
  <div class="card border-0 text-left d-flex flex-row">
    <div class="card-body">
      <h2 class="card-title">Food at Home</h2>
      <p class="card-text">
        A whitish curry that originated in Hokkaido.<br> If you wnat how to make it !<br> click to see more
      </p>
      <router-link to="/food-at-home" class="btn btn-primary">See more</router-link>
    </div>
    <div class="card-body">
      <img src="../assets/images/at_home/hokkaido write curry1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>

<style lang="scss" scope>
img {
  max-width: 600px;
  width: 100%;
}
</style>
