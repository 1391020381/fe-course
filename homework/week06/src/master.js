const fork = require('child_process').fork;
const cpus = require('os').cpus();
const server = require('net').createServer();

server.listen(1337)

let workers = {}

const createWorker = function () {
    let worker = fork(__dirname + '/worker.js')
    worker.on('message', function (message) {
        if (message.act == 'suicide') {
            createWorker()
        }
    })
    // 退出时重新启动新的进程
    worker.on('exit', function () {
        console.log('Worker:', worker.pid + 'exited.')
        delete workers[worker.pid]
        createWorker()
    })
    // 句柄转发
    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log('Create worker pid:' + worker.pid)
}
for (let i = 0; i < cpus.length; i++) {
    createWorker()
}

// 进程自己退出时,让所有工作进程退出
process.on('exit', function () {
    for (let pid in workers) {
        workers[pid].kill()
    }
})