<template>
  <div class="about">
    <card />
    <b-button variant="success">
      <strong class="text-lowercase primary">BUTTON</strong>
    </b-button>
  </div>
</template>
<script>
import card from "@/components/card.vue";
export default {
  components: {
    card,
  },
};
</script>
<style scoped>
.about {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
