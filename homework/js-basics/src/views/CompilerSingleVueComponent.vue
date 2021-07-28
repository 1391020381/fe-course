<template>
  <div class="content">
    <div id="monaco-editor"></div>
    <div class="get-file"><input type="file" @change="showFile" /></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
export default {
  data() {
    return {
      filePickerOptions: {
        types: [
          {
            description: "any",
            accept: {
              // "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            },
          },
        ],
        excludeAcceptAllOption: false,
        multiple: false,
      },
      monacoEditor: null,
    };
  },
  created() {
    this.$nextTick(() => {
      this.createMonacoEditor();
    });
  },
  methods: {
    createMonacoEditor() {
      let that = this;
      this.monacoEditor = monaco.editor.create(
        document.getElementById("monaco-editor"),
        {
          value: "",
          language: "javascript",
          fontSize: 14,
          autoIndent: true,
          automaticLayout: true,
          theme: "vs-dark",
        }
      );
      this.monacoEditor.executeEdits("", [
        {
          range: {
            startLineNumber: this.monacoEditor.getPosition().lineNumber,
            startColumn: this.monacoEditor.getPosition().column,
            endLineNumber: this.monacoEditor.getPosition().lineNumber,
            endColumn: this.monacoEditor.getPosition().column,
          },
          forceMoveMarkers: true,
        },
      ]);
      this.monacoEditor.addCommand(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S,
        function () {
          console.log("SAVE pressed!");
          let value = that.monacoEditor.getValue();
          that.saveFile(value);
          console.log(value, "-------");
        }
      );
    },
    showFile(e) {
      let files = e.target.files;
      console.log(files);
      let file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        this.monacoEditor.setValue(e.target.result);
        return e.target.result;
      };
      reader.readAsText(file);
    },
    async saveFile(contents) {
      let file = "";
      try {
        file = await window.showSaveFilePicker(this.filePickerOptions);
      } catch (e) {
        if (e.message.indexOf("The user aborted a request.") === -1) {
          console.error(e);
        }
        return;
      }
      // 然后接前面的代码
      const writable = await file.createWritable();
      await writable.write(contents);
      await writable.close();
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 1200px;
  height: 400px;
  #monaco-editor {
    width: 100%;
    height: 500px;
  }
  .get-file {
    margin-top: 50px;
  }
}
</style>
