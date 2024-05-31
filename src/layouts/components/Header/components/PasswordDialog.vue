<template>
  <el-dialog v-model="dialogVisible" title="修改密码" width="500px" draggable :close-on-click-modal="false">
    <el-form ref="ruleFormRef" label-width="110px" label-suffix=" :" :rules="rules" :model="drawerProps">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="原密码" prop="oldPassword">
            <el-input
              v-model="drawerProps.oldPassword"
              type="password"
              clearable
              show-password
              placeholder="请填写原密码"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              v-model="drawerProps.newPassword"
              placeholder="请填写新密码"
              type="password"
              clearable
              show-password
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="确认新密码" prop="verifyPassword">
            <el-input
              v-model="drawerProps.verifyPassword"
              placeholder="请确认新密码"
              type="password"
              clearable
              show-password
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { LOGIN_URL } from "@/config";
import { logoutApi } from "@/api/modules/login";
import { ElMessage, FormInstance } from "element-plus";
import { useUserStore } from "@/stores/modules/user";
import { updatePassword } from "@/api/modules/system/user";

const router = useRouter();
const userStore = useUserStore();
const userId = computed(() => userStore.userInfo.userId);

const dialogVisible = ref(false);

const openDialog = () => {
  dialogVisible.value = true;
};

const rules = reactive({
  oldPassword: [{ required: true, message: "原密码不能为空" }],
  newPassword: [
    {
      required: true,
      pattern: new RegExp(
        "^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^&*`~()-+=]+$)(?![0-9\\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\\W_!@#$%^&*`()-+=]{8,20}$"
      ),
      message: "密码由7位以上的大小写字母、数字及特殊字符中的3种组合而成",
      trigger: "blur"
    }
  ],
  verifyPassword: [
    { required: true, message: "请再次输入新密码" },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value !== drawerProps.value.newPassword) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      }
    }
  ]
});

interface DialogProps {
  // 原密码
  oldPassword: string;
  // 新密码
  newPassword: string;
  // 确认密码
  verifyPassword: string;
}

const drawerProps = ref<DialogProps>({
  oldPassword: "",
  newPassword: "",
  verifyPassword: ""
});
// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    try {
      const params = {
        oldPassword: drawerProps.value.oldPassword,
        newPassword: drawerProps.value.newPassword,
        userId: userId.value
      };
      await updatePassword(params);
      // 1.执行退出登录接口
      await logoutApi();
      // 2.清除 Token
      userStore.setToken("");
      // 3.重定向到登陆页
      router.replace(LOGIN_URL);
      ElMessage.success({ message: `修改成功！` });
      dialogVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({ openDialog });
</script>
