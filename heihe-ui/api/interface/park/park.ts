import { BaseRes } from "..";

export namespace PARK {
  export interface ResParkList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编号（PV21001）
    parkKey: string; // 停车场密钥
    parkName: string; // 停车场名称
    parkAddress: string; // 停车场地址
    isVirtual: string; // 是否虚拟停车场 0：是 1：否 （默认否）
    isInner: string; // 是否是场中场 0：是 1：否 （默认否）
    isCharge: string; // 是否收费 0：是 1：否 （默认否）
    chargeWay: string; // 收费方式 (英文逗号分隔  对应字典信息charge_way)
    parentParkCode: string; // 实际停车场CODE
    carSpace: string; // 是否开启车位 0：开启 1：不开启
    isMultiple: string; // 是否开启多车多位 0：开启 1：不开启
    isCoupon: string; // 是否开启优惠券 0：是 1：否 （默认否）
    log: number; // 经度（百度）
    lat: number; // 纬度（百度）
    totalSpace: number; // 总车位数
    tempSpace: number; // 临时车位数
    fixedSpace: number; // 固定车位数
    entranceNum: number; // 入口数
    exitNum: number; // 出口数
    freeSpace: number; // 初始化当前余位数
    contact: string; // 联系人
    phone: string; // 联系电话
    sendRecord: string; // 是否需要推送进出场记录，0需要，1不需要
    noChargeTempOut: string; // 不收费停车场，临时车是否允许出场，0允许，1不允许
    mode: string; // 模式 0-正常模式 1-维护模式
  }

  export interface ResParkLaneList extends BaseRes {
    id: number; // 主键ID
    parkCode: string; // 停车场编码
    laneCode: string; // 车道编码
    laneName: string; // 车道名称
    log: number; // 经度（百度）
    lat: number; // 纬度（百度）
    isInner: string; // 是否为场内车道
    laneType: string; // 车道类型
    laneIp: string; // 车控器IP
    laneIpBackups: string; // 车控器IP（备份）
    payDeviceNo: string; // 支付设备号
    ledTextIn: string; // 车辆入场LED显示内容
    ledTextOut: string; // 车辆出场LED显示内容
    ledTextPay: string; // 车辆缴费LED显示内容
    ledTextBan: string; // 车辆禁止LED显示内容
    isTempCarIn: string; // 临时车是否让进
  }

  export interface ResParkSettingList extends BaseRes {
    // 主键ID
    id: number;
    // 停车场编码
    parkCode: string;
    // 临时车是否允许进场
    isTempCarIn: string;
    // 临时车允许进场开始时间 (HH:mm:ss)
    tempCarInStartTime: string;
    // 临时车允许进场结束时间 (HH:mm:ss)
    tempCarInEndTime: string;
    // 是否允许军警车进场
    isPatrolIn: string;
    // 军车警车是否免费 (不免费按临时车处理)
    isFreePatrol: string;
    // 车位满时临时车是否能进
    spaceFullTempCarIsIn: string;
    // 车位满时试验车辆是否能进
    spaceFullTestCarIsIn: string;
    // 车位满时公务车是否可进
    spaceFullOfficialCarIsIn: string;
    // 车位满时维修车是否可进
    spaceFullRepairCarIsIn: string;
    // 车位满时Demo是否可进
    spaceFullDemoCarIsIn: string;
    // 临时车是否占车位
    isTempCarSpace: string;
    // 试验车是否占车位
    isTestCarSpace: string;
    // 公务车是否占车位
    isOfficialCarSpace: string;
    // 维修车是否占车位
    isRepairCarSpace: string;
    // Demo是否占车位
    isDemoCarSpace: string;
    // 是否模糊匹配白名单进场
    isFuzzyMatchingIn: string;
    // 是否模糊匹配白名单出场
    isFuzzyMatchingOut: string;
    // 无入场记录是否放行
    isNoInRecordPass: string;
    // 无入场记录固定收费 单位:分
    noInRecordCharge: number;
    // 支付后多久过期 单位:分钟
    payExpireTime: number;
    // 月租(单位：分)
    monthlyRent: number;
    // 本地车前缀 (例：苏E,苏U   英文逗号分隔)
    platePrefix: string;
    // 是否提示有效期剩余天数
    isValidityPeriod: string;
    // 过期提示
    overdueText: string;
    // 过期提示时间(提前多少天进行LED回显过期提示)
    overdueTime: number;
  }
}
