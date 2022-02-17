<template>
  <div>
    <b-navbar toggleable="lg" variant="faded" type="dark" class="background-custom">
      <b-navbar-brand href="/" class="text-left">
        <img src="https://files.catbox.moe/trx2ub.png"  class="d-inline-block align-top " alt="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav
          class="ml-auto"
          active-nav-item-class="font-weight-bold text-uppercase text-primary-custom"
        >
          <b-nav-item
            ><router-link class="active" to="/">Home</router-link></b-nav-item
          >
          <b-nav-item>
            <router-link to="/food-at-home"
              >Food at home</router-link
            ></b-nav-item
          >
          <b-nav-item>
            <router-link to="/food-at-shop"
              >Food at shop</router-link
            ></b-nav-item
          >
          <b-nav-item> <router-link to="/team">Team</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style lang="scss" scoped>
::v-deep {
  @import "../assets/style/custom.scss";
  @import "../../node_modules/bootstrap-vue/src/index.scss";
  a {
    max-width: 600px;
  }
  img {
    position: static;
    left: 0;
    width: 20%;
  }
}
</style>
