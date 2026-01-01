import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CompareItem {
  id: string;
  name: string;
  image: string;
  price?: number;
  category?: string;
  description?: string;
  [key: string]: any; // For additional product properties
}

interface CompareState {
  items: CompareItem[];
  addItem: (item: CompareItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: CompareItem) => void;
  isInCompare: (id: string) => boolean;
  clearCompare: () => void;
  getItemCount: () => number;
  maxItems: number;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      maxItems: 4,
      addItem: (item) => {
        set((state) => {
          if (state.items.some((i) => i.id === item.id)) {
            return state;
          }
          if (state.items.length >= get().maxItems) {
            // Remove the oldest item
            const newItems = state.items.slice(1);
            return { items: [...newItems, item] };
          }
          return { items: [...state.items, item] };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      toggleItem: (item) => {
        const isInCompare = get().items.some((i) => i.id === item.id);
        if (isInCompare) {
          get().removeItem(item.id);
        } else {
          get().addItem(item);
        }
      },
      isInCompare: (id) => {
        return get().items.some((item) => item.id === id);
      },
      clearCompare: () => {
        set({ items: [] });
      },
      getItemCount: () => {
        return get().items.length;
      },
    }),
    {
      name: 'compare-storage',
    }
  )
);

