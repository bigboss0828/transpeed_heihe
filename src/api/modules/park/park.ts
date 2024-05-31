import http from "@/api";
import { PARK } from "@/api/interface/park/park";

/* 分页查询停车场 */
export const getListForParkApi = (params: any) => {
  return http.get<PARK.ResParkList[]>(`/park/park/list`, params);
};

/* 更新停车场 */
export const updateParkApi = (params: PARK.ResParkList) => {
  return http.put("/park/park/update", params);
};

/* 分页查询车道列表 */
export const getListForParkLaneApi = (params: any) => {
  return http.get<PARK.ResParkLaneList[]>("/park/lane/list", params);
};

/* 查询所有的车道 */
export const getAllParkLaneList = () => {
  return http.get<PARK.ResParkLaneList[]>("/park/lane/allList");
};

/* 新增车道 */
export const addParkLaneApi = (params: PARK.ResParkLaneList) => {
  return http.post("/park/lane/add", params);
};

/* 编辑车道 */
export const updateParkLaneApi = (params: PARK.ResParkLaneList) => {
  return http.put("/park/lane/update", params);
};

/* 删除车道 */
export const delParkLaneApi = (params: number[]) => {
  return http.delete(`/park/lane/${params}`);
};

/* 获取停车场设置 */
export const getParkSettingApi = (parkCode: string) => {
  return http.get<PARK.ResParkSettingList>(`/park/setting/${parkCode}`);
};

/* 更新停车设置 */
export const updateParkSettingApi = (params: PARK.ResParkSettingList) => {
  return http.put("/park/setting/update", params);
};

/* 新增停车场设置 */
export const addParkSetting = (params: PARK.ResParkSettingList) => {
  return http.post("/park/setting/add", params);
};
