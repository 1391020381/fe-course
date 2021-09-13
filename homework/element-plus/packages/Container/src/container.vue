<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";

import type { Component, VNode } from "vue";

export default defineComponent({
  name: "ElContainer",
  props: {
    direction: {
      type: String,
      default: "",
    },
  },
  setup(props, { slots }) {
    // el-container外层容器   el-header  el-aside侧边栏    el-main主要区域容器  el-footer底栏容器
    // 子元素中包含 el-header el-footer 时,全部子元素会垂直上下排列，否则会水平左右排列
    const isVertical = computed(() => {
      if (props.direction === "vertical") {
        return true;
      } else if (props.direction === "horizontal") {
        return false;
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default();
        console.log(vNodes, "vNodes");
        return vNodes.some((vNode) => {
          const tag = (vNode.type as Component).name;
          return tag === "ElHeader" || tag === "ElFooter";
        });
      } else {
        return false;
      }
    });
    return {
      isVertical,
    };
  },
});
</script>
