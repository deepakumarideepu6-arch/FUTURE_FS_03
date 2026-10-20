import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConfigModal } from './components/ConfigModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CheckCircle2 } from 'lucide-react';

const MainContent: React.FC = () => {
  const { currentPage, notification } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#D99B26]/30 selection:text-stone-900">
      
      {/* Toast Notification Banner */}
      {notification && (
        <div className="fixed top-24 right-4 z-50 bg-[#183B2B] text-white px-4 py-2.5 rounded-xl shadow-lg border border-[#D99B26]/30 text-xs font-medium flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar />

      {/* Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <FloatingWhatsApp />
      <ConfigModal />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
