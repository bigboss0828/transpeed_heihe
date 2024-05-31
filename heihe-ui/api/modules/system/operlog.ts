import { ResPage } from "@/api/interface/index";
import { OperLog } from "@/api/interface/system/operlog";
import { SYSTEM } from "@/api/config/servicePort";
import http from "@/api";

// 查询操作日志表格数据
export const listForOperLog = (params: OperLog.ReqOperLogParams) => {
  return http.get<ResPage<OperLog.ResOperLogList>>(SYSTEM + `/operlog/listForOperLog`, params, { noLoading: true });
};
