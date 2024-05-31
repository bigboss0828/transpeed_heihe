import { ResPage, Result, ResultData } from "@/api/interface/index";
import { Dict } from "@/api/interface/system/dict";
import { SYSTEM } from "@/api/config/servicePort";
import http from "@/api";

// 查询字典表格数据
export const listForDictType = (params: Dict.ReqDictParams) => {
  return http.get<ResPage<Dict.ResDictList>>(SYSTEM + `/dict/listForDictType`, params, { noLoading: true });
};

// 查询字典信息
export const getInfoDictType = (params: number) => {
  return http.get<ResultData>(SYSTEM + `/dict/` + params, {}, { noLoading: true });
};

// 添加字典信息
export const addDictType = (params: Dict.ResDictList) => {
  return http.post<Result>(SYSTEM + `/dict`, params, { noLoading: true });
};

// 修改字典信息
export const updateDictType = (params: Dict.ResDictList) => {
  return http.put<Result>(SYSTEM + `/dict`, params, { noLoading: true });
};

// 删除字典
export const delDictType = (params: number) => {
  return http.delete<Result>(SYSTEM + `/dict/` + params, {}, { noLoading: true });
};

// 根据字典类型查询字典数据
export const getDictData = (params: Object) => {
  return http.get<Array<Dict.ResDictDataList>>(SYSTEM + `/dict/getDictData/` + params, {}, { noLoading: true });
};
