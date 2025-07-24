import { ReactNode } from 'react';

/**
 * 工具数据类型定义
 */
export interface Tool {
  /** 工具唯一标识 */
  id: string;
  /** 工具名称 */
  name: string;
  /** 工具描述 */
  description: string;
  /** 工具链接 */
  url: string;
  /** 工具图标 */
  icon?: string;
  /** 工具标签 */
  tags: string[];
  /** 所属分类 */
  category: string;
  /** 子分类 */
  subcategory?: string;
  /** 是否为热门工具 */
  featured?: boolean;
  /** 是否免费 */
  free?: boolean;
  /** 工具类型: 免费、付费、freemium */
  pricing?: 'free' | 'paid' | 'freemium';
  /** 是否开源 */
  openSource?: boolean;
  /** 适用平台 */
  platform?: string[];
  /** 支持语言 */
  language?: string[];
  /** 文档链接 */
  docUrl?: string;
  /** 仓库链接 */
  repoUrl?: string;
  /** 详情介绍 */
  details?: string;
  /** 创建时间 */
  createdAt?: string;
  /** 更新时间 */
  updatedAt?: string;
}

/**
 * 工具分类类型定义
 */
export interface Category {
  /** 分类唯一标识 */
  id: string;
  /** 分类名称 */
  name: string;
  /** 分类描述 */
  description?: string;
  /** 分类图标 */
  icon?: string;
  /** 该分类下的工具列表 */
  tools?: Tool[];
  /** 排序权重 */
  order?: number;
  /** 父分类 ID */
  parentId?: string;
  /** 子分类列表 */
  children?: Category[];
}

/**
 * 快速访问链接类型定义
 */
export interface QuickLink {
  /** 链接唯一标识 */
  id: string;
  /** 链接名称 */
  name: string;
  /** 链接地址 */
  url: string;
  /** 链接图标 */
  icon: string;
  /** 链接描述 */
  description?: string;
}

/**
 * 搜索结果类型定义
 */
export interface SearchResult {
  /** 搜索到的工具 */
  tools: Tool[];
  /** 搜索关键词 */
  query: string;
  /** 结果总数 */
  total: number;
  /** 搜索耗时 (毫秒) */
  duration: number;
}

/**
 * 用户偏好设置类型定义
 */
export interface UserPreferences {
  /** 主题模式 */
  theme: 'light' | 'dark' | 'system';
  /** 是否使用紧凑模式 */
  compactMode: boolean;
  /** 默认排序方式 */
  defaultSort: 'name' | 'category' | 'popularity' | 'date';
  /** 收藏的工具 ID 列表 */
  favorites: string[];
  /** 最近访问的工具 ID 列表 */
  recentlyViewed: string[];
}

/**
 * 统计数据类型定义
 */
export interface Statistics {
  /** 总工具数 */
  totalTools: number;
  /** 总分类数 */
  totalCategories: number;
  /** 热门工具数 */
  featuredTools: number;
  /** 免费工具数 */
  freeTools: number;
  /** 最后更新时间 */
  lastUpdated: string;
}

/**
 * API 响应类型定义
 */
export interface ApiResponse<T> {
  /** 是否成功 */
  success: boolean;
  /** 响应数据 */
  data?: T;
  /** 错误信息 */
  error?: string;
  /** 错误代码 */
  code?: number;
  /** 响应时间戳 */
  timestamp: string;
}

/**
 * 分页数据类型定义
 */
export interface PaginatedData<T> {
  /** 数据列表 */
  items: T[];
  /** 当前页码 */
  page: number;
  /** 每页数量 */
  pageSize: number;
  /** 总数量 */
  total: number;
  /** 总页数 */
  totalPages: number;
  /** 是否有下一页 */
  hasNext: boolean;
  /** 是否有上一页 */
  hasPrev: boolean;
}

/**
 * 错误类型定义
 */
export interface AppError {
  /** 错误消息 */
  message: string;
  /** 错误代码 */
  code: string;
  /** 错误详情 */
  details?: Record<string, any>;
  /** 错误堆栈 */
  stack?: string;
}

/**
 * 组件 Props 基础类型
 */
export interface BaseComponentProps {
  /** CSS 类名 */
  className?: string;
  /** 子元素 */
  children?: ReactNode;
  /** 测试 ID */
  testId?: string;
}

/**
 * 工具卡片组件 Props
 */
export interface ToolCardProps extends BaseComponentProps {
  /** 工具数据 */
  tool: Tool;
  /** 是否使用紧凑模式 */
  compact?: boolean;
  /** 点击回调 */
  onClick?: (tool: Tool) => void;
  /** 是否显示收藏按钮 */
  showFavorite?: boolean;
  /** 是否已收藏 */
  isFavorited?: boolean;
  /** 收藏切换回调 */
  onFavoriteToggle?: (tool: Tool) => void;
}

/**
 * 搜索组件 Props
 */
export interface SearchBoxProps extends BaseComponentProps {
  /** 搜索回调 */
  onSearch: (query: string) => void;
  /** 占位符 */
  placeholder?: string;
  /** 初始值 */
  defaultValue?: string;
  /** 是否显示搜索建议 */
  showSuggestions?: boolean;
  /** 搜索建议列表 */
  suggestions?: string[];
  /** 是否正在搜索 */
  loading?: boolean;
} 