import { ResPage, Result, ResultData } from "@/api/interface/index";
import { Role } from "@/api/interface/system/role";
import { SYSTEM } from "@/api/config/servicePort";
import http from "@/api";

// 查询角色表格数据
export const listForRole = (params: Role.ReqRoleParams) => {
  return http.get<ResPage<Role.ResRoleList>>(SYSTEM + `/role/listForRole`, params, { noLoading: true });
};

// 查询角色信息
export const getInfoRole = (params: number) => {
  return http.get<ResultData>(SYSTEM + `/role/` + params, {}, { noLoading: true });
};

// 添加角色信息
export const addRole = (params: Role.ResRoleList) => {
  return http.post<Result>(SYSTEM + `/role`, params, { noLoading: true });
};

// 修改角色信息
export const updateRole = (params: Role.ResRoleList) => {
  return http.put<Result>(SYSTEM + `/role`, params, { noLoading: true });
};

// 删除角色
export const delRole = (params: number) => {
  return http.delete<Result>(SYSTEM + `/role/` + params, {}, { noLoading: true });
};

// 修改角色信息
export const changeStatusRole = (params: Role.ResRoleList) => {
  return http.put<Result>(SYSTEM + `/role/changeStatusRole`, params, { noLoading: true });
};

// 查询可用角色集合数据
export const getSelectRole = () => {
  return http.get<Array<Role.ResRoleList>>(SYSTEM + `/role/getSelectRole`, {}, { noLoading: true });
};
