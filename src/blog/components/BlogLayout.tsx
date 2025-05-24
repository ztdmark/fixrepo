import React, { Children, isValidElement, cloneElement } from 'react';
import Navigation from '../../components/Navigation';
import ConsultationSection from '../../components/ConsultationSection';
import FloatingCTA from '../../components/FloatingCTA';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import BlogSidebar from './BlogSidebar';
import { Link } from 'react-router-dom';

interface BlogLayoutProps {
  children: React.ReactNode;
  categories?: string[];
}

function BlogLayout({ children, categories }: BlogLayoutProps) {
  // Map industry categories to their landing page URLs
  const industryToUrl: { [key: string]: string } = {
    'Aerospace & Defense': '/rd-tax-credit/aerospace',
    'Agriculture & Food Production': '/rd-tax-credit/agriculture',
    'Biotechnology & Pharmaceuticals': '/rd-tax-credit/biotechnology',
    'Chemical & Materials Engineering': '/rd-tax-credit/chemicals',
    'Construction': '/rd-tax-credit/construction',
    'Energy & Utilities': '/rd-tax-credit/energy',
    'Manufacturing': '/rd-tax-credit/manufacturing',
    'Software Development': '/rd-tax-credit/software'
  };

  // Find the first matching industry category
  const industry = categories?.find(category => industryToUrl.hasOwnProperty(category));
  const landingPageUrl = industry ? industryToUrl[industry] : null;

  // Function to insert banner after first paragraph
  const insertBannerAfterFirstParagraph = (children: React.ReactNode) => {
    let foundFirstParagraph = false;
    const banner = industry && landingPageUrl && (
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-6 mb-8">
        <p className="text-[#475569] text-lg">
          If you work in {industry}, explore our{' '}
          <Link 
            to={landingPageUrl}
            className="text-[#124C56] hover:text-[#0A6C74] font-semibold"
          >
            R&D Tax Credit for {industry} page
          </Link>{' '}
          to see if your business qualifies.
        </p>
      </div>
    );

    return Children.map(children, child => {
      if (!isValidElement(child)) return child;

      if (child.type === 'p' && !foundFirstParagraph) {
        foundFirstParagraph = true;
        return (
          <>
            {child}
            {banner}
          </>
        );
      }

      if (child.props.children) {
        return cloneElement(child, {
          ...child.props,
          children: insertBannerAfterFirstParagraph(child.props.children)
        });
      }

      return child;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {insertBannerAfterFirstParagraph(children)}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <ConsultationSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default BlogLayout;