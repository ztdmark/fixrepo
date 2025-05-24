export const scrollToCalendly = () => {
  const calendlySection = document.querySelector('.calendly-inline-widget');
  if (calendlySection) {
    calendlySection.scrollIntoView({ behavior: 'smooth' });
  }
};