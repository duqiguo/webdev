'use client';

import React, { useState, useEffect, useRef } from 'react';
import { allTools, quickLinks } from '@/lib/data';
import type { Tool, QuickLink } from '@/lib/types';

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
}

// 合并工具和快速链接的类型
type SearchItem = Tool | (QuickLink & { isQuickLink: boolean });

export default function SearchBox({ placeholder = "搜索工具/模板/资讯...", className = "" }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // 实时搜索建议
  useEffect(() => {
    if (query.trim()) {
      // 搜索工具
      const filteredTools = allTools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );

      // 搜索快速链接
      const filteredLinks = quickLinks.filter(link => 
        link.name.toLowerCase().includes(query.toLowerCase()) ||
        (link.description && link.description.toLowerCase().includes(query.toLowerCase()))
      ).map(link => ({
        ...link,
        isQuickLink: true, // 添加标记以区分类型
        tags: [] // 为了满足Tool接口要求添加空tags
      }));

      // 合并结果并限制显示数量
      const combined = [...filteredLinks, ...filteredTools].slice(0, 6);
      setSuggestions(combined);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  // 点击外部关闭建议
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 高亮匹配文本
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="bg-yellow-200 text-yellow-900 font-medium">
          {part}
        </span>
      ) : part
    );
  };

  // 处理搜索提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // 跳转到搜索结果页面或处理搜索逻辑
      window.location.href = `/?search=${encodeURIComponent(query.trim())}`;
    }
  };

  // 选择建议项
  const handleSuggestionClick = (item: SearchItem) => {
    setQuery('');
    setShowSuggestions(false);
    
    // 根据类型处理不同的点击行为
    if ('isQuickLink' in item) {
      // 如果是快速链接，直接打开URL
      window.open(item.url, '_blank');
    } else {
      // 如果是工具，跳转到工具详情页
      window.location.href = `/tool/${item.id}`;
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => query && setShowSuggestions(true)}
            placeholder={placeholder}
            className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </form>

      {/* 搜索建议下拉框 */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          <div className="py-2">
            {suggestions.map((item, index) => {
              const isQuickLink = 'isQuickLink' in item;
              return (
                <button
                  key={item.id + (isQuickLink ? '-link' : '') + '-' + index}
                  onClick={() => handleSuggestionClick(item)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && (
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm flex items-center">
                        {highlightMatch(item.name, query)}
                        {isQuickLink && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded">快速访问</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {highlightMatch(item.description || '', query)}
                      </div>
                      {!isQuickLink && (item as Tool).tags && (item as Tool).tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {(item as Tool).tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* 查看更多结果 */}
          {query && (
            <div className="border-t border-gray-100 px-4 py-3">
              <button
                onClick={() => handleSubmit(new Event('submit') as any)}
                className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                查看"{query}"的所有搜索结果
              </button>
            </div>
          )}
        </div>
      )}

      {/* 无结果提示 */}
      {showSuggestions && query && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="px-4 py-6 text-center">
            <div className="text-gray-400 mb-2">
              <svg className="mx-auto h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
            </div>
            <p className="text-sm text-gray-500">未找到相关工具</p>
            <p className="text-xs text-gray-400 mt-1">试试其他关键词</p>
          </div>
        </div>
      )}
    </div>
  );
} 