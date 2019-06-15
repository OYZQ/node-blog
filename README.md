## 启动

+ html-test:http-server -p 8001
+ G:\nginx\nginx-1.16.0>nginx
+ npm run dev
+ C:\redis>redis-server.exe redis.windows.conf
+ MySQL:SET SQL_SAFE_UPDATES=0;



## 功能模块

+ 处理http接口
+ 连接数据库
+ 实现登录
+ 安全
+ 日志
+ 上线

## 核心知识点

+ http,nodejs处理http，处理路由，MySQL
+ cookie,session,redis,nginx方向代理
+ sql注入，xss攻击、加密
+ 日志，stream,contrab,readline

## server和前端区别

+ 服务稳定性
+ 内存CPU（优化 扩展）
+ 日志记录
+ 安全（包括登录验证，sql注入，xss攻击）
+ 集群和服务拆分（设计已支持）

## 下一步

+ 不使用框架开发，从0开始，关注底层API
+ 很琐碎，很复杂，没有标准可依，很容易将代码写乱
+ 适合学习，但不适合应用，接下来开始express 和 koa2

## 线上环境

+ 服务器稳定性

+ 充分利用服务器硬件资源，以便提高性能

+ 线上日志记录

  ### PM2

  +  进程守护，系统崩溃自动重启
  + 启动多进程，充分利用CPU和内存
  + 自带日志记录功能