import React, { createContext, useContext, useState, useEffect } from 'react';
import { Page, ShopDetails } from '../types';
import { INITIAL_SHOP_DETAILS, DEFAULT_WHATSAPP_MESSAGE } from '../data/stationeryData';

interface ShopContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  navigateToCategory: (catId: string) => void;
  shopDetails: ShopDetails;
  updateShopDetails: (details: Partial<ShopDetails>) => void;
  resetShopDetails: () => void;
  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;
  getWhatsAppUrl: (customMessage?: string) => string;
  openWhatsApp: (customMessage?: string) => void;
  notification: string | null;
  showNotification: (msg: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  const [shopDetails, setShopDetails] = useState<ShopDetails>(() => {
    try {
      const saved = localStorage.getItem('shree_stationers_details');
      if (saved) {
        return { ...INITIAL_SHOP_DETAILS, ...JSON.parse(saved) };
      }
    } catch {
      // fallback to initial
    }
    return INITIAL_SHOP_DETAILS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('shree_stationers_details', JSON.stringify(shopDetails));
    } catch {
      // ignore
    }
  }, [shopDetails]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3200);
  };

  const navigateToCategory = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateShopDetails = (details: Partial<ShopDetails>) => {
    setShopDetails((prev) => ({ ...prev, ...details }));
    showNotification('Shop details updated successfully.');
  };

  const resetShopDetails = () => {
    setShopDetails(INITIAL_SHOP_DETAILS);
    showNotification('Reset to default Anekal shop details.');
  };

  const getWhatsAppUrl = (customMessage?: string) => {
    const rawNumber = shopDetails.whatsappNumber.replace(/[^0-9]/g, '');
    const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
  };

  const openWhatsApp = (customMessage?: string) => {
    const url = getWhatsAppUrl(customMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
        navigateToCategory,
        shopDetails,
        updateShopDetails,
        resetShopDetails,
        isConfigModalOpen,
        setIsConfigModalOpen,
        getWhatsAppUrl,
        openWhatsApp,
        notification,
        showNotification,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
