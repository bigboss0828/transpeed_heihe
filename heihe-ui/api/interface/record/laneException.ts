import { BaseRes } from "..";

export namespace LANEEXCEPTION {
  export interface ResLaneExceptionList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编码
    plate: string; // 车牌号码
    txId: string; // 事物ID
    inId: number; // 进场表id (nullable)
    inTime: Date; // 进场时间 (nullable)
    inUrl: string; // 进场url
    voucher: string; // 凭证号
    voucherType: string; // 凭证类型
    outId: number; // 出场表id (nullable)
    outTime: Date; // 出场时间 (nullable)
    outUrl: string; // 出场的url
    parkingTime: number; // 停留时间（单位：分）
    exceptionType: string; // 异常类型 (0：超时停车, 1：无入场记录, 2：无出场纪录, 3：大额订单)
    carType: string; // 车类型
    deleted: string; // 逻辑删除 (0:已删除, 1:未删除)
  }
}
