const getList = (quthor,keyword) => {
    // 先返回假数据 (格式是正确的)
    return [
        {
            id:1,
            title:'标题A',
            content:'内容A',
            createTime:1546610491112,
            author:'张三'
        },
        {
            id:2,
            title:'标题B',
            content:'内容B',
            createTime:1546610524373,
            author:'李四'
        },
        {
            id:3,
            title:'标题C',
            content:'内容C',
            createTime:1560134719944,
            author:'王五'
        },
        {
            id:4,
            title:'标题D',
            content:'内容D',
            createTime:1560134737808,
            author:'牛牛'
        }
    ]
}


const getDetail = (id) => {
    // 先返回假数据
    return {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:1546610491112,
        author:'张三'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含title content 属性
    return{
        id: 3 //表示新建博客，插入到数据库表里面的 Id
    }
}

const updateBlog = (id,blogData = {}) => {
    // id就是要更新博客的id 
    // blogData 是一个博客对象，包含title content 属性
    console.log('update blog',id,blogData)

    return true
}

const delBlog = (id) => {
    // id就是删除博客的 id

    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}