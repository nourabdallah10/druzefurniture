import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price?: number;
  category?: string;
}

interface WishlistState {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: WishlistItem) => void;
  isInWishlist: (id: string) => boolean;
  clearWishlist: () => void;
  getItemCount: () => number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          if (state.items.some((i) => i.id === item.id)) {
            return state;
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
        const isInWishlist = get().items.some((i) => i.id === item.id);
        if (isInWishlist) {
          get().removeItem(item.id);
        } else {
          get().addItem(item);
        }
      },
      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id);
      },
      clearWishlist: () => {
        set({ items: [] });
      },
      getItemCount: () => {
        return get().items.length;
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);

