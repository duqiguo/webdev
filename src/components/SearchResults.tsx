'use client';

import React, { useState, useEffect } from 'react';
import { allTools, quickLinks } from '@/lib/data';
import ToolCard from './ToolCard';
import type { Tool, QuickLink } from '@/lib/types';

interface SearchResultsProps {
  searchQuery?: string;
}

// 创建一个组件来显示快速链接结果
const QuickLinkCard = ({ link }: { link: QuickLink }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      <div className="p-5">
        <div className="flex items-start space-x-4">
          {link.icon && (
            <div className="text-3xl">{link.icon}</div>
          )}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{link.name}</h3>
              <span className="inline-block px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded">快速访问</span>
            </div>
            {link.description && (
              <p className="text-gray-600 text-sm mb-3">{link.description}</p>
            )}
            <div className="flex items-center mt-1 text-sm text-blue-600">
              <span className="truncate">{link.url}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function SearchResults({ searchQuery = '' }: SearchResultsProps) {
  const [results, setResults] = useState<Tool[]>([]);
  const [quickLinkResults, setQuickLinkResults] = useState<QuickLink[]>([]);
  const [filteredResults, setFilteredResults] = useState<Tool[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [pricingFilter, setPricingFilter] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  // 搜索逻辑
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setQuickLinkResults([]);
      setFilteredResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    
    // 搜索工具
    const toolResults = allTools.filter(tool => {
      const matchesName = tool.name.toLowerCase().includes(query);
      const matchesDescription = tool.description.toLowerCase().includes(query);
      const matchesTags = tool.tags.some(tag => tag.toLowerCase().includes(query));
      const matchesCategory = tool.category.toLowerCase().includes(query);
      
      return matchesName || matchesDescription || matchesTags || matchesCategory;
    });
    
    // 搜索快速链接
    const linkResults = quickLinks.filter(link => {
      const matchesName = link.name.toLowerCase().includes(query);
      const matchesDescription = link.description ? link.description.toLowerCase().includes(query) : false;
      
      return matchesName || matchesDescription;
    });

    setResults(toolResults);
    setQuickLinkResults(linkResults);
  }, [searchQuery]);

  // 筛选和排序
  useEffect(() => {
    let filtered = [...results];

    // 分类筛选
    if (categoryFilter) {
      filtered = filtered.filter(tool => 
        tool.category === categoryFilter || tool.subcategory === categoryFilter
      );
    }

    // 价格筛选
    if (pricingFilter) {
      filtered = filtered.filter(tool => tool.pricing === pricingFilter);
    }

    // 排序
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'pricing':
        filtered.sort((a, b) => {
          const priceOrder = { 'free': 0, 'freemium': 1, 'paid': 2 };
          return (priceOrder[a.pricing as keyof typeof priceOrder] || 3) - 
                 (priceOrder[b.pricing as keyof typeof priceOrder] || 3);
        });
        break;
      default: // relevance
        // 保持搜索相关性排序
        break;
    }

    setFilteredResults(filtered);
  }, [results, categoryFilter, pricingFilter, sortBy]);

  // 获取所有可用的分类选项
  const availableCategories = Array.from(new Set(results.flatMap(tool => [tool.category, tool.subcategory]).filter(Boolean)));
  const availablePricing = Array.from(new Set(results.map(tool => tool.pricing).filter(Boolean)));
  
  // 计算总结果数
  const totalResults = filteredResults.length + quickLinkResults.length;

  if (!searchQuery.trim()) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 搜索结果标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          搜索结果
        </h1>
        <p className="text-gray-600">
          找到 <span className="font-semibold text-blue-600">{totalResults}</span> 个匹配 
          "<span className="font-semibold">{searchQuery}</span>" 的内容
        </p>
      </div>

      {totalResults === 0 ? (
        /* 无结果状态 */
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            未找到相关内容
          </h3>
          <p className="text-gray-600 mb-6">
            试试其他关键词，或者浏览我们的工具分类
          </p>
          <a 
            href="/#tools" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            浏览所有工具
          </a>
        </div>
      ) : (
        <>
          {/* 显示快速链接结果 */}
          {quickLinkResults.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">⚡</span>
                快速访问
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {quickLinkResults.map(link => (
                  <QuickLinkCard key={link.id} link={link} />
                ))}
              </div>
              <div className="border-b border-gray-200 my-8"></div>
            </div>
          )}

          {results.length > 0 && (
            <>
              {/* 工具结果标题 */}
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🛠️</span>
                工具
              </h2>
              
              {/* 筛选和排序工具栏 */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-4">
                  {/* 分类筛选 */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">分类:</label>
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">全部分类</option>
                      {availableCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* 价格筛选 */}
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700">价格:</label>
                    <select
                      value={pricingFilter}
                      onChange={(e) => setPricingFilter(e.target.value)}
                      className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">全部价格</option>
                      {availablePricing.map(pricing => (
                        <option key={pricing} value={pricing}>
                          {pricing === 'free' ? '免费' : pricing === 'paid' ? '付费' : '部分免费'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 排序选项 */}
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">排序:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="relevance">相关性</option>
                    <option value="name">名称</option>
                    <option value="category">分类</option>
                    <option value="pricing">价格</option>
                  </select>
                </div>
              </div>

              {/* 搜索结果网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResults.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>

              {/* 筛选后无结果 */}
              {filteredResults.length === 0 && results.length > 0 && (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">🚫</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    没有符合筛选条件的工具
                  </h3>
                  <p className="text-gray-600 mb-4">
                    尝试调整筛选条件或清除所有筛选
                  </p>
                  <button
                    onClick={() => {
                      setCategoryFilter('');
                      setPricingFilter('');
                      setSortBy('relevance');
                    }}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    清除筛选
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
} 