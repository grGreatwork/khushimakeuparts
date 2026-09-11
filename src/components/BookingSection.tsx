import React, { useState } from 'react';
import { BUSINESS_INFO, ASSETS } from '../data/portfolioData';
import { BookingFormData } from '../types';

interface BookingSectionProps {
  selectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    eventType: selectedService ? selectedService : 'Bridal Makeup',
    eventDate: '',
    location: 'Siwan, Bihar',
    partySize: '1',
    phone: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const confirmBox = document.getElementById('booking-confirmation');
      if (confirmBox) {
        confirmBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Khushi, I would like to inquire about booking:
• Name: ${formData.fullName || 'Client'}
• Requirement: ${formData.eventType}
• Date: ${formData.eventDate || 'To be discussed'}
• Location: ${formData.location || 'Siwan'}
• Attendees: ${formData.partySize}
Please let me know if you are available!`
  );

  return (
    <section className="px-5 py-8 bg-surface-container-low rounded-t-[3rem] max-w-lg mx-auto w-full border-t border-outline-variant/30" id="book">
      {/* Eyebrow & Brand mark */}
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-[20px] text-secondary">
          calendar_today
        </span>
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
          Book an Appointment
        </span>
      </div>

      <h2 className="font-serif text-[28px] sm:text-[32px] font-medium text-primary leading-tight">
        Ready for Your Special Day?
      </h2>
      <p className="font-sans text-[13px] text-on-surface-variant mt-1.5 mb-5 leading-relaxed">
        Send Khushi a direct message on Instagram with your event date, makeup requirement and location &mdash; she&apos;ll get back to you with availability and booking details.
      </p>

      {/* Selected service alert banner if user picked one */}
      {selectedService && (
        <div className="mb-4 p-3 rounded-xl bg-secondary-fixed text-on-secondary-fixed text-[13px] flex items-center justify-between shadow-xs">
          <span>Inquiring about: <strong>{selectedService}</strong></span>
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
        </div>
      )}

      {/* Instant Direct Contact Bar */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <a
          href={BUSINESS_INFO.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 rounded-2xl bg-primary text-on-primary font-sans text-[13px] font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm hover:bg-primary-container transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          <span>Message on Instagram</span>
        </a>
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="h-12 rounded-2xl bg-surface text-primary border border-outline-variant/30 font-sans text-[13px] font-bold tracking-wide flex items-center justify-center gap-2 shadow-2xs hover:bg-surface-container transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary">call</span>
          <span>Call 9162143273</span>
        </a>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-5 rounded-2xl bg-surface shadow-sm border border-outline-variant/30"
        id="booking-form"
      >
        <h3 className="font-serif text-[18px] text-primary mb-1">
          Send an Online Enquiry
        </h3>

        {/* Full Name */}
        <div>
          <label className="block font-sans text-[11px] uppercase tracking-wider font-semibold text-primary mb-1.5" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-sans text-[14px] focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-colors border border-outline-variant/20"
            id="name"
            placeholder="e.g. Pooja Sharma"
            required
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        {/* Event Type / Makeup Requirement */}
        <div>
          <label className="block font-sans text-[11px] uppercase tracking-wider font-semibold text-primary mb-1.5" htmlFor="event-type">
            Makeup Requirement
          </label>
          <div className="relative">
            <select
              className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-sans text-[14px] appearance-none focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-colors border border-outline-variant/20 pr-10 cursor-pointer"
              id="event-type"
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            >
              <option value="Bridal Makeup">Bridal Makeup (₹10,000)</option>
              <option value="Engagement Makeup">Engagement Makeup (₹8,000)</option>
              <option value="Party Makeup">Party Makeup (₹5,000)</option>
              <option value="Haldi Makeup">Haldi Makeup (₹5,000)</option>
              <option value="Mehendi Makeup">Mehendi Makeup (₹5,000)</option>
              <option value="Basic Bridal Package">Basic Bridal Package</option>
              <option value="Premium Bridal Package">Premium Bridal Package (HD)</option>
              <option value="Luxury Bridal Package">Luxury Bridal Package (Airbrush)</option>
              <option value="Special Occasion Makeup">Special Occasion Makeup</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-3 text-[18px] text-on-surface-variant pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        {/* Date & Phone */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-sans text-[11px] uppercase tracking-wider font-semibold text-primary mb-1.5" htmlFor="event-date">
              Event Date
            </label>
            <input
              className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-sans text-[13px] focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-colors border border-outline-variant/20 cursor-pointer"
              id="event-date"
              required
              type="date"
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
            />
          </div>
          <div>
            <label className="block font-sans text-[11px] uppercase tracking-wider font-semibold text-primary mb-1.5" htmlFor="phone">
              Mobile Number
            </label>
            <input
              className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-sans text-[13px] focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-colors border border-outline-variant/20"
              id="phone"
              placeholder="e.g. 9876543210"
              type="tel"
              value={formData.phone || ''}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Location (Siwan / Venue) */}
        <div>
          <label className="block font-sans text-[11px] uppercase tracking-wider font-semibold text-primary mb-1.5" htmlFor="destination">
            Service Location (Home/Venue in Siwan or Nearby)
          </label>
          <input
            className="w-full h-11 px-4 rounded-xl bg-surface-container-low text-on-surface font-sans text-[14px] focus:outline-none focus:ring-1 focus:ring-secondary/50 transition-colors border border-outline-variant/20"
            id="destination"
            placeholder="e.g. Siwan Town, Bihar (or nearby village/venue)"
            required
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>

        {/* Party Size Selector */}
        <div>
          <label className="block font-sans text-[11px] uppercase tracking-wider font-semibold text-primary mb-2">
            Number of Clients
          </label>
          <div className="grid grid-cols-4 gap-2">
            {['1', '2-3', '4-6', '7+'].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setFormData({ ...formData, partySize: val })}
                className={`flex items-center justify-center h-9 rounded-xl font-sans text-[12px] font-semibold transition-all border ${
                  formData.partySize === val
                    ? 'bg-primary text-on-primary border-primary shadow-xs'
                    : 'bg-surface-container-low text-primary border-outline-variant/20 hover:bg-surface-container'
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2.5">
          <button
            className="w-full h-11 rounded-full bg-primary text-on-primary font-sans text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md hover:bg-primary-container active:scale-[0.99] transition-all disabled:opacity-75"
            type="submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Booking Enquiry'}</span>
            <span className="material-symbols-outlined text-[16px]">
              {isSubmitting ? 'hourglass_top' : 'send'}
            </span>
          </button>

          <a
            className="w-full h-11 rounded-full bg-secondary-fixed text-on-secondary-fixed font-sans text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-secondary-fixed-dim active:scale-[0.99] transition-all border border-secondary/20 shadow-xs"
            href={`https://wa.me/919162143273?text=${whatsappMessage}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Send Details via WhatsApp</span>
          </a>
        </div>

        {/* Confirmation Message */}
        {isSubmitted && (
          <div
            className="p-4 rounded-xl bg-secondary-fixed/70 text-on-secondary-fixed text-center font-sans text-[13px] leading-relaxed border border-secondary/30 transition-all animate-fadeIn"
            id="booking-confirmation"
          >
            ✨ <strong>Thank you!</strong> Your enquiry has been received. Khushi will get back to you within 24 hours with date availability and booking confirmation.
          </div>
        )}
      </form>

      {/* Social Handle & Follow */}
      <div className="mt-6 text-center">
        <p className="font-serif text-[16px] text-primary">
          @khushimakeuparts
        </p>
        <p className="font-sans text-[12px] text-on-surface-variant mt-0.5">
          Professional Makeup Artist based in Siwan, Bihar
        </p>
      </div>
    </section>
  );
};
