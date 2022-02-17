<template>
  <div id="app">
    <div id="navbar">
      <navbar />
    </div>
    <Transition name="fade" mode="out-in">
      <router-view />
    </Transition>
    <div id="footer">
      <footr />
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import footr from "@/components/footer.vue";

export default {
  components: {
    navbar,
    footr
  },
};
</script>

<style lang="scss">
@import "./assets/style/custom.scss";
@import "../node_modules/bootstrap-vue/src/index.scss";
#footer {
  position: relative;
  display: flex;
  height: 100px;
  justify-content: center;
  bottom: 0;
  background-color: $primary;
  text-align: center;
  padding: 10px;
  img {
    padding: 0px 15px 0px 0px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100vh;
}

a {
  text-decoration: none;
}
#navbar {
  padding: 0px;
}

#navbar a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#navbar a.router-link-exact-active {
  color: #ffffff;
}

.background-custom {
  background-color: $red;
}
</style>
