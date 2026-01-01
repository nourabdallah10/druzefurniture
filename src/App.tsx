import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DirectionProvider } from './contexts/DirectionContext';
import { Layout } from './components/Layout';
import { PageSkeleton } from './components/LoadingSkeleton';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const Sofas = lazy(() => import('./pages/Sofas').then((module) => ({ default: module.Sofas })));
const Beds = lazy(() => import('./pages/Beds').then((module) => ({ default: module.Beds })));
const Tables = lazy(() => import('./pages/Tables').then((module) => ({ default: module.Tables })));
const Colors = lazy(() => import('./pages/Colors').then((module) => ({ default: module.Colors })));
const Product = lazy(() => import('./pages/Product').then((module) => ({ default: module.Product })));
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })));
const Compare = lazy(() => import('./pages/Compare').then((module) => ({ default: module.Compare })));
const Wishlist = lazy(() => import('./pages/Wishlist').then((module) => ({ default: module.Wishlist })));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DirectionProvider>
        <Layout>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sofas" element={<Sofas />} />
              <Route path="/beds" element={<Beds />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
        <FloatingWhatsAppButton />
      </DirectionProvider>
    </BrowserRouter>
  );
}

export default App;
