const serverHandle = (req,res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json')

}

module.exports = serverHandle

// env: process.env.NODE_ENV