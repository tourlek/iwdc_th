<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
     <Transition name="fade" mode="out-in">
        <router-view />
     </Transition>

  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
export default {
  components: {
    navbar,
  },
}
</script>

<style lang="scss">
@import "./assets/style/custom.scss";
@import "../node_modules/bootstrap-vue/src/index.scss";
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.background-custom {
  background-color: $red;
}
</style>
