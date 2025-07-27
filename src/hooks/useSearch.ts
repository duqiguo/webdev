import { useState, useEffect, useMemo } from 'react';
import type { Tool } from '@/lib/types';

/**
 * 搜索Hook
 * 支持关键词搜索、标签筛选、平台筛选等功能
 */
export function useSearch(tools: Tool[], searchFields: (keyof Tool)[] = ['name', 'description'], initialQuery = '') {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isSearching, setIsSearching] = useState(false);

  // 搜索结果
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return tools;
    }

    const query = searchQuery.toLowerCase().trim();
    return tools.filter(tool => {
      return searchFields.some(field => {
        const value = tool[field];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(query);
        }
        if (Array.isArray(value)) {
          return value.some(item => 
            typeof item === 'string' && item.toLowerCase().includes(query)
          );
        }
        return false;
      });
    });
  }, [tools, searchQuery, searchFields]);

  // 设置搜索查询
  const handleSearch = (query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    // 模拟搜索延迟
    setTimeout(() => {
      setIsSearching(false);
    }, 100);
  };

  return {
    searchQuery,
    searchResults,
    isSearching,
    setSearchQuery: handleSearch
  };
}

/**
 * 高级搜索Hook
 * 支持多维度筛选
 */
export function useAdvancedSearch(tools: Tool[]) {
  const [filters, setFilters] = useState({
    keyword: '',
    category: '',
    subcategory: '',
    tags: [] as string[],
    platform: [] as string[],
    pricing: '' as 'free' | 'paid' | 'freemium' | '',
    openSource: null as boolean | null
  });

  // 筛选结果
  const filteredResults = useMemo(() => {
    return tools.filter(tool => {
      // 关键词筛选
      if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        const matchesKeyword = 
          tool.name.toLowerCase().includes(keyword) ||
          tool.description.toLowerCase().includes(keyword) ||
          tool.tags.some(tag => tag.toLowerCase().includes(keyword));
        if (!matchesKeyword) return false;
      }

      // 分类筛选
      if (filters.category && tool.category !== filters.category) {
        return false;
      }

      // 子分类筛选
      if (filters.subcategory && tool.subcategory !== filters.subcategory) {
        return false;
      }

      // 标签筛选
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(tag => 
          tool.tags.some(toolTag => toolTag.toLowerCase().includes(tag.toLowerCase()))
        );
        if (!hasMatchingTag) return false;
      }

      // 平台筛选
      if (filters.platform.length > 0) {
        const hasMatchingPlatform = filters.platform.some(platform => 
          tool.platform?.some(toolPlatform => 
            toolPlatform.toLowerCase().includes(platform.toLowerCase())
          )
        );
        if (!hasMatchingPlatform) return false;
      }

      // 价格筛选
      if (filters.pricing && tool.pricing !== filters.pricing) {
        return false;
      }

      // 开源筛选
      if (filters.openSource !== null && tool.openSource !== filters.openSource) {
        return false;
      }

      return true;
    });
  }, [tools, filters]);

  // 更新筛选条件
  const updateFilter = (key: keyof typeof filters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 重置筛选条件
  const resetFilters = () => {
    setFilters({
      keyword: '',
      category: '',
      subcategory: '',
      tags: [],
      platform: [],
      pricing: '',
      openSource: null
    });
  };

  // 获取所有可用的筛选选项
  const getFilterOptions = () => {
    const categories = Array.from(new Set(tools.map(tool => tool.category))).filter(Boolean);
    const subcategories = Array.from(new Set(tools.map(tool => tool.subcategory))).filter(Boolean);
    const tags = Array.from(new Set(tools.flatMap(tool => tool.tags))).filter(Boolean);
    const platforms = Array.from(new Set(tools.flatMap(tool => tool.platform || []))).filter(Boolean);
    const pricingOptions = Array.from(new Set(tools.map(tool => tool.pricing))).filter(Boolean);

    return {
      categories,
      subcategories,
      tags,
      platforms,
      pricingOptions
    };
  };

  return {
    filters,
    filteredResults,
    updateFilter,
    resetFilters,
    getFilterOptions
  };
} 