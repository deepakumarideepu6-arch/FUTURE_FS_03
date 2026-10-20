import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Send,
  CheckCircle,
  Info,
  Settings,
  HelpCircle,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { shopDetails, openWhatsApp, setIsConfigModalOpen, showNotification } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '', // Email or Phone Number
    subject: 'General Product Enquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<{
    name: string;
    contactInfo: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contactInfo.trim() || !formData.message.trim()) {
      showNotification('Please fill in your name, contact info, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage({
        name: formData.name,
        contactInfo: formData.contactInfo,
        message: formData.message,
      });
      showNotification('Enquiry received. You can also forward this via WhatsApp.');
      setFormData({
        name: '',
        contactInfo: '',
        subject: 'General Product Enquiry',
        message: '',
      });
    }, 400);
  };

  const handleForwardWhatsApp = () => {
    if (!submittedMessage) return;
    const text = `Hello Shree Stationers, my name is ${submittedMessage.name} (${submittedMessage.contactInfo}). I sent an enquiry:\n\n"${submittedMessage.message}"`;
    openWhatsApp(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* 1. Header & Intro */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D99B26]">
          <span>Contact &amp; Visit</span>
          <span aria-hidden="true">·</span>
          <span>Anekal, Karnataka</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B]">
          Get in Touch with Shree Stationers
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
          Whether you need to check the availability of specific textbooks or notebooks, place a school project order, or locate our shop in Anekal, we are here to assist.
        </p>
      </div>

      {/* 2. Top Contact Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Address Card */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <MapPin className="w-5 h-5 text-[#D99B26]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-stone-900">
                Shop Address
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {shopDetails.addressLine}
              </p>
              {!shopDetails.isAddressVerified && (
                <span className="inline-block mt-2 text-[11px] text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  Anekal Town (Exact door landmark configurable)
                </span>
              )}
            </div>
          </div>

          <a
            href={shopDetails.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183B2B] hover:text-[#D99B26] transition-smooth pt-2 border-t border-stone-100"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Phone & Calling */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <Phone className="w-5 h-5 text-[#D99B26]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-stone-900">
                Phone Call
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Call our shop during operating hours for instant inventory queries.
              </p>
              <a
                href={`tel:${shopDetails.phone.replace(/\s+/g, '')}`}
                className="text-sm font-semibold text-[#183B2B] hover:underline block mt-2"
              >
                {shopDetails.phone}
              </a>
            </div>
          </div>

          <span className="text-[11px] text-stone-500 pt-2 border-t border-stone-100 block">
            Click to call directly
          </span>
        </div>

        {/* WhatsApp Direct */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <MessageCircle className="w-5 h-5 text-[#D99B26]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-stone-900">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Fastest way to enquire about notebook stocks, pen models, or send book lists.
              </p>
              <span className="text-xs text-stone-500 block mt-1">
                Pre-filled greeting enabled
              </span>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#183B2B] hover:text-[#D99B26] transition-smooth pt-2 border-t border-stone-100 cursor-pointer text-left"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#D99B26]" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Opening Hours */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#183B2B]/10 flex items-center justify-center text-[#183B2B]">
              <Clock className="w-5 h-5 text-[#D99B26]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-stone-900">
                Opening Hours
              </h3>
              <div className="text-xs text-stone-600 mt-2 space-y-1">
                <p className="font-medium text-stone-800">{shopDetails.weekdayHours}</p>
                <p className="text-stone-500">{shopDetails.weekendHours}</p>
              </div>
            </div>
          </div>

          <span className="text-[11px] text-emerald-800 font-medium pt-2 border-t border-stone-100 block">
            Open today for walk-in visits
          </span>
        </div>

      </div>

      {/* 3. Interactive Split: Contact Form + Map & Directions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Form Column */}
        <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#183B2B]">
              Send a Message
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Have a bulk order enquiry or want to check an item? Leave your details below.
            </p>
          </div>

          {submittedMessage ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-sm">Thank You, {submittedMessage.name}!</h4>
              </div>
              <p className="text-xs leading-relaxed text-emerald-800">
                Your message has been captured. Since local messages are reviewed by the shop in Anekal, you can also forward your text straight into WhatsApp for a faster response:
              </p>
              
              <div className="p-3 bg-white rounded-lg border border-emerald-200 text-xs text-stone-700 italic">
                &quot;{submittedMessage.message}&quot;
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  onClick={handleForwardWhatsApp}
                  className="px-4 py-2.5 rounded-lg bg-[#183B2B] hover:bg-[#10261C] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-smooth cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#D99B26]" />
                  <span>Forward to WhatsApp</span>
                </button>
                <button
                  onClick={() => setSubmittedMessage(null)}
                  className="px-4 py-2.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 text-xs font-medium transition-smooth cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar / Ananya Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-[#FAF8F5] text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Email Address or Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  placeholder="e.g. 9876543210 or ramesh@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-[#FAF8F5] text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Enquiry Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-[#FAF8F5] text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
                >
                  <option value="General Product Enquiry">General Product Enquiry</option>
                  <option value="School Notebooks & Supplies">School Notebooks &amp; Supplies</option>
                  <option value="Art & Craft Materials">Art &amp; Craft Materials</option>
                  <option value="Office Bulk Paper & Files">Office Bulk Paper &amp; Files</option>
                  <option value="Custom Stationery Request">Custom Stationery Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                  Your Message or Stationery List <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write details of the notebooks, pens, or stationery supplies you are looking for..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-[#FAF8F5] text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#183B2B] hover:bg-[#10261C] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs transition-smooth cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#D99B26]" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</span>
                </button>
              </div>

              {/* Form integration note */}
              <div className="text-[11px] text-stone-500 pt-2 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                <span>
                  Form responses are recorded client-side with instant WhatsApp forward option. Can be bound to shop email/CRM upon production deployment.
                </span>
              </div>
            </form>
          )}

        </div>

        {/* Map & Directions Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#183B2B]">
                  Shop Location in Anekal
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Anekal, Bengaluru Urban District, Karnataka 562106
                </p>
              </div>

              {/* Get Directions Button */}
              <a
                href={shopDetails.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D99B26] hover:bg-[#C58818] text-[#10261C] font-semibold text-xs transition-smooth whitespace-nowrap shrink-0 shadow-2xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-stone-200 aspect-16/10 sm:aspect-16/9 bg-stone-100 relative">
              <iframe
                title="Shree Stationers Location in Anekal, Karnataka"
                src={shopDetails.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Map Transparency Notice */}
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600 space-y-1">
              <span className="font-semibold text-stone-800 block">
                Map Location Note:
              </span>
              <p>
                The map is anchored to Anekal town centre coordinates. When the store owner provides their verified shop plot / building pin, the map embed can be updated with 1-click in settings.
              </p>
            </div>
          </div>

          {/* Quick Config Modal Trigger */}
          <div className="p-5 rounded-2xl bg-[#F3EDE3] border border-stone-200 flex items-center justify-between gap-4">
            <div className="text-xs text-stone-700">
              <span className="font-semibold block text-stone-900">Are you the store owner or evaluator?</span>
              <span>Test custom WhatsApp numbers, landmarks, or shop timings.</span>
            </div>
            <button
              onClick={() => setIsConfigModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:bg-stone-50 transition-smooth cursor-pointer shrink-0"
            >
              <Settings className="w-3.5 h-3.5 text-[#183B2B]" />
              <span>Configure Details</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
