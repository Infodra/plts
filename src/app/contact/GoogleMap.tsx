"use client";

import { COMPANY } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p className="text-gray-600">
            Visit us at our office in Doha, Qatar
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src={COMPANY.mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PLTS Qatar Office Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
