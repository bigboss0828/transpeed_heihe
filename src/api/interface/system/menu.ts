import { BaseRes } from "@/api/interface/index";

export namespace Menu {
  // 菜单对象
  export interface ResMenuList extends BaseRes {
    // 主键ID
    menuId: number;
    // 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选)
    menuName: string;
    // 父级ID
    parentId: number;
    // 显示顺序
    orderNum: number;
    // 菜单类型（0目录 1菜单 2按钮）
    menuType: number;
    // 权限字符
    perms: string;
    // 路由访问路径
    path: string;
    // 视图文件路径
    component: string;
    // 路由标题
    title: string;
    // 路由外链时填写的访问地址
    isLink: number;
    // 是否在菜单中隐藏 (通常列表详情页需要隐藏)
    isHide: number;
    // 当前路由是否缓存
    isKeepAlive: number;
    // 菜单是否固定在标签页中 (首页通常是固定项)
    isAffix: number;
    // 菜单是否全屏 (示例：数据大屏页面)
    isFull: number;
    // 图标
    icon: string;
  }
  // 表格查询条件
  export interface ReqMenuParams {
    // 路由标题
    title: string;
  }
  // 菜单下拉框
  export interface MenuSelect {
    // 值 菜单ID
    value: number;
    // 标签 菜单title
    label: string;
    // 菜单类型（选择父级时过滤掉按钮）
    menuType: number;
    // 子菜单
    children: Array<MenuSelect>;
  }
}
