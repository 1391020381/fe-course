1. getUserMedia
2. RTCPeerConnection
3. 


# NAT穿越技术
1. 为每个链接端创建一个RTCPeerConnection 并添加本地媒体流


* WebRTC的通信至少需要两种服务配合
    - 信令阶段需要双向通信服务辅助信息交换
    - STUN TUR辅助实现NAT穿越