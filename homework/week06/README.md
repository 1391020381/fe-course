# 作业：Master/Worker 主从网络处理架构实现
* 概述：创建一个主从网络架构，Master 接受 Socket 连接，根据负载均衡，分发给 Worker，Worker 处理具体业务。

* 选做：监听 Worker 状态，如果 Worker 发生异常退出之后，Master 重启一个进程。



* week06文件夹 src目录下  node master 启动服务