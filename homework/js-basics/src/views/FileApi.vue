<template>
  <div class="file-api">
    <button @click="getFile">getFile</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileHandle: "",
      pickerOpts: {
        types: [
          {
            description: "Images",
            accept: {
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            },
          },
        ],
        excludeAcceptAllOption: false,
        multiple: false,
      },
    };
  },
  methods: {
    async getFile() {
      try {
        [this.fileHandle] = await window.showOpenFilePicker(this.pickerOpts);
        console.log("getFile:", this.fileHandle);
        if (this.fileHandle) {
          return;
        }
        const options = {
          writable: true,
          mode: "readwrite",
        };
        if (
          (await this.fileHandle.queryPermission(options)) !== "granted" &&
          (await this.fileHandle.requestPermission(options)) !== "granted"
        ) {
          alert("Please grant permissions to read & write this file");
          return;
        }
        const file = await this.fileHandle.getFile();
        const code = await file.text();
        console.log("code:", code);
      } catch (e) {
        console.log(e);
        if (e.message.indexOf("The user aborted a request") === -1) {
          return;
        }
      }
    },
  },
};
</script>

<style></style>
