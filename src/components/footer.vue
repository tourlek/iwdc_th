<template>
  <div class="footer">
    <img src="../assets/images/20210202-logoRMUTT-color_Eng.png" width="auto" height="auto" alt="">
    <img src="../assets/images/logo-MCT-FINAL-ok-02.png" width="auto" height="auto" alt="">
    <img src="../assets/images/620dc7e37eed1bd06c328569_images-removebg-preview.png" width="auto" height="auto" alt="">
  </div>
</template>

<script>
export default {
  name: "footr",
};
</script>

<style lang="scss">
@import "../assets/style/custom.scss";
@import "../../node_modules/bootstrap-vue/src/index.scss";
.footer {
  position: relative;
  display: flex;
  height: 80px;
  bottom: 0;
  background-color: $primary;
  text-align: center;
  padding: 10px;
}
</style>
