
<template>
  <div class="page-dialog">
    <h2>Dialog 对话框</h2>
    <button type="text" @click="dialogVisible = true">点击打开 Dialog</button>

    <Dialog
      title="提示"
      v-model="dialogVisible"
      width="400px"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <button @click="dialogVisible = false">取 消</button>
          <button type="primary" @click="dialogVisible = false">确 定</button>
        </span>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, h } from "vue";
import type { PropType } from "vue";
import { Dialog, Button } from "@/ele";
export default defineComponent({
  name: "PageDialog",
  components: { Dialog, Button },
  data() {
    return {
      dialogVisible: false,
    };
  },
  setup(props, { emit, slots }) {
    return {};
  },
  methods: {
    handleClose(done) {
      console.log(done);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
