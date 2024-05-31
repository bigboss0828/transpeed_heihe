import { Menu } from "@/api/interface/system/menu";
import { SYSTEM } from "@/api/config/servicePort";
import { ResultData, Result } from "@/api/interface/index";

import http from "@/api";

// 查询菜单表格信息
export const listForMenu = (params: Menu.ReqMenuParams) => {
  return http.get<Array<Menu.ResMenuList>>(SYSTEM + `/menu/listForMenu`, params, { noLoading: true });
};

// 查询菜单信息
export const getInfoMenu = (params: number) => {
  return http.get<ResultData>(SYSTEM + `/menu/` + params, {}, { noLoading: true });
};

// 添加菜单信息
export const addMenu = (params: Menu.ResMenuList) => {
  return http.post<Result>(SYSTEM + `/menu`, params, { noLoading: true });
};

// 修改菜单信息
export const updateMenu = (params: Menu.ResMenuList) => {
  return http.put<Result>(SYSTEM + `/menu`, params, { noLoading: true });
};

// 删除菜单
export const delMenu = (params: number) => {
  return http.delete<Result>(SYSTEM + `/menu/` + params, {}, { noLoading: true });
};

// 查询菜单下拉框
export const getSelectMenu = () => {
  return http.get<Array<Menu.MenuSelect>>(SYSTEM + `/menu/getSelectMenu`, {}, { noLoading: true });
};
