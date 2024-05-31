import http from "@/api/index";
import { PERSONNEL } from "@/api/interface/personnel/personnel";

/* 分页获取人员列表 */
export const getPersonnelListApi = (params: any) => {
  return http.get<PERSONNEL.ResPersonnelList[]>("/personnel/list", params);
};

/* 新增人员 */
export const addPersonnelApi = (params: PERSONNEL.ResPersonnelList) => {
  return http.post("/personnel/add", params);
};

/* 编辑人员信息 */
export const updatePersonnelApi = (params: PERSONNEL.ResPersonnelList) => {
  return http.put("/personnel/update", params);
};

/* 删除人员组别 */
export const delPersonnelApi = (params: number[]) => {
  return http.delete(`/personnel/${params}`);
};

/* 获取人员组别列表 */
export const getPersonnelLevelListApi = () => {
  return http.get<PERSONNEL.ResPersonnelLevelList[]>("/personnel/level/list");
};

/* 新增人员组别 */
export const addPersonnelLevelApi = (params: PERSONNEL.ResPersonnelLevelList) => {
  return http.post("/personnel/level/add", params);
};

export const updatePersonnelLevelApi = (params: PERSONNEL.ResPersonnelLevelList) => {
  return http.put("/personnel/level/update", params);
};

/* 删除人员组别 */
export const delPersonnelLevelApi = (params: number[]) => {
  return http.delete(`/personnel/level/${params}`);
};

export const downLoadTemplateApi = () => {
  return http.download("/personnel/exportTemplate");
};
