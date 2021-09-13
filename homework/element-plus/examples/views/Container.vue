<template>
  <div class="page-container">
    <h2>Container 布局容器</h2>
    <Container>
      <Header>Header</Header>
      <Aside>Aside</Aside>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from "vue";
import type { PropType } from "vue";
import { Container, Aside, Footer, Header, Main } from "@/ele";

export default defineComponent({
  name: "PageContainer",
  components: { Container },
  setup(props, { emit, slots }) {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
