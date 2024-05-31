import { BaseRes } from "..";

export namespace WHITE {
  export interface ResWhiteList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编码
    authLane: string; // 授权车道
    authLaneArr: string[];
    obuId: string; // obuid
    plate: string; // 车牌
    plateColor: string; // 车牌颜色
    ownerName: string; // 车主名称
    ownerPhone: string; // 车主电话
    carType: string; // 车辆类型
    whiteType: string; // 白名单类型
    startTime: Date; // 开始时间
    endTime: Date; // 结束时间
    logicDel: string; // 是否逻辑删除
    overdue: string; // 是否过期
    personLevel: string; // 人员组别
    brand: string; // 车辆车型
  }

  export interface ResWhiteTypeList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 车场编码
    typeName: string; // 类型名称
    typeKey: string; // 键
    limitStart: Date; // 限制开始时间
    limitEnd: Date; // 限制结束时间
  }
}
