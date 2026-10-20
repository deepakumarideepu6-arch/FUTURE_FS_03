import React from 'react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, HERO_IMAGE } from '../data/stationeryData';
import { ArrowRight, MapPin, MessageCircle, CheckCircle2, BookOpen, PenTool, Sparkles, Building2 } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentPage, navigateToCategory, openWhatsApp, shopDetails } = useShop();

  return (
    <div className="space-y-24 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet unboxed location badge */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-600">
                <span className="text-[#D99B26]">●</span>
                <span>Local Stationery Store in Anekal, Karnataka</span>
              </div>

              {/* Strict Prompt Required Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#183B2B] leading-[1.15]" style={{ textWrap: 'balance' }}>
                Everything You Need to Write, Create &amp; Learn.
              </h1>

              {/* Strict Prompt Required Description */}
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                From everyday school essentials to creative art supplies and office stationery, discover the essentials you need at Shree Stationers, Anekal.
              </p>

              {/* Two Prominent Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentPage('products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#183B2B] hover:bg-[#10261C] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-smooth cursor-pointer group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 text-[#D99B26] group-hover:translate-x-1 transition-smooth" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-[#183B2B] font-semibold text-sm border border-stone-300 transition-smooth cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#D99B26]" />
                  <span>Contact Us</span>
                </button>
              </div>

              {/* Quick local trust indicators */}
              <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#183B2B] shrink-0" />
                  <span>Student &amp; School Kits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#183B2B] shrink-0" />
                  <span>Office &amp; Paper Reams</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#183B2B] shrink-0" />
                  <span>Instant WhatsApp Enquiries</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-stone-100 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <img
                  src={HERO_IMAGE}
                  alt="Neat arrangement of notebooks, pens, pencils, and stationery supplies at Shree Stationers"
                  className="w-full h-full object-cover hover:scale-103 transition-smooth duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-semibold block text-[#FAF8F5]">Handpicked Stationery Supplies</span>
                  <span className="text-white/80">Available right in Anekal town</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Five Category Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#D99B26] mb-1">
              Store Catalogue
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#183B2B]">
              Browse by Category
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Find the exact supplies you need for school classes, college projects, art hobbies, or office administration.
          </p>
        </div>

        {/* 5 Distinct Responsive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((category, index) => {
            const isLarge = index === 0; // Highlight first card with a slightly broader span on large screens
            return (
              <div
                key={category.id}
                className={`group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-smooth flex flex-col ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Category Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-smooth" />
                </div>

                {/* Category Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#183B2B] group-hover:text-[#10261C] transition-smooth">
                      {category.name}
                    </h3>
                    <p className="text-sm text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                      {category.shortDescription}
                    </p>
                    
                    {/* Item highlights preview */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-1.5 text-xs text-stone-500">
                      {category.itemHighlights.map((item, i) => (
                        <span key={item}>
                          {item}
                          {i < category.itemHighlights.length - 1 && <span className="ml-1.5 text-stone-300">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Working Link to Products Page */}
                  <div className="pt-2">
                    <button
                      onClick={() => navigateToCategory(category.id)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#183B2B] group-hover:text-[#D99B26] transition-smooth cursor-pointer"
                    >
                      <span>View {category.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-smooth" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. "Why Choose Us?" Section */}
      <section className="bg-[#F3EDE3] py-16 sm:py-20 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D99B26]">
              Community-Focused Stationery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#183B2B]">
              Why Choose Shree Stationers?
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Convenient everyday stationery, attentive service, and genuine supplies for students, parents, and local organizations in Anekal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Convenient Local Location */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
                <MapPin className="w-5 h-5 text-[#D99B26]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Convenient Location
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Centrally located in Anekal town, making it easy for students and parents to pick up urgent school notebooks, charts, and supplies without travel delays.
              </p>
            </div>

            {/* 2. Helpful & Patient Service */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
                <BookOpen className="w-5 h-5 text-[#D99B26]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Helpful Everyday Guidance
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Need specific school-mandated long books, exam-compliant pens, or geometry sets? We take time to help you match teacher requirements accurately.
              </p>
            </div>

            {/* 3. Comprehensive Everyday Range */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
                <PenTool className="w-5 h-5 text-[#D99B26]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Practical Variety
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From budget-friendly ballpoints and erasers to premium artist sketch pads and heavy-duty office files, we stock practical options for every budget.
              </p>
            </div>

            {/* 4. WhatsApp Enquiries */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
                <MessageCircle className="w-5 h-5 text-[#D99B26]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Quick WhatsApp Enquiries
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Save time before stepping out. Send a quick message to check if your required book ruling, art materials, or paper reams are ready on the shelf.
              </p>
            </div>

          </div>

          {/* Adjacency Proof: Serving Who in Anekal */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-serif text-base font-semibold text-[#183B2B]">
                Serving the diverse stationery needs of Anekal
              </h4>
              <p className="text-xs text-stone-600">
                School students · College &amp; PU scholars · Teachers &amp; Tutors · Hobby artists · Local shops &amp; Offices
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#183B2B] hover:text-[#D99B26] transition-smooth cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Call to Action Section encouraging visits or enquiries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#183B2B] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D99B26]">
              Visit or Message Us Today
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to stock up for class, project, or office?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Visit Shree Stationers in Anekal for friendly in-person shopping, or send us a WhatsApp message to enquire about availability, custom bundle requirements, or bulk school supplies.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openWhatsApp()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#D99B26] hover:bg-[#C58818] text-[#10261C] font-semibold text-sm shadow-md transition-smooth cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#10261C]" />
                <span>Enquire on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-smooth cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#D99B26]" />
                <span>Get Shop Location &amp; Hours</span>
              </button>
            </div>
          </div>

          {/* Subtle background stationery watermark shape */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        </div>
      </section>

    </div>
  );
};
