import http from "@/api/index";
import { INRECORD } from "@/api/interface/record/inRecord";

export const getInRecordListApi = (params: any) => {
  return http.get<INRECORD.ResInRecordList[]>("/record/in/list", params);
};

export const exportInRecordApi = (params: any) => {
  return http.download("/record/in/export", params);
};
