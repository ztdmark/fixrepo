import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ConsultationSection from './ConsultationSection';
import FloatingCTA from './FloatingCTA';
import ScrollToTop from './ScrollToTop';
import GoogleAnalytics from './GoogleAnalytics';

interface LayoutProps {
  children: React.ReactNode;
  hideConsultation?: boolean;
}

function Layout({ children, hideConsultation = false }: LayoutProps) {
  const location = useLocation();
  const isCalculatorPage = location.pathname === '/calculator';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <GoogleAnalytics />
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        {children}
        {!hideConsultation && !isCalculatorPage && <ConsultationSection />}
      </main>
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default Layout;