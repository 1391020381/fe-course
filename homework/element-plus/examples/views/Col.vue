<template>
  <div class="page-Col">
    <Col>Col</Col>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from "vue";
import type { PropType } from "vue";
import { Col } from "@/ele";

export default defineComponent({
  name: "PageCol",
  components: { Col },
  setup(props, { emit, slots }) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>