import { BaseRes } from "@/api/interface/index";

export namespace Dict {
  // 字典类型对象
  export interface ResDictList extends BaseRes {
    // 字典类型ID
    dictTypeId: number;
    // 字典类型名称
    dictTypeName: string;
    // 字典类型
    dictType: string;
    // 字典类型状态
    dictTypeStatus: number;
    // 字典值
    dictDataList: Array<ResDictDataList>;
  }
  export interface ReqDictParams {
    // 字典类型名称
    dictTypeName: string;
    // 字典类型
    dictType: string;
    // 字典类型状态
    dictTypeStatus: number;
  }
  export interface ResDictDataList {
    // 主键ID
    // dictDataId: number;
    // 字典标签
    dictDataLabel: string;
    // 字典键值
    dictDataValue: number;
    // 字典类型
    // dictType: string;
    // 字典排序
    orderNum: number;
  }
}
