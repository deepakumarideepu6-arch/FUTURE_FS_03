import React from 'react';
import { useShop } from '../context/ShopContext';
import { ABOUT_IMAGE } from '../data/stationeryData';
import { ArrowRight, MapPin, Users, HeartHandshake, BookOpen, Sparkles, Building, Settings } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage, setIsConfigModalOpen, shopDetails } = useShop();

  const handleNav = (page: 'products' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* 1. Page Header & Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D99B26]">
            <span>About Shree Stationers</span>
            <span aria-hidden="true">·</span>
            <span>Anekal, Karnataka</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B] leading-tight">
            Serving the Educational &amp; Creative Heart of Anekal
          </h1>

          <p className="text-base text-stone-600 leading-relaxed">
            Shree Stationers is a neighbourhood stationery shop dedicated to serving students, parents, teachers, artists, and office professionals across Anekal, Karnataka. We believe that having dependable, quality stationery close at hand empowers everyday learning, organized workspaces, and creative expression.
          </p>

          <p className="text-base text-stone-600 leading-relaxed">
            Whether a primary school pupil needs a specific four-line notebook before tomorrow’s class, a high schooler is preparing for board exams with smooth gel pens, or a local business requires accounts registers and filing materials, Shree Stationers provides friendly, convenient, and reliable local service.
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleNav('products')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#183B2B] hover:bg-[#10261C] text-white font-semibold text-sm shadow-xs transition-smooth cursor-pointer"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-4 h-4 text-[#D99B26]" />
            </button>

            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-semibold text-sm border border-stone-300 transition-smooth cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#D99B26]" />
              <span>Visit or Contact Us</span>
            </button>
          </div>
        </div>

        {/* Store Photograph */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 aspect-4/3">
            <img
              src={ABOUT_IMAGE}
              alt="Inside Shree Stationers shop shelves with notebooks, art supplies, and writing instruments"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-semibold block text-[#FAF8F5]">Shree Stationers Storefront</span>
              <span className="text-white/80">A welcoming space for books, stationery, and creative minds</span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Who We Support in Anekal */}
      <div className="space-y-8 pt-6 border-t border-stone-200">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D99B26]">
            Our Community Role
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#183B2B] mt-1">
            Supporting Everyone Who Learns, Teaches, and Builds
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Every customer walks in with a unique need. We tailor our offerings to make everyday school, office, and creative work straightforward and accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Students & Parents */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <Users className="w-5 h-5 text-[#D99B26]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Students &amp; Parents
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We stock the exact notebook rulings, examination writing instruments, compass sets, and school project papers requested by schools in and around Anekal.
            </p>
          </div>

          {/* Card 2: Teachers & Schools */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <BookOpen className="w-5 h-5 text-[#D99B26]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Teachers &amp; Educators
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              From whiteboard markers, correction supplies, and display charts to classroom craft materials and examination writing pads for school terms.
            </p>
          </div>

          {/* Card 3: Artists & Offices */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <Building className="w-5 h-5 text-[#D99B26]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Artists &amp; Local Offices
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              High-opacity paints, brushes, and sketchbooks for creative projects, alongside box files, bond copier paper, staplers, and envelopes for business administration.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Authentic Values & Verified Business Data Notice */}
      <div className="bg-[#F3EDE3] p-8 rounded-2xl border border-stone-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-serif text-xl font-bold text-[#183B2B]">
              Business Information &amp; Verification Transparency
            </h3>
            <p className="text-xs text-stone-600 max-w-2xl leading-relaxed">
              To uphold authentic local business integrity, Shree Stationers does not advertise unverified founding years, awards, or fabricated claims. All business details, landmark addresses, and phone contacts remain fully editable for verified owner updates.
            </p>
          </div>
          <button
            onClick={() => setIsConfigModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#183B2B] text-white text-xs font-semibold hover:bg-[#10261C] transition-smooth cursor-pointer shrink-0"
          >
            <Settings className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>Update Store Details</span>
          </button>
        </div>

        <div className="pt-4 border-t border-stone-300/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-700">
          <div>
            <span className="font-semibold block text-stone-900">Shop Location:</span>
            <span>Anekal, Karnataka 562106</span>
          </div>
          <div>
            <span className="font-semibold block text-stone-900">Core Focus:</span>
            <span>Education, Art &amp; Office Stationery</span>
          </div>
          <div>
            <span className="font-semibold block text-stone-900">Direct Contact:</span>
            <span>{shopDetails.phone} (WhatsApp enabled)</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Navigation Call to Action */}
      <div className="p-8 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#183B2B]">
            Have a question about specific stationery in stock?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Browse our catalogue or drop by our shop in Anekal. We are always glad to assist.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav('products')}
            className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-smooth cursor-pointer"
          >
            View Products
          </button>
          <button
            onClick={() => handleNav('contact')}
            className="px-5 py-2.5 rounded-xl bg-[#183B2B] hover:bg-[#10261C] text-white text-xs font-semibold transition-smooth cursor-pointer"
          >
            Contact Information
          </button>
        </div>
      </div>

    </div>
  );
};
