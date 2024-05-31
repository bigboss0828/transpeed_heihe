import http from "@/api/index";
import { LANEEXCEPTION } from "@/api/interface/record/laneException";

/* 分页查询车道异常记录 */
export const getLaneExceptionApi = (params: any) => {
  return http.get<LANEEXCEPTION.ResLaneExceptionList[]>("/record/laneExcept/list", params);
};
