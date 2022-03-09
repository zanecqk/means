const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");
// npm i md5
const md5 = require("md5");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

const user = require("./sql/user");
// var cors=require('cors');
// // 同源策略 同域名 同端口 同协议
// app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

//123   md5(123)  Jhi78   1 A向后推10位数 10J

const passwdCrypt = (req, res, next) => {
  // abc12345678
  var passwd = req.body.password;

  req.body.passwdCrypted = md5(passwd);
  next();
};

app.get("/a", (req, res) => res.send("Hello World!"));

app.post("/init", passwdCrypt, (req, res) => {
  res.send("init password is:" + req.body.passwdCrypted);
  // init password is:f5e441058f94f7318dc0【明文密码是123456】
});
const checkToken = function (req, res, next) {
  console.log("我进入校验token识别 这一步了");
  // 这一步相当于迪士尼买票的通过你来的
  // dfwefjlkgjiorjiowefkjfkjfsljkfsljefljjiowojwffejiojwfiewfjiovej
  //  dfsfweerkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj 假token
  // {age:20,name:'zs',height:'190'，buy:true,time:'2021-6-4'}
  console.log("token");
  console.log(req.query.token);
  // 怎么样都可以传  这只是一种传递方式  能过来让服务器看见token就可以了
  var _token = req.query.token;

  //这里要做 更合理的  各种情况的处理
  try {
    // jwt引擎 反推这个秘文  是否是我给你的  是的话 把你秘文变成你的 用户信息 还原
    let verify = jwt.verify(_token, jwt_secret);
    console.log("verify");
    // 加密的时候
    // data:{
    //     // 转译用户信息的过程算法
    //     _token:jwt.sign({
    //         // userId:result.userId,
    //         password:passwdCrypted,
    //         mobile:result.mobile
    //     },
    //         jwt_secret,
    //         { expiresIn: 60*60*60}
    //     )
    // }
    // 解密的时候
    // verify {
    //     password: 'a1e99fa5594db03d4187704794a7acd4',
    //     mobile: '18612345678',
    //     iat: 1622789587,
    //     exp: 1623005587
    //   }
    console.log(verify);
    if (verify) {
      console.log("verify", verify);
      console.log("我进入verify里面了");
      req.body.user_info = verify;
      console.log("req.body.user._info", req.body.user_info);
      next();
    }
  } catch (error) {
    res.send({
      code: "888",
      info: "你是不是没有我们的权限token乱来啊请重新登陆 ",
    });
  }
};

app.get("/userinfo", checkToken, (req, res) => {
  console.log("进来了/api/v1/user_info");

  console.log(req.body.user_info);
  res.send({
    code: "1000",
    info: "success",
    info2: req.body.user_info,
  });
});
//  先命中注册 然后不往后执行 要执行 passwdCrypt函数
app.post("/zhuce", passwdCrypt, (req, res) => {
  console.log("zhuce我进来了");
  // 拿get请求的参数 req.query
  //post 请求 req.body
  var obj = {
    mobile: req.body.mobile,
    // password:req.body.password,
    password: req.body.passwdCrypted,
  };
  user.findOne({ mobile: req.body.mobile }, (err, data) => {
    if (err) {
      console.log(err);
    }
    // 如果查到了 有data代表注册过  让她继续停留在注册页面 别管他‘

    if (data) {
      res.send({
        code: "409",
        message: "已经注册过了",
      });
    } else {
      // 如果没注册  开始注册 注册好了 进login页面 让他登录
      user.insertMany(obj, (err, data) => {
        if (err) {
          console.log("err", err);
        }
        console.log(data);
        //数据库有他就可以进入 /login
        res.send({
          code: "200",
          msg: data,
          message: "注册成功",
        });
      });
    }
  });
});

const jwt_secret = "aaa";
app.post("/login", passwdCrypt, async (req, res) => {
  console.log("/login");
  //这一步呼应 上面中间件处理的哪一步 req.body.passwdcrpyt = a
  let { mobile, passwdCrypted } = req.body;
  console.log("mobile", mobile);
  console.log("passwdcrpty", passwdCrypted);
  let result = await user.findOne({ mobile, password: passwdCrypted });
  if (result) {
    res.send({
      code: "1000",
      info: "success",
      mobile: mobile,
      // 445345435345345+一小时的时间戳
      //           {password:dfdfefef,mobile:1888888888 }
      //    {password:dfdfefef,mobile:1888888888, time:'1h'}
      // 下面的这个乱码和上面的对象意思一样 知识密码化了给前端
      // dfwefjlkgGGGiorjiowefkjfaaakjfslajkfslaaaaaajefljjiowojwffedjaaaiojwfi
      // dfwefjlkgGGGiorjiowefkjfaaakjfslajkfslaaaaaajefljjiowojwffedjaaaiojwfiewfjiovej
      data: {
        // 转译用户信息的过程算法
        _token: jwt.sign(
          {
            // userId:result.userId,
            password: passwdCrypted,
            mobile: result.mobile,
          },
          jwt_secret,
          { expiresIn: 1000 * 60 * 60 * 2 }
        ),
      },
    });
  } else {
    res.send({
      code: "9999",
      info: "走开 你不是我的用户 ",
    });
  }
});

// vue3 后台管理 API



// 用户列表获取API 
app.get('/api/sys/userlist', async (req, res) => {
  console.log('req.query', req.query)
  let userlist = await user.find({}).skip(req.query.pagenum * 1 - 1).limit(req.query.pagesize * 1)
  let userlist2 = await user.find({})
  res.send({
    info: 'success',
    data: userlist,
    total: userlist2.length
  })
})



app.get('/api/sys/getUsersearch', async (req, res) => {
  console.log('req.query.query', req.query)
  let newuser = await user.find({ mobile: req.query.mobile })

  res.send({
    info: 'success',
    data: newuser
  })
})


app.post('/api/sys/adduser', async (req, res) => {
  console.log('req.body', req.body.data.mobile)
  let newuser = await user.find({ mobile: req.body.data.mobile })
  console.log('newuser', newuser.length)
  if (newuser.length != 0) {
    console.log(1)
    res.send({
      info: 'fail',
      data: '已经注册过了'
    })
  } else {
    console.log(2)
    await user.insertMany({ mobile: req.body.data.mobile, password: req.body.data.password })
    res.send({
      info: 'success',
      data: '注册成功'
    })
  }


})

app.post('/api/sys/deluser', async (req, res) => {
  console.log('req.body deluser', req.body)

  var result = await user.findByIdAndDelete(req.body.data._id)
  res.send({
    info: 'success',
    data: '删除成功'
  })

})

app.post('/api/sys/update', async (req, res) => {
  console.log('req.body updateuser', req.body)

  var result = await user.findByIdAndUpdate(req.body.data._id, req.body.data)
  res.send({
    info: 'success',
    data: '更新成功'
  })

})


app.post("/api/sys/login", passwdCrypt, async (req, res) => {
  console.log("/login");
  //这一步呼应 上面中间件处理的哪一步 req.body.passwdcrpyt = a
  let { mobile, passwdCrypted } = req.body;
  console.log("req.body", req.body);
  console.log("mobile", mobile);
  console.log("passwdcrpty", passwdCrypted);
  let result = await user.findOne({ mobile: mobile, password: passwdCrypted });
  if (result) {
    res.send({
      code: "1000",
      info: "success",
      mobile: mobile,

      data: {
        // 转译用户信息的过程算法
        _token: jwt.sign(
          {
            // userId:result.userId,
            password: passwdCrypted,
            mobile: result.mobile,
          },
          jwt_secret,
          { expiresIn: 1000 * 60 * 60 * 2 }
        ),
      },
    });
  } else {
    res.send({
      code: "9999",
      info: "走开 你不是我的用户 ",
    });
  }
});

const checkToken2 = function (req, res, next) {
  console.log("我进入校验token识别 这一步了");
  console.log("token");
  console.log("req.headers.Authorization", req.headers.authorization.substr(7));
  var _token = req.headers.authorization.substr(7);

  try {
    // jwt引擎 反推这个秘文  是否是我给你的  是的话 把你秘文变成你的 用户信息 还原
    let verify = jwt.verify(_token, jwt_secret);
    console.log("verify");
    console.log(verify);
    if (verify) {
      console.log("verify", verify);
      console.log("我进入verify里面了");
      req.body.user_info = verify;
      console.log("req.body.user._info", req.body.user_info);
      next();
    }
  } catch (error) {
    res.send({
      code: "403",
      info: "你是不是没有我们的权限token乱来啊请重新登陆 ",
    });
  }
};

app.get("/api/sys/profile", checkToken2, (req, res) => {
  console.log("进来了/api/v1/user_info");

  console.log(req.body.user_info.mobile);
  if (req.body.user_info.mobile == "18612345678") {
    var rights = [
      {
        id: 1,
        authName: "个人相关",
        children: [
          {
            id: 11,
            authName: "个人中心",
            path: "/menu/one",
          },
        ],
      },
      {
        id: 2,
        authName: "用户",
        children: [
          {
            id: 13,
            authName: "用户管理",
            path: "/menu/two",
          },
          {
            id: 14,
            authName: "角色管理",
            path: "/menu/three",
          },
          {
            id: 15,
            authName: "权限列表",
            path: "/menu/four",
          },
        ],
      },
      {
        id: 3,
        authName: "销售",
        children: [
          {
            id: 21,
            authName: "销售排名",
            path: "/menu/five",
          },
          {
            id: 22,
            authName: "销售信息",
            path: "/menu/six",
          },
        ],
      },
      {
        id: 4,
        authName: "工资管理",
        children: [
          {
            id: 23,
            authName: "员工工资",
            path: "/menu/seven",
          },
          {
            id: 24,
            authName: "高管工资",
            path: "/menu/eight",
          },
        ],
      },
      {
        id: 5,
        authName: "车辆管理",
        children: [
          {
            id: 25,
            authName: "车辆信息",
            path: "/menu/nine",
          },
        ],
      },
      {
        id: 6,
        authName: "人事管理",
        children: [
          {
            id: 27,
            authName: "秘书管理",
            path: "/menu/eleven",
          },
          {
            id: 28,
            authName: "前台管理",
            path: "/menu/twelve",
          },
        ],
      },
    ];

    res.send({
      code: 200,
      info: "success",
      data: {
        avatar:
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0113d566-d450-4ea0-839d-c4972a6140fd/91a3bd19-f698-4189-a4f7-cb077341f48f.png",
        id: "0",
      },
      rights: rights,
      permission: {
        menus: [
          "userManage",
          "roleList",
          "permissionList",
          "articleRanking",
          "articleCreate",
        ],
        points: [
          "distributeRole",
          "importUser",
          "removeUser",
          "distributePermission",
        ],
      },
      role: [{ id: "0", title: "Super administrator" }],
      title: "超级管理员",
      _id: "wfefwe4644efwef",
    });
  } else if (req.body.user_info.mobile == "18612345679") {
    var rights = [
      {
        id: 1,
        authName: "个人相关",
        children: [
          {
            id: 11,
            authName: "个人中心",
            path: "/menu/one",
          },
        ],
      },
      {
        id: 2,
        authName: "用户",
        children: [
          {
            id: 13,
            authName: "员工管理",
            path: "/menu/two",
          },
          {
            id: 14,
            authName: "角色管理",
            path: "/menu/three",
          },
          {
            id: 15,
            authName: "权限列表",
            path: "/menu/four",
          },
        ],
      },
      {
        id: 3,
        authName: "文章",
        children: [
          {
            id: 21,
            authName: "文章排名",
            path: "/menu/five",
          },
          {
            id: 22,
            authName: "创建文章",
            path: "/menu/six",
          },
        ],
      },

      {
        id: 5,
        authName: "车辆管理",
        children: [
          {
            id: 25,
            authName: "车辆信息",
            path: "/menu/nine",
          },
        ],
      },

    ];

    res.send({
      code: 200,
      info: "success",
      data: {
        avatar:
          "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0113d566-d450-4ea0-839d-c4972a6140fd/2fecb828-7a6e-4f53-95f9-0e9378a5dbe9.png",
        id: "0",
      },
      rights: rights,
      permission: {
        menus: [
          "userManage",
          "roleList",
          "permissionList",
          "articleRanking",
          "articleCreate",
        ],
        points: [
          "distributeRole",
          "importUser",
          "removeUser",
          "distributePermission",
        ],
      },
      role: [{ id: "0", title: "Super administrator" }],
      title: "中层",
      _id: "wfefwe4644efwef",
    });

  }
});

app.listen(port, () =>
  console.log(`Server is running at http://127.0.0.1:${port}!`)
);

// 你去迪士尼乐园玩
// {name:'zs',age:18,time:'12/28',mobile:188888}     aaa
// 给了你一张纸条
// fdsfdsaaaafsfwerrwe34aaa53543534aaa53453453aaa453453

// 中午出去吃饭
// 吃完饭进园区  fdsfdsfsfwerrwe345354353453453453453453  aaa 放在电脑里面进行反解
