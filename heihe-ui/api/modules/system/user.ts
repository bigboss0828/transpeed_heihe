import { ResPage, Result, ResultData } from "@/api/interface/index";
import { User } from "@/api/interface/system/user";
import { SYSTEM } from "@/api/config/servicePort";
import http from "@/api";

// 查询用户表格数据
export const listForUser = (params: User.ReqUserParams) => {
  return http.get<ResPage<User.ResUserList>>(SYSTEM + `/user/listForUser`, params, { noLoading: true });
};

// 查询用户信息
export const getInfoUser = (params: number) => {
  return http.get<ResultData>(SYSTEM + `/user/` + params, {}, { noLoading: true });
};

// 添加用户信息
export const addUser = (params: User.ResUserList) => {
  return http.post<Result>(SYSTEM + `/user`, params, { noLoading: true });
};

// 修改用户信息
export const updateUser = (params: User.ResUserList) => {
  return http.put<Result>(SYSTEM + `/user`, params, { noLoading: true });
};

// 删除用户
export const delUser = (params: number) => {
  return http.delete<Result>(SYSTEM + `/user/` + params, {}, { noLoading: true });
};

// 停用用户
export const changeStatusUser = (params: User.ResUserList) => {
  return http.put<Result>(SYSTEM + `/user/changeStatusUser`, params, { noLoading: true });
};

// 重置用户密码
export const resetPassword = (params: User.ResUserList) => {
  return http.put<Result>(SYSTEM + `/user/resetPassword`, params, { noLoading: true });
};

// 修改密码
export const updatePassword = (params: User.ReqUserPasswordParams) => {
  return http.put<Result>(SYSTEM + `/user/updatePassword`, params, { noLoading: true });
};
