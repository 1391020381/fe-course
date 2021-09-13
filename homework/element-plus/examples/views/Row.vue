<template>
  <div class="page-row">
    <Row>Row</Row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from "vue";
import type { PropType } from "vue";
import { Row } from "@/ele";

export default defineComponent({
  name: "PageRow",
  components: { Row },
  setup(props, { emit, slots }) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>