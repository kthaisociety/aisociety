"use client";

import { useEffect } from "react";

export function useCarousel(
  currentIndex: number,
  onIndexChange: (index: number) => void,
  totalItems: number,
  autoPlayInterval: number = 5000
) {
  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      onIndexChange((currentIndex + 1) % totalItems);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, onIndexChange, totalItems, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange((currentIndex - 1 + totalItems) % totalItems);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange((currentIndex + 1) % totalItems);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onIndexChange, totalItems]);

  // Handle dot click navigation
  const handleDotClick = (index: number) => {
    onIndexChange(index);
  };

  // Handle drag/swipe navigation
  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous
      onIndexChange((currentIndex - 1 + totalItems) % totalItems);
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next
      onIndexChange((currentIndex + 1) % totalItems);
    }
  };

  return {
    handleDotClick,
    handleDragEnd,
  };
}

