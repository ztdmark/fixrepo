import React, { useEffect } from 'react';

function ConsultationSection() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-slate-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Schedule Your Free Consultation
      </h2>
      <div className="px-2">
        <div 
          className="calendly-inline-widget w-full" 
          data-url="https://calendly.com/rdtaxcredit/new-meeting?hide_gdpr_banner=1&primary_color=0a6c74" 
          style={{minWidth: "320px", height: "700px"}}
        />
      </div>
    </section>
  );
}

export default ConsultationSection;