const mysql = require('mysql')

// 创建链接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'myblog'
})

// 开始链接
con.connect()

// 执行 sql 语句
const sql = `insert into blogs(title,content,createtime,author) values('标题C','内容C',1560221074460,'zhangsan');`
con.query(sql,(err,result)=> {
    if(err){
        console.error(err)
        return
    }
    console.log(result)
})

// 关闭链接
con.end()
