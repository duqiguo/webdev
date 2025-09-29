'use client';

import React from 'react';
import type { Tool } from '@/lib/types';
import { useRouter } from 'next/navigation';
import FavoriteButton from './FavoriteButton';

interface ToolCardProps {
  tool: Tool;
  compact?: boolean;
  showFavorite?: boolean;
}

export default function ToolCard({ tool, compact = true, showFavorite = true }: ToolCardProps) {
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/tool/${tool.id}`);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const getTagColor = (tag: string) => {
    if (tag.includes('🔥') || tag.includes('热门')) {
      return 'bg-red-50 text-red-600 border-red-200';
    }
    if (tag.includes('免费') || tag === 'free') {
      return 'bg-green-50 text-green-600 border-green-200';
    }
    if (tag.includes('新兴')) {
      return 'bg-blue-50 text-blue-600 border-blue-200';
    }
    if (tag.includes('推荐')) {
      return 'bg-purple-50 text-purple-600 border-purple-200';
    }
    if (tag.includes('SEO')) {
      return 'bg-yellow-50 text-yellow-600 border-yellow-200';
    }
    return 'bg-gray-50 text-gray-600 border-gray-200';
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded p-2.5 hover:shadow-sm transition-all duration-200 cursor-pointer relative group min-h-[120px] flex flex-col"
      onClick={handleCardClick}
    >
      <div className="flex items-start gap-1.5 mb-1.5">
        {tool.icon && (
          <span className="text-lg flex-shrink-0">{tool.icon}</span>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight truncate">
            {tool.name}
          </h3>
          {tool.openSource && (
            <span className="inline-block mt-1 text-xs bg-green-50 text-green-600 border border-green-200 rounded px-1.5 py-0.5">
              开源
            </span>
          )}
        </div>
        {showFavorite && (
          <div className="ml-1.5 flex-shrink-0">
            <FavoriteButton toolId={tool.id} />
          </div>
        )}
      </div>

      <p className="text-gray-600 text-xs mb-2 line-clamp-2 leading-relaxed flex-1">
        {tool.description}
      </p>

      {tool.tags && tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {tool.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-1.5 py-0.5 rounded border font-medium whitespace-nowrap ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
          {tool.tags.length > 2 && (
            <span className="text-xs text-gray-500 whitespace-nowrap">+{tool.tags.length - 2}</span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between mt-auto">
        {tool.pricing && (
          <span
            className={`text-xs px-1.5 py-0.5 rounded border font-medium whitespace-nowrap ${
              tool.pricing === 'free'
                ? 'bg-green-50 text-green-600 border-green-200'
                : tool.pricing === 'paid'
                ? 'bg-red-50 text-red-600 border-red-200'
                : 'bg-yellow-50 text-yellow-600 border-yellow-200'
            }`}
          >
            {tool.pricing === 'free' ? '免费' : tool.pricing === 'paid' ? '付费' : '部分免费'}
          </span>
        )}

        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium whitespace-nowrap"
        >
          访问
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
} 