// 请求响应参数（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 对象基类
export interface BaseRes {
  // 创建人
  createBy: string;
  // 创建时间
  createTime: Date;
  // 更新人
  updateBy: string;
  // 更新时间
  updateTime: Date;
  // 备注
  remark: string;
}

// 查询时间基类
export interface BaseReq {
  // 开始时间
  beginTime: string;
  // 结束时间
  endTime: string;
}

// 字典类型
export interface DictType {
  label: string;
  value: number;
}
