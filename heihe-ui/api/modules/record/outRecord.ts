import http from "@/api/index";
import { OUTRECORD } from "@/api/interface/record/outRecord";

export const getOutRecordListApi = (params: any) => {
  return http.get<OUTRECORD.ResOutRecordList[]>("/record/out/list", params);
};

export const exportOutRecord = (params: any) => {
  return http.download("/record/out/export", params);
};
