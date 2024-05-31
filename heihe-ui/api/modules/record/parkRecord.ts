import http from "@/api/index";
import { PARKRECORD } from "@/api/interface/record/parkRecord";

export const getParkRecordListApi = (params: any) => {
  return http.get<PARKRECORD.ResParkRecordList>("/park/record/list", params);
};

export const exportRecordApi = (params: any) => {
  return http.download("/park/record/export", params);
};
