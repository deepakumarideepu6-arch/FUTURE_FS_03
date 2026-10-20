export type Page = 'home' | 'products' | 'about' | 'contact';

export interface CategoryInfo {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  itemHighlights: string[];
}

export interface ProductItem {
  id: string;
  categoryId: string;
  name: string;
  image: string;
  description: string;
  specifications: string;
  idealFor: string;
  packageType: string;
}

export interface ShopDetails {
  shopName: string;
  tagline: string;
  town: string;
  district: string;
  state: string;
  pincode: string;
  addressLine: string;
  isAddressVerified: boolean;
  phone: string;
  whatsappNumber: string;
  isPhoneVerified: boolean;
  email: string;
  isEmailVerified: boolean;
  weekdayHours: string;
  weekendHours: string;
  mapEmbedUrl: string;
  directionsUrl: string;
}
