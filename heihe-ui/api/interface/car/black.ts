import { BaseRes } from "..";

export namespace BLACK {
  export interface ResBlackList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编码
    obuId: string; // obu
    plate: string; // 车牌
    plateColor: string; // 车牌颜色
    carType: string; // 车辆类型
    ownerName: string; // 车主名称
    ownerPhone: string; // 车主电话
    startTime: Date; // 开始时间
    endTime: Date; // 结束时间
    reason: string; // 原因
  }
}
