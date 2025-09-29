"use client";

import React from 'react';
import { useFavorite } from '@/hooks/useFavorite';

interface FavoriteButtonProps {
  toolId: string;
  className?: string;
}

export default function FavoriteButton({ toolId, className = '' }: FavoriteButtonProps) {
  const { isFavorited, toggleFavorite } = useFavorite();
  const active = isFavorited(toolId);

  return (
    <button
      aria-label={active ? '取消收藏' : '加入收藏'}
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(toolId);
      }}
      className={`inline-flex items-center justify-center rounded-full border px-2 py-1 text-xs transition-colors ${
        active
          ? 'bg-yellow-100 text-yellow-700 border-yellow-200'
          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
      } ${className}`}
    >
      <svg
        className="w-4 h-4 mr-1"
        viewBox="0 0 24 24"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {active ? '已收藏' : '收藏'}
    </button>
  );
}
