import request from '@/utils/request'

// 登录的处理函数  

export const login = data =>{
    return request({
        url:'/sys/login',
        // url  api/sys/login
        method:'POST',
        data
    })
}



// 获取用户信息请求 

export const getUserInfo = () => {
    return request({
      url: '/sys/profile'
    })
  }


// 获取用户列表接口  
export const getUserInfoList = (query) => {
  return request({
    url: '/sys/userlist',
    method: 'get',
    params:query
  })
}

// 搜索接口 

export const getUserSearch = (query) => {
  return request({
    url: '/sys/getUsersearch',
    method: 'get',
    params:{
      mobile:query
    }
  })
}



// 添加用户的接口 
export const addUser = (data) =>{
  return request ({
    url:'/sys/addUser',
    method:'post',
    data:{
      data:data
    }
  })
}



// 删除用户接口 

export const delUser = (data)=>{
  return request({
    url:'/sys/deluser',
    method:'post',
    data:{
      data:data
    }
  })
}




// 修改用户接口 
export const updateuser = (data)=>{
  return request({
    url:'/sys/update',
    method:'post',
    data:{
      data:data
    }
  })
}




