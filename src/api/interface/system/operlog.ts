import { BaseRes, BaseReq } from "@/api/interface/index";

export namespace OperLog {
  // 角色对象
  export interface ResOperLogList extends BaseRes {
    // 日志主键
    operId: number;
    // 模块标题
    title: string;
    // 业务类型
    businessType: number;
    // 方法名称
    method: string;
    // 请求方式
    requestMethod: string;
    // 操作人员
    operName: string;
    // 请求URL
    operUrl: string;
    // 请求参数
    operParam: string;
    // 返回参数
    jsonResult: string;
    // 操作状态（0:成功  1:失败）
    operStatus: number;
    // 错误消息
    errorMsg: string;
    // 操作时间
    operTime: Date;
  }
  export interface ReqOperLogParams extends BaseReq {
    // 模块标题
    title: string;
    // 业务类型
    businessType: number;
    // 操作人员
    operName: string;
    // 操作状态（0:成功  1:失败）
    operStatus: number;
    // 操作时间
    operTime: Array<string>;
  }
}
