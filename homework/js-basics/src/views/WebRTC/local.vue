<template>
  <div class="demo">
    <div class="rtcBox">
      <div>
        <div class="video-box">
          <video src="" id="rtcA" controls autoplay></video>
          <h5>A</h5>
        </div>
        <div class="chat-box" v-show="!allowHangup && messageOpen">
          <h5>收消息</h5>
          <p>{{ receiveText }}</p>
        </div>
      </div>
      <div>
        <div class="video-box">
          <video src="" id="rtcB" controls autoplay></video>
          <h5>B</h5>
          <button @click="call" :disabled="allowCall">call</button>
          <button @click="hangup" :disabled="allowHangup">hangup</button>
        </div>
        <div class="chat-box" v-show="!allowHangup && messageOpen">
          <h5>发消息</h5>
          <textarea v-model="sendText"></textarea>
          <br />
          <button @click="send">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "local1",
  data() {
    return {
      peerA: null,
      peerB: null,
      channelA: null,
      channelB: null,
      offerOption: {
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1,
      },
      allowCall: true,
      allowHangup: true,
      messageOpen: false,
      sendText: "",
      receiveText: "",
    };
  },
  methods: {
    async createMedia() {
      // 保存本地流到全局
      this.localstream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      let video = document.querySelector("#rtcA");
      video.srcObject = this.localstream;
      this.initPeer();
    },
    initPeer() {
      // 创建输出端 PeerConnection
      let PeerConnection =
        window.RTCPeerConnection ||
        window.mozRTCPeerConnection ||
        window.webkitRTCPeerConnection;
      this.peerA = new PeerConnection();
      this.peerA.addStream(this.localstream);
      // 监听A的ICE候选信息
      // 如果收集到 就添加给B
      this.peerA.onicecandiate = (event) => {
        if (event.candidate) {
          this.peerB.addIceCandidate(event.candidate);
        }
      };
      this.peerA.ondatachannel = (event) => {
        console.log(event);
        this.channelA = event.channel;
        this.channelA.binaryType = "arraybuffer";
        this.channelA.onopen = (e) => {
          console.log("channelA onopen", e);
        };
        this.channelA.onclose = (e) => {
          console.log("channelA onclose", e);
        };
        this.channelA.onmessage = (e) => {
          this.receiveText = JSON.parse(e.data).name;
          console.log("channelA onmessage", e.data);
        };
      };

      // B端
      this.peerB = new PeerConnection();
      this.peerB.onaddstream = (event) => {
        // 监听是否有媒体流接入,如果有就赋值 rtcB的src
        console.log("event-stream", event);
        let video = document.querySelector("#rtcB");
        video.srcObject = event.stream;
      };
      this.channelB = this.peerB.createDataChannel("messagechannel");
      console.log("this.channelB", this.channelB);
      this.channelB.binaryType = "arraybuffer";
      this.channelB.onopen = (event) => {
        console.log("channelB onopen", event);
        this.messageOpen = true;
      };
      this.channelB.onclose = function (event) {
        console.log("channelB onclose", event);
      };
      // 监听B的ICE的候选信息  如果收集到 就添加给A
      this.peerB.onicecandiate = (event) => {
        if (event.candidate) {
          this.peerA.addIceCandidate(event.candidate);
        }
      };
      this.allowCall = false;
    },
    async call() {
      if (!this.peerA || !this.peerB) {
        this.initPeer();
      }
      try {
        let offer = await this.peerA.createOffer(this.offerOption);
        await this.onCreateOffer(offer);
      } catch (e) {
        console.log("createOffer", e);
      }
    },
    async onCreateOffer(desc) {
      try {
        await this.peerB.setLocalDescription(desc); // 呼叫端设置本地 offer描述
        await this.peerA.setRemoteDescription(desc); // 接受端设置远程offer 描述
        let answer = await this.peerA.createAnswer();
        await this.onCreateAnswer(answer);
      } catch (e) {
        console.log("onCreateOffer:", e);
      }
    },
    async onCreateAnswer(desc) {
      try {
        await this.peerA.setLocalDescription(desc);
        await this.peerB.setRemoteDescription(desc);
      } catch (e) {
        console.log("onCreateAnswer:", e);
      }
    },
    send() {
      this.channelB.send(
        JSON.stringify({
          name: this.sendText,
        })
      );
      this.sendText = "";
    },
    start() {
      this.state = "2";
      this.newRecognition.start();
    },
    stop() {
      this.state = "1";
      this.newRecognition.stop();
    },
    hangup() {
      this.peerA.close();
      this.peerB.close();
      this.channelA.close();
      this.channelB.close();
      this.peerA = null;
      this.peerB = null;
      this.channelA = null;
      this.channelB = null;
      this.sendText = "";
      this.receiveText = "";
      this.allowCall = false;
      this.allowHangup = true;
    },
  },
};
</script>

<style lang="less" scoped>
.rtcBox {
  display: flex;
  justify-content: center;
  .video-box {
    height: 380px;
    border-bottom: 1px solid #1fbeca;
    margin-bottom: 10px;
  }
  video {
    width: 400px;
    height: 300px;
    margin-left: 20px;
    background-color: #ddd;
  }
  .chat-box {
    text-align: center;
    h5 {
      margin-bottom: 10px;
    }
    p,
    textarea {
      width: 240px;
      height: 60px;
      border: 1px solid #000;
      display: inline-block;
    }
  }
}
</style>
