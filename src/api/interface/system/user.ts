import { BaseRes } from "@/api/interface/index";

export namespace User {
  // 用户对象
  export interface ResUserList extends BaseRes {
    // 主键ID
    userId: number;
    //用户密码
    password: string;
    // 登陆账号
    userName: string;
    // 用户昵称
    nickName: string;
    // 用户当前车场
    currentPark: string;
    // 用户类型（0：超级管理员 1：车场管理员 2：单位管理员）
    userType: number;
    // 用户来源（0：后台用户 1：移动端用户）
    userSourceType: number;
    // 用户电话
    phone: string;
    //账号状态（0：正常 1：停用 ）
    userStatus: number;
    // 最后登录时间
    lastLoginTime: Date;
    // 用户角色Id集合
    roleIdList: Array<number>;
  }
  // 用户列表查询
  export interface ReqUserParams {
    // 登陆账号
    userName: string;
    // 用户昵称
    nickName: string;
    //账号状态（0：正常 1：停用 ）
    userStatus: number;
  }
  // 用户修改密码
  export interface ReqUserPasswordParams {
    // 原密码
    oldPassword: string;
    // 新密码
    newPassword: string;
    // 用户ID
    userId: number;
  }
}
