import React, { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, PRODUCTS } from '../data/stationeryData';
import { Search, MessageCircle } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    openWhatsApp,
  } = useShop();

  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by active category and search input
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categoryId === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specifications.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.idealFor.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header & Notice */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D99B26] mb-1">
              Stationery Catalogue · Anekal
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B]">
              Products &amp; Supplies
            </h1>
          </div>

          {/* Clean WhatsApp Enquiry Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openWhatsApp('Hello Shree Stationers, I have an enquiry regarding stationery items available at your Anekal store.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#183B2B] hover:bg-[#10261C] text-white text-xs sm:text-sm font-semibold transition-smooth cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#D99B26]" />
              <span>Ask on WhatsApp</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
          Explore our range of school, art, writing, and office stationery with detailed specifications. In adherence to verified store transparency, we do not show unverified online prices or stock counts. Reach out on WhatsApp or visit our Anekal shop for current availability and bulk orders.
        </p>
      </div>

      {/* Search and Category Filter Tabs */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notebooks, pens, geometry boxes, files..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#183B2B] shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-smooth cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#183B2B] text-white shadow-xs'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = PRODUCTS.filter((p) => p.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-smooth cursor-pointer ${
                  isSelected
                    ? 'bg-[#183B2B] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Category Spotlight Banner (when a single category is selected) */}
      {activeCategoryInfo && selectedCategory !== 'all' && (
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 h-48 md:h-full relative overflow-hidden bg-stone-100">
            <img
              src={activeCategoryInfo.image}
              alt={activeCategoryInfo.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-8 p-6 md:p-8 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D99B26]">
              Category Overview
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#183B2B]">
              {activeCategoryInfo.name}
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              {activeCategoryInfo.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {activeCategoryInfo.itemHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="text-xs text-stone-600 bg-[#FAF8F5] border border-stone-200 px-2.5 py-1 rounded-md"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product Items Grid with Dedicated Product Images and Clean Info Cards */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#183B2B]">
            {selectedCategory === 'all'
              ? 'All Stationery Offerings'
              : activeCategoryInfo?.name}
          </h2>
          <span className="text-xs text-stone-500">
            Showing {filteredProducts.length} items
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 space-y-3">
            <p className="text-stone-600 text-sm">
              No products found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs font-semibold text-[#183B2B] hover:text-[#D99B26] transition-smooth cursor-pointer"
            >
              Reset filters to view all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const parentCat = CATEGORIES.find((c) => c.id === product.categoryId);

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-smooth flex flex-col overflow-hidden"
                >
                  {/* Dedicated Product Photo */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100 border-b border-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-104 transition-smooth duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#183B2B]/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                      {parentCat?.name || 'Stationery'}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Product Name */}
                      <h3 className="font-serif text-lg font-bold text-[#183B2B] group-hover:text-[#10261C] transition-smooth">
                        {product.name}
                      </h3>

                      {/* Product Description */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Clean Unboxed Specifications */}
                      <div className="pt-3 border-t border-stone-100 space-y-2 text-xs">
                        <div>
                          <span className="font-semibold text-stone-800">Specifications: </span>
                          <span className="text-stone-600">{product.specifications}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-800">Ideal For: </span>
                          <span className="text-stone-600">{product.idealFor}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-800">Packing: </span>
                          <span className="text-stone-600">{product.packageType}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Sticky-Friendly Enquiry Callout */}
      <div className="p-8 rounded-2xl bg-[#183B2B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-white">
            Need school bundles, custom notebook ruling, or office paper cartons?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
            We happily arrange specialized stationery orders and school semester packages for parents, schools, and offices in Anekal.
          </p>
        </div>

        <button
          onClick={() => openWhatsApp('Hello Shree Stationers, I need help with a custom stationery requirement / bulk order in Anekal.')}
          className="px-6 py-3 rounded-xl bg-[#D99B26] hover:bg-[#C58818] text-[#10261C] text-xs sm:text-sm font-semibold transition-smooth cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2 shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-[#10261C]" />
          <span>Send Custom Enquiry</span>
        </button>
      </div>

    </div>
  );
};
