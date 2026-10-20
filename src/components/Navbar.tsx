import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Page } from '../types';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    setSelectedCategory,
    openWhatsApp,
    shopDetails,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: Page; category?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Products', page: 'products' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    if (page === 'products') {
      setSelectedCategory('all');
    }
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner with Town Location & Hours */}
      <div className="bg-[#10261C] text-[#FAF8F5]/90 text-xs py-2 px-4 border-b border-[#183B2B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D99B26] shrink-0" />
            <span className="font-medium">Shree Stationers · Anekal, Karnataka 562106</span>
          </div>
          <div className="flex items-center gap-4 text-[#FAF8F5]/80">
            <span>Open Mon-Sat: 9:00 AM – 8:30 PM</span>
            <span className="hidden md:inline" aria-hidden="true">·</span>
            <span className="hidden md:inline">Sun: 10:00 AM – 2:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Strictly conforms to 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark logo */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group flex items-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B] rounded-lg p-1"
              aria-label="Shree Stationers Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#183B2B] flex items-center justify-center text-[#FAF8F5] shadow-xs group-hover:bg-[#10261C] transition-smooth shrink-0">
                <span className="font-serif font-bold text-xl tracking-tight text-[#D99B26]">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183B2B] whitespace-nowrap">
                  Shree Stationers
                </span>
                <span className="text-[11px] font-medium tracking-wide uppercase text-stone-500 whitespace-nowrap">
                  Anekal · Quality Stationery
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-smooth cursor-pointer focus-visible:outline-none ${
                    isActive
                      ? 'text-[#183B2B] font-semibold'
                      : 'text-stone-600 hover:text-[#183B2B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D99B26] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Action Button */}
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#183B2B] hover:bg-[#10261C] rounded-lg shadow-xs hover:shadow-md transition-smooth cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D99B26]"
            >
              <MessageCircle className="w-4 h-4 text-[#D99B26]" />
              <span>WhatsApp Enquiry</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-[#183B2B] hover:bg-stone-100 rounded-lg transition-smooth cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-t border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page;
                return (
                  <button
                    key={link.page}
                    onClick={() => handleNavClick(link.page)}
                    className={`flex items-center justify-between py-3 px-3 rounded-lg text-base font-medium text-left cursor-pointer transition-smooth ${
                      isActive
                        ? 'bg-[#183B2B] text-white font-semibold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#D99B26]" />}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  openWhatsApp();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#183B2B] text-white font-medium text-sm shadow-xs cursor-pointer hover:bg-[#10261C] transition-smooth"
              >
                <MessageCircle className="w-4 h-4 text-[#D99B26]" />
                <span>Message on WhatsApp</span>
              </button>

              <div className="text-center text-xs text-stone-500 mt-2">
                Anekal, Karnataka · Call: {shopDetails.phone}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
