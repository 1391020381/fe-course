const http = require('http')
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('handle by child pid is ' + process.pid + '\n')
})
let worker;
process.on('message', function (m, tcp) {
    if (m == 'server') {
        worker = tcp
        worker.on('connection', function (socket) {
            server.emit('connection', socket)
        })
    }
})

process.on('uncaughtException', function () {
    process.send({ act: 'suicide' })
    // 停止接受新的连接
    worker.close(function () {
        // 所有已有连接断开，退出进程
        process.exit()
    })
    // 避免长连接 断开需要较长时间
    setTimeout(function () {
        process.exit(1)
    }, 5000)
})