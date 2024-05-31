import { BaseRes } from "..";

export namespace INRECORD {
  export interface ResInRecordList extends BaseRes {
    id: number; // 主键ID
    txId: string; // 事务id
    parkCode: string; // 停车场编码
    laneCode: string; // 车道编码
    laneName: string; // 车道名称
    plate: string; // 抓拍机识别车牌号
    amendCn: string; // 确认车牌号
    plateColor: string; // 车牌颜色（0：蓝色车牌 1：绿色车牌 ...）
    icNO: string;
    obuId: string;
    voucher: string; // 凭证号
    voucherType: string; // 凭证类型
    triggerTime: Date; // 触发开始时间
    captureName: string; // 上传的图片名
    url: string; // 图片url地址
    letGoCode: string; // 放行方式
    outType: string; // 出场类型：值为三个一个是未出场，一个是车队模式，最后一个是已出场
    listId: number; // 名单主键
    reserv: string; // 过车说明（备注）
    carType: string; // 车辆类型（0：小车 1：中型车 2：大型车）
    whiteType: string; // 白名单类型
    ownerName: string; // 驾驶员姓名
    departName: string;
    company: string;
  }
}
