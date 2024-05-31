import { BaseRes, BaseReq } from "@/api/interface/index";

export namespace Logininfo {
  // 角色对象
  export interface ResLogininfoList extends BaseRes {
    // 主键ID
    loginInfoId: number;
    // 用户名称
    userName: string;
    // 登录状态（0:登录成功  1:登录失败）
    loginStatus: number;
    // 登录时间
    loginTime: Date;
    // 浏览器
    loginBrowser: string;
    // 操作系统
    loginOs: string;
  }
  export interface ReqLogininfoParams extends BaseReq {
    // 用户名称
    userName: string;
    // 登录状态（0:登录成功  1:登录失败）
    loginStatus: number;
    // 表格渲染登录时间
    loginTime: Array<string>;
  }
}
