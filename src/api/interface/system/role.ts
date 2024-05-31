import { BaseRes } from "@/api/interface/index";

export namespace Role {
  // 角色对象
  export interface ResRoleList extends BaseRes {
    // 主键ID
    roleId: number;
    // 角色名称
    roleName: string;
    // 角色状态（0：正常 1：停用）
    roleStatus: number;
    // 角色类型（0：超级管理员  1：车场管理员）
    roleType: number;
    // 授权菜单
    menuIdList: Array<number>;
  }
  export interface ReqRoleParams {
    // 角色名称
    roleName: string;
    // 角色状态（0：正常 1：停用）
    roleStatus: number;
    // 角色类型（0：超级管理员  1：车场管理员）
    roleType: number;
  }
}
