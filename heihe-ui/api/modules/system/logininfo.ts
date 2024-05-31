import { ResPage } from "@/api/interface/index";
import { Logininfo } from "@/api/interface/system/logininfo";
import { SYSTEM } from "@/api/config/servicePort";
import http from "@/api";

// 查询登录日志表格数据
export const listForLoginInfo = (params: Logininfo.ReqLogininfoParams) => {
  return http.get<ResPage<Logininfo.ResLogininfoList>>(SYSTEM + `/loginInfo/listForLoginInfo`, params, { noLoading: true });
};
