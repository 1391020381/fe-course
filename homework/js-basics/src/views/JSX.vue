<template>
  <div class="jsx">
    <anchored-heading :level="1">anchored-heading</anchored-heading>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  created() {
    Vue.component("anchored-heading", {
      render: function (createElement) {
        return createElement(
          "h" + this.level, // 标签名称
          this.$slots.default // 子节点数组
        );
      },
      props: {
        level: {
          type: Number,
          required: true,
        },
      },
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
