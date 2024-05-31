// 登录模块
export namespace Login {
  // 登录参数
  export interface ReqLoginForm {
    // 用户名
    username: string;
    // 密码
    password: string;
    // 验证码
    code: string;
    // 唯一标识
    uuid: string;
    // 验证码
    base64: string;
  }
  // 登录之后返回参数
  export interface ResLoginMsg {
    // token
    token: string;
    // 用户名
    username: string;
    // 用户类型
    userType: number;
    // 用户ID
    userId: number;
  }
  // 验证码
  export interface Captcha {
    // 验证码
    base64: string;
    // 唯一标识
    uuid: string;
  }
  // 权限（菜单和按钮权限）
  export interface AuthMenu {
    // 按钮
    btnPerms: AuthBtn;
    // 菜单
    router: Array<any>;
    // 登录用户
    loginUser: ResLoginMsg;
  }
  export interface AuthBtn {
    [key: string]: string[];
  }
}
