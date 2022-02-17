<template>
  <div class="mt-3">
    <b-tabs
      content-class="mt-3"
      align="center"
      active-nav-item-class="font-weight-bold text-uppercase text-primary-custom"
      active-tab-class="font-weight-bold"
    >
      <b-tab active class="custom-layout">
        <template #title>
          <h1>
          Food at home
          </h1>
        </template>
        <template>
            <card/>
        </template>
      </b-tab>
      <b-tab class="custom-layout">
        <template #title>
          <h1>
          Food at shop
          </h1>
        </template>
        <template>
          <card2/>
        </template>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import card2 from "@/components/card2.vue";

export default {
  name: "tabs",
  components: {
    card,
    card2
  }
};
</script>

<style lang='scss'>
@import "../assets/style/custom.scss";
@import "../../node_modules/bootstrap-vue/src/index.scss";

.text-primary-custom {
  color: $primary !important;
}
.custom-layout {
    max-width: 1200px;
    margin-left: auto;
    width: 100%;
    margin-right: auto;
}
</style>
