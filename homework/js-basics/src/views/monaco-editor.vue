<template>
  <div class="content" id="monaco-editor"></div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
export default {
  data() {
    return {};
  },
  created() {
    this.$nextTick(() => {
      this.createMonacoEditor();
    });
  },
  methods: {
    createMonacoEditor() {
      monaco.editor.create(document.getElementById("monaco-editor"), {
        value: `const foo = () => 0;`,
        language: "javascript",
        theme: "vs-dark",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  height: 400px;
}
</style>
