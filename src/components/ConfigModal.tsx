import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, CheckCircle, Info, RotateCcw } from 'lucide-react';

export const ConfigModal: React.FC = () => {
  const { isConfigModalOpen, setIsConfigModalOpen, shopDetails, updateShopDetails, resetShopDetails } = useShop();

  const [formData, setFormData] = useState({
    whatsappNumber: shopDetails.whatsappNumber,
    phone: shopDetails.phone,
    email: shopDetails.email,
    addressLine: shopDetails.addressLine,
    weekdayHours: shopDetails.weekdayHours,
    weekendHours: shopDetails.weekendHours,
    isAddressVerified: shopDetails.isAddressVerified,
    isPhoneVerified: shopDetails.isPhoneVerified,
  });

  if (!isConfigModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateShopDetails(formData);
    setIsConfigModalOpen(false);
  };

  const handleReset = () => {
    resetShopDetails();
    setIsConfigModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-[#FAF8F5] w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[#183B2B] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
              Shop Details & Placeholder Settings
            </h3>
            <p className="text-xs text-[#FAF8F5]/80 mt-0.5">
              Shree Stationers · Anekal, Karnataka (Task 3 Configuration)
            </p>
          </div>
          <button
            onClick={() => setIsConfigModalOpen(false)}
            className="text-stone-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-smooth cursor-pointer"
            aria-label="Close configuration modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Notice */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-5 text-sm">
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold block">Business Details Notice:</span>
              <p>
                In accordance with project guidelines, placeholder contact details are provided until the business owner supplies verified phone numbers, door/street landmarks in Anekal, and official email credentials. You can update and test them below.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                WhatsApp Phone Number (with Country Code)
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                placeholder="e.g. 919876543210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
              />
              <span className="text-[11px] text-stone-500 mt-1 block">
                Format: 91 followed by 10-digit Indian mobile number for instant WhatsApp API links.
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Display Phone Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Shop Address (Anekal)
              </label>
              <input
                type="text"
                value={formData.addressLine}
                onChange={(e) => setFormData({ ...formData, addressLine: e.target.value })}
                placeholder="Shop address in Anekal, Karnataka"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                Business Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. enquiry@shreestationers.in"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Mon – Sat Hours
                </label>
                <input
                  type="text"
                  value={formData.weekdayHours}
                  onChange={(e) => setFormData({ ...formData, weekdayHours: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Sunday Hours
                </label>
                <input
                  type="text"
                  value={formData.weekendHours}
                  onChange={(e) => setFormData({ ...formData, weekendHours: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-stone-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
                />
              </div>
            </div>

            {/* Verification status checkboxes */}
            <div className="pt-2 border-t border-stone-200 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
                <input
                  type="checkbox"
                  checked={formData.isAddressVerified}
                  onChange={(e) => setFormData({ ...formData, isAddressVerified: e.target.checked })}
                  className="rounded border-stone-300 text-[#183B2B] focus:ring-[#183B2B]"
                />
                <span>Mark Shop Address as Verified by Owner</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-700">
                <input
                  type="checkbox"
                  checked={formData.isPhoneVerified}
                  onChange={(e) => setFormData({ ...formData, isPhoneVerified: e.target.checked })}
                  className="rounded border-stone-300 text-[#183B2B] focus:ring-[#183B2B]"
                />
                <span>Mark Contact Phone & WhatsApp as Verified</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 rounded-lg transition-smooth cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsConfigModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-200/60 rounded-lg transition-smooth cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#183B2B] hover:bg-[#10261C] rounded-lg shadow-xs transition-smooth cursor-pointer"
              >
                <CheckCircle className="w-4 h-4 text-[#D99B26]" />
                <span>Save Details</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
