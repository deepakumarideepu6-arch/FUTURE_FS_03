import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { openWhatsApp, shopDetails } = useShop();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Informative Floating Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-stone-900 border border-stone-200 px-3.5 py-2 rounded-xl shadow-lg text-xs animate-in fade-in slide-in-from-right duration-200">
          <span>Need help? Chat with Shree Stationers</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 cursor-pointer ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => openWhatsApp()}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#183B2B] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#10261C] hover:scale-105 active:scale-95 transition-smooth cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#D99B26] border-2 border-[#FAF8F5]"
        aria-label="Enquire on WhatsApp"
        title={`Message Shree Stationers on WhatsApp (${shopDetails.phone})`}
      >
        <MessageCircle className="w-6 h-6 text-[#D99B26]" />
      </button>
    </div>
  );
};
