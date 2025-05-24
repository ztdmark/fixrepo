import React from 'react';

function FloatingCTA() {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('.calendly-inline-widget');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToCalendly}
      className="fixed bottom-8 right-8 z-50 bg-[#0A6C74] hover:bg-[#085962] text-white font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
    >
      Schedule Your Free Consultation
    </button>
  );
}

export default FloatingCTA;