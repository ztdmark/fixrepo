import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

function CTAButton({ children, className = '' }: CTAButtonProps) {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('.calendly-inline-widget');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToCalendly}
      className={`bg-white text-[#124C56] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
}

export default CTAButton;