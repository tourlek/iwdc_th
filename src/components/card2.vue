<template>
  <div class="card border-0 text-left d-flex flex-row">
    <div class="card-body">
      <h2 class="card-title">Food at Shop</h2>
      <p class="card-text">
        Go outside or travel look is this! <br> click to see more
      </p>
      <router-link to="/food-at-shop" class="btn btn-primary">See more</router-link>
    </div>
    <div class="card-body">
      <img src="../assets/images/at shop/yakisoba1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "card2",
};
</script>

<style lang="scss" scoped>
img {
  max-width: 600px;
  width: 100%;
}
</style>
