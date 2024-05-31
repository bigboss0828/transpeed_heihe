export namespace PARKRECORD {
  export interface ResParkRecordList {
    // 主键ID
    id: number;
    // 事务id
    txId: string;
    // 停车场编码
    parkCode: string;
    // 停车场名称
    parkName: string;
    // 车牌号码
    plate: string;
    // 车牌颜色0：蓝色车牌1：绿色车牌2：黄色车牌3：黑色车牌4：白色车牌5：红色车牌6：渐变绿色7：黄绿双拼8：蓝白渐变-1：未确定
    plateColor: number;
    // 进场时间
    inTime: Date;
    // 出场时间
    outTime: Date;
    // 进场url
    inUrl: string;
    // 出场url
    outUrl: string;
    // 凭证号
    voucher: string;
    // 凭证类型
    voucherType: string;
    // 白名单类型
    whiteType: string;
    // 进场车道code
    inLaneCode: string;
    // 入口车道名称
    inLaneName: string;
    // 出口车道code
    outLaneCode: string;
    // 出口车道名称
    outLaneName: string;
    // 备注
    remark: string;
    // 人员组别
    personLevel: string;
    // 停车时长
    parkTime: number;
    ownerName: string;
    departName: string;
    company: string;
  }
}
