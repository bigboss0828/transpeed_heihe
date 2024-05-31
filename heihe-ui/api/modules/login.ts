import { Login } from "@/api/interface/system/login";
import { Result } from "@/api/interface/index";
import http from "@/api";

/**
 * @name 登录模块
 */
export const captchaApi = () => {
  return http.get<Login.Captcha>(`/captcha`, {}, { noLoading: true });
};

// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLoginMsg>(`/login`, params, { noLoading: true });
};

// 获取菜单列表
export const getUserInfo = () => {
  return http.get<Login.AuthMenu>(`/userInfo`, {}, { noLoading: true });
};

// 用户退出登录
export const logoutApi = () => {
  return http.get<Result>(`/logout`);
};
