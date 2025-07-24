'use client';

import { useState, useEffect } from 'react';

const FAVORITE_KEY = 'webdev_favorites';

export function useFavorite() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(FAVORITE_KEY);
      if (stored) {
        try {
          setFavorites(JSON.parse(stored));
        } catch (error) {
          console.error('Failed to parse favorites:', error);
          setFavorites([]);
        }
      }
    }
  }, []);

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      const newFav = [...favorites, id];
      setFavorites(newFav);
      if (typeof window !== 'undefined') {
        localStorage.setItem(FAVORITE_KEY, JSON.stringify(newFav));
      }
    }
  };

  const removeFavorite = (id: string) => {
    const newFav = favorites.filter(f => f !== id);
    setFavorites(newFav);
    if (typeof window !== 'undefined') {
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(newFav));
    }
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const isFavorited = (id: string) => favorites.includes(id);

  return { 
    favorites, 
    addFavorite, 
    removeFavorite, 
    toggleFavorite,
    isFavorited 
  };
} 