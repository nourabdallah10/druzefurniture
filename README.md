# Furniture Website

A modern React furniture website built with TypeScript, Tailwind CSS, and React Router. Features bilingual support (English/Hebrew) with automatic RTL layout switching for Hebrew.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🌐 Bilingual support (English/Hebrew)
- 🔄 Automatic RTL layout switching for Hebrew
- 🧭 React Router for navigation
- 🗄️ Zustand for state management
- 📱 Fully responsive design
- ❤️ Wishlist functionality
- 🔍 Quick view modal for products
- ⚖️ Product comparison tool
- 🏠 Room visualizer (AR placeholder)
- 🚚 Delivery time estimator
- ⚙️ Product configurator
- 🌙 Dark mode toggle
- ✨ Smooth page transitions with Framer Motion

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Install Dependencies

First, install all required dependencies:

```bash
npm install
```

### Run Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Lint Code

To check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── assets/          # Images and translations
├── components/      # React components
├── contexts/        # React contexts (Direction)
├── data/            # Mock data and product data
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── store/           # Zustand stores (language, theme, wishlist, compare)
├── types/           # TypeScript types
└── utils/           # Utility functions
```

## Available Pages

- `/` - Home page with featured products
- `/sofas` - Sofa collection with filters
- `/beds` - Bed collection
- `/tables` - Table collection
- `/colors` - Fabric/color collection
- `/product/:id` - Individual product page
- `/wishlist` - User's wishlist
- `/compare` - Product comparison page
- `*` - 404 Not Found page

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router v6** - Routing
- **Zustand** - State management
- **Framer Motion** - Animations

## Language Management

The app uses Zustand for language state management. The language preference is persisted in localStorage and automatically applies RTL layout when Hebrew is selected.

## State Management

The app uses Zustand stores for:
- Language (English/Hebrew)
- Theme (Light/Dark mode)
- Wishlist (saved products)
- Compare (products being compared)

All stores persist data to localStorage.

## Features in Detail

### Wishlist
- Click the heart icon on any product card to add/remove from wishlist
- View all wishlisted items on `/wishlist` page
- Wishlist persists across browser sessions

### Quick View
- Hover over product cards to see "Quick View" button
- Click to open modal with product details
- Quick access to view full details or add to cart

### Product Comparison
- Click the comparison icon (two rectangles) on product cards
- Compare up to 4 products side-by-side
- View specifications, prices, and details in a table format

### Dark Mode
- Click the theme toggle button in the header
- Theme preference is saved and persists across sessions
- Smooth transition between light and dark modes

## Development

The project uses Vite for fast development with Hot Module Replacement (HMR). Changes to files are automatically reflected in the browser.

## Build

The production build is optimized with:
- Code splitting via React.lazy()
- Tree shaking
- Minification
- Asset optimization
