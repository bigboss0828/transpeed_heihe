import http from "@/api/index";
import { BLACK } from "@/api/interface/car/black";

/* 分页查询黑名单车辆 */
export const getBlackCarApi = (params: any) => {
  return http.get<BLACK.ResBlackList[]>("/car/black", params);
};

/* 新增黑名单 */
export const addBlackCarApi = (params: BLACK.ResBlackList) => {
  return http.post("/car/black", params);
};

/* 更新黑名单 */
export const updateBlackCarApi = (params: BLACK.ResBlackList) => {
  return http.put("/car/black", params);
};

/* 删除黑名单 */
export const delBlackCarApi = (params: number[]) => {
  return http.delete(`/car/black/${params}`);
};
