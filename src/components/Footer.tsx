import React from 'react';
import { useShop } from '../context/ShopContext';
import { Page } from '../types';
import { MapPin, Phone, Mail, Clock, MessageCircle, Settings } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, setSelectedCategory, openWhatsApp, shopDetails, setIsConfigModalOpen } = useShop();

  const handleNav = (page: Page, categoryId?: string) => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#10261C] text-[#FAF8F5] border-t border-[#183B2B] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#183B2B] font-serif font-bold text-lg">
                <span className="text-[#D99B26]">S</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F5]">
                Shree Stationers
              </span>
            </div>
            <p className="text-sm text-[#FAF8F5]/80 leading-relaxed">
              Your trusted local stationery shop in Anekal, Karnataka. Providing genuine school supplies, durable notebooks, quality writing instruments, art materials, and office essentials.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openWhatsApp()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#183B2B] hover:bg-[#244C39] text-[#FAF8F5] text-xs font-medium border border-[#244C39] transition-smooth cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#D99B26]" />
                <span>Chat with us on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  About Our Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] mb-4">
              Stationery Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <button
                  onClick={() => handleNav('products', 'notebooks-paper')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  Notebooks & Paper
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'pens-writing')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  Pens & Writing Supplies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'art-craft')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  Art & Craft Supplies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'school-stationery')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  School Stationery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products', 'office-stationery')}
                  className="hover:text-[#D99B26] transition-smooth cursor-pointer"
                >
                  Office Stationery
                </button>
              </li>
            </ul>
          </div>

          {/* Shop Location & Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] mb-4">
              Shop Information
            </h4>
            <div className="space-y-3 text-sm text-[#FAF8F5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <span>
                  {shopDetails.addressLine}
                  {!shopDetails.isAddressVerified && (
                    <span className="block text-[11px] text-[#FAF8F5]/60 mt-0.5">
                      (Anekal Town · Landmark verified upon visit)
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D99B26] shrink-0" />
                <a
                  href={`tel:${shopDetails.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#D99B26] transition-smooth"
                >
                  {shopDetails.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D99B26] shrink-0" />
                <a
                  href={`mailto:${shopDetails.email}`}
                  className="hover:text-[#D99B26] transition-smooth"
                >
                  {shopDetails.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <p>{shopDetails.weekdayHours}</p>
                  <p>{shopDetails.weekendHours}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Verification & Project Details */}
        <div className="mt-12 pt-8 border-t border-[#183B2B]/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© 2026 Shree Stationers. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Anekal, Karnataka, India</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FAF8F5]/80">Future Interns Web Development (Task 3)</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]/70 hover:text-[#D99B26] transition-smooth cursor-pointer"
              title="Configure phone, address, or hours placeholders"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Configure Shop Details</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
