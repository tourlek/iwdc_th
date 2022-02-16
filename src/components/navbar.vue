<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="background-custom">
      <b-navbar-brand href="#">IWDC</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item> <router-link to="/">Home</router-link> | </b-nav-item>
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style lang="scss">

</style>
