# 用 Express 或 Koa 或 Nest 或 Fastify 实现练习 Fastify 里的以下功能：

 * MySQL
 * Redis
 * MongoDB
 * ElasticSearch

 * mongo-express  用nodejs开发的基于Web的mongodb的数据库管理工具
 * phpMyAdmin  MySQL图形化管理工具 Web跨平台
 * Dejavu 也是一个 Elasticsearch的 Web UI 工具，其 UI界面更符合当下主流的前端页面风格


 # 作业验收步骤
 * 在 week07目录下 docker-compose up
 * 使用 https://github.com/GeekFECampus/module3/tree/master/mongo-init   初始化 mongo数据库
 * yarn run dev 
 * http://localhost:3000

1. mysql
 * 增 
    - http://localhost:3000/sequelize/create?title=justdoit&desc=4 
 * 删 
    - http://localhost:3000/sequelize/deleteSome?title=justdoit&desc=4 
 * 改 
    - http://localhost:3000/sequelize/updateSome?title=justdoit&desc=4 
 * 查
    -  http://localhost:3000/sequelize/updateSome?title=justdoit&desc=4  


2. redis
*  http://localhost:3000/redis/create?title=justdoit&desc=4  
* http://localhost:3000/redis/get?title=justdoit&desc=4   

3. MongoDB
 * 增 
    - http://localhost:3000/mongoose/create?username=justdoit&age=4 
 * 删 
    - http://localhost:3000/mongoose/deleteSome?username=justdoit&age=4 
 * 改 
    - http://localhost:3000/mongoose/updateSome?username=justdoit&age=4  
 * 查
    -  http://localhost:3000/mongoose/updateSome?username=justdoit&age=4   

 4. ElasticSearch

    * http://localhost:3000/elasticsearch/create?name=justdoit&age=4   
    * http://localhost:3000/elasticsearch/queryAll?name=justdoit&age=4   
    * http://localhost:3000/elasticsearch/update?name=justdoi3333333333333&age=4   
    * http://localhost:3000/elasticsearch/delete?name=justdoit&age=4 
