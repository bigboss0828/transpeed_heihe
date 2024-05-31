import { BaseRes } from "..";

export namespace OUTRECORD {
  export interface ResOutRecordList extends BaseRes {
    id: number; // 主键ID
    txId: string; // 事务id
    parkCode: string; // 停车场编码
    laneCode: string; // 车道编码
    laneName: string; // 车道名称
    plate: string; // 抓拍机识别车牌号
    amendCn: string; // 确认车牌号
    plateColor: string; // 车牌颜色
    voucher: string; // 凭证号
    voucherType: string; // 凭证类型
    triggerTime: Date; // 触发开始时间
    captureName: string; // 上传的图片名
    url: string; // 图片url地址
    letGoCode: string; // 放行方式
    totalPay: number; // 总计金额（单位：分）
    actualPay: number; // 实付金额（单位：分）
    listId: number; // 名单主键
    inRecordId: number; // 入场ID
    reserv: string; // 过车说明
    carType: string; // 车辆类型
    whiteType: string; // 白名单类型
    icNO: string;
    obuId: string;
    ownerName: string; // 驾驶员姓名
    departName: string;
    company: string;
  }
}
