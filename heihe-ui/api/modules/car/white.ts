import http from "@/api/index";
import { WHITE } from "@/api/interface/car/white";

/* 分页白名单车 */
export const getWhiteCarList = (params: any) => {
  return http.get<WHITE.ResWhiteList[]>("/car/white/list", params);
};

/* 新增白名单车辆 */
export const addWhiteCar = (params: WHITE.ResWhiteList) => {
  return http.post("/car/white/add", params);
};

/* 修改白名单车辆 */
export const updateWhiteCarApi = (params: WHITE.ResWhiteList) => {
  return http.put("/car/white/update", params);
};

/* 删除白名单车辆 */
export const delWhiteCarApi = (params: number[]) => {
  return http.delete(`/car/white/${params}`);
};

/* 查询所有白名单类型 */
export const getAllWhiteTypeList = () => {
  return http.get<WHITE.ResWhiteTypeList[]>("/car/white/type/allList");
};

/* 分页查询白名单类型 */
export const getWhiteTypeListApi = (params: any) => {
  return http.get<WHITE.ResWhiteTypeList[]>("/car/white/type/list", params);
};

/* 新增白名单类型 */
export const addWhiteTypeApi = (params: WHITE.ResWhiteTypeList) => {
  return http.post("/car/white/type/add", params);
};

/* 更新白名单类型 */
export const updateWhiteTypeApi = (params: WHITE.ResWhiteTypeList) => {
  return http.put("/car/white/type/update", params);
};

/* 删除白名单类型 */
export const delWhiteTypeApi = (params: number[]) => {
  return http.delete(`/car/white/type/${params}`);
};

export const downLoadTemplateApi = () => {
  return http.download("/car/white/exportTemplate");
};
