<template>
  <!-- 卡片 -->
  <el-card class="box-card">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input
          placeholder="请输入内容"
          v-model="queryInfo.query"
          :clearable="true"
          @clear="resetdata"
        >
          <template #append>
            <el-button @click="search" icon="el-icon-search"> </el-button>
          </template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="switchDialog1" type="primary">添加用户 </el-button>
      </el-col>
    </el-row>

    <el-table :data="userlist" style="width: 100%">
      <el-table-column label="序号" type="index" width="80"></el-table-column>
      <el-table-column label="用户手机" prop="mobile" width="120">
      </el-table-column>
      <el-table-column label="密码" prop="password" width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template #default='scoped'>
          <el-button size="mini" type="success" @click="updateuserdialog(scoped.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="del(scoped.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[2, 3, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="queryInfo.total"
    >
    </el-pagination>

    <el-dialog title="添加用户信息" v-model="addUserDialogVisible" width="40%">
      <el-form
        ref="addFromRef"
        :rules="addFormRules"
        :model="addForm"
        label-width="80px"
      >
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addUserDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="enterdialog1"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>


     <!-- 对话框2  -->
    <el-dialog
      title="修改用户信息"
      v-model="addUserDialogVisible2"
      width="40%"
      @close="updateFormRefclose"
    >
      <el-form
        ref="updateFormRef"
        :rules="addFormRules"
        :model="addForm2"
        label-width="80px"
      >
       <el-form-item label="唯一id" prop="mobile">
          <el-input v-model="addForm2._id" readonly></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="addForm2.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm2.password"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addUserDialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="enterdialog2">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getUserInfoList, getUserSearch,addUser,delUser,updateuser } from "@/api/sys";
import { ElMessage } from 'element-plus' 
// 分页逻辑
const queryInfo = ref({
  query: "",
  pagenum: 1,
  pagesize: 2,
  id: "",
  total: 10,
  
});
const handleSizeChange = (e) => {
  console.log("e", e);
  queryInfo.value.pagesize = e;
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("res", res);
    userlist.value = res.data;
    queryInfo.value.total = res.total;
  });
};

const handleCurrentChange = (e) => {
  console.log(e);
  queryInfo.value.pagenum = e;
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("res", res);
    userlist.value = res.data;
    queryInfo.value.total = res.total;
  });
};

// 分页逻辑

// 请求用户列表逻辑
const userlist = ref([]);
onMounted(() => {
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("res", res);
    userlist.value = res.data;
  });
});

// 请求用户列表逻辑

// 后台管理搜索逻辑
const search = () => {
  console.log("search");
  getUserSearch(queryInfo.value.query).then((res) => {
    console.log("res", res);
    userlist.value = res.data;
  });
};
var resetdata = () => {
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("reslist userlist", res);
    userlist.value = res.data;
    console.log("res.data", res.data);
    queryInfo.value.total = res.total;
  });
};

// 后台管理搜索逻辑

// 添加用户逻辑 
const addUserDialogVisible = ref(false)
var addForm = ref ({
    password:'',
    mobile:''
})
var addFormRules = ref({
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],

  mobile: [
    { required: true, message: "请输入手机号码", trigger: "blur" },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: "请输入正确手机号",
      trigger: "blur",
    },
  ],
});
const switchDialog1 = ()=>{
addUserDialogVisible.value = true 
}

// this.$refs.addFromRef vue2用法 

var adduserresetdata  = () => {
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("reslist userlist", res);
    userlist.value = res.data;
    console.log("res.data", res.data);
    queryInfo.value.total = res.total;
  });
};

const addFromRef = ref('')
const enterdialog1 = ()=>{
    addFromRef.value.validate(valid=>{
        console.log('valid',valid)
        if(!valid) {
            ElMessage.error('请按照表单正确格式填写')
        }

        addUser(addForm.value).then((res)=>{
            console.log('addusr添加结果',res)
            if(res.info == 'success') {
                ElMessage.success('创建用户成功')
                addUserDialogVisible.value=false 
                addForm.value = {
                     password:'',
                     mobile:''
                }
                adduserresetdata()
            }
        })
    })
}

// 添加用户逻辑 



// 删除用户数据逻辑 
var deluserresetdata  = () => {
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("reslist userlist", res);
    userlist.value = res.data;
    console.log("res.data", res.data);
    queryInfo.value.total = res.total;
  });
};
const del = (rowdata) =>{
    console.log(rowdata)
    delUser(rowdata).then((res)=>{
        ElMessage.success('删除成功')
    deluserresetdata()

    })
}





// 删除用户数据逻辑



// 修改用户的逻辑 
 var addForm2= ref ({
    password:'',
    mobile:'',
    _id:''
})
const addUserDialogVisible2 = ref(false)
const updateuserdialog = (rowdata)=>{
    console.log(rowdata)
    addUserDialogVisible2.value = true 
    addForm2.value.mobile = rowdata.mobile
     addForm2.value.password = rowdata.password
      addForm2.value._id = rowdata._id
}

var updateuserresetdata  = () => {
  getUserInfoList(queryInfo.value).then((res) => {
    console.log("reslist userlist", res);
    userlist.value = res.data;
    console.log("res.data", res.data);
    queryInfo.value.total = res.total;
  });
};


const enterdialog2 = () =>{
    updateuser( addForm2.value).then((res)=>{
        updateuserresetdata() 
        addUserDialogVisible2.value = false 
    }) 
}

// 修改用户的逻辑 

</script>



<style scoped lang='scss'>
.el-card {
  margin-top: 15px;

  box-shadow: 0 1px 1px #353333;
}

.el-breadcrumb {
  font-size: 12px;
}
</style>