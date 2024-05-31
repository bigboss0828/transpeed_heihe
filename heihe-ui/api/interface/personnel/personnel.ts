import { BaseRes } from "..";

export namespace PERSONNEL {
  export interface ResPersonnelList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编码
    ownerName: string; // 人员姓名
    ownerPhone: string; // 车主电话
    idCard: string; // 身份证号
    icNo: string; // IC卡号
    startTime: Date; // 开始时间
    endTime: Date; // 结束时间
    personLevel: string; // 人员组别（p_person_level的type_key字段）
    icStatus: string; // 驾驶员权限(0-正常 1-禁用)
    departName: string;
    company: string;
  }

  export interface ResPersonnelLevelList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编码
    typeName: string; // 级别名称
    typeKey: string; // 级别编码 见数据字典（0：T1  1：T2  2：T3  3:T4）
  }
}
