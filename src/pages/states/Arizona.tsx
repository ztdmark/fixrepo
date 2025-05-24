import React from 'react';
import { Calculator, CheckCircle, DollarSign, FileCheck, Brain, Cloud, Network, Lock, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-[#1E293B]">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-[#124C56] transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="text-[#475569]">{answer}</p>
      </div>
    </div>
  );
}

function Arizona() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Arizona's R&D credit refundable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only for small businesses with fewer than 150 employees. Other businesses receive a non-refundable credit."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifies as R&D in Arizona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any activity that meets the federal IRC §41 definition and is performed in Arizona."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I carry forward unused credits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Credits can be carried forward for 10-15 years depending on the tax year in which they were earned."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Arizona R&D Tax Credit | Credits Granted"
        description="Maximize your Arizona R&D tax credits with expert guidance. Learn how Arizona's refundable credit structure benefits innovative businesses."
        canonical="https://creditsgranted.com/state-rd-tax-credit/arizona"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Arizona R&D Tax Credit Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Maximize your innovation with Arizona's generous R&D tax incentives
          </p>
          <CTAButton>
            Get Your Free Evaluation
          </CTAButton>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Arizona's R&D Tax Credit Program
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Arizona offers one of the most competitive R&D tax credit programs in the United States, with rates up to 24% of qualifying research expenses. The program includes special provisions for small businesses, making it particularly attractive for growing companies.
          </p>
        </section>

        {/* Credit Details */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Program Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Forms Required</h3>
              <p className="text-[#475569]">Form 308 (plus Form 308-SBI for small business refund applications)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Eligible Entities</h3>
              <p className="text-[#475569]">C-Corps, S-Corps, Partnerships, LLCs</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Type</h3>
              <p className="text-[#475569]">Nonrefundable (Partially refundable for small businesses under 150 employees)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Percentage</h3>
              <p className="text-[#475569]">24% of first $2.5M in QREs, 15% above $2.5M; plus 10% for university basic research</p>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">QREs must be incurred in Arizona</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Activities must meet IRC §41 definition</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Refundable portion requires pre-approval by Arizona Commerce Authority</p>
            </div>
          </div>
        </section>

        {/* Small Business Benefits */}
        <section className="mb-16 bg-[#E6F2F3] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Small Business Benefits</h2>
          <p className="text-[#475569] mb-4">
            Companies with fewer than 150 employees may be eligible for partial refunds of their R&D credit, providing immediate cash benefit even without tax liability.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-[#1E293B] mb-2">Refundable Credit</h3>
              <p className="text-[#475569]">Portion of unused credit can be refunded</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-[#1E293B] mb-2">Pre-approval Required</h3>
              <p className="text-[#475569]">Submit Form 308-SBI for qualification</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FAQItem 
              question="Is Arizona's R&D credit refundable?"
              answer="Only for small businesses with fewer than 150 employees. Other businesses receive a non-refundable credit."
            />
            <FAQItem 
              question="What qualifies as R&D in Arizona?"
              answer="Any activity that meets the federal IRC §41 definition and is performed in Arizona."
            />
            <FAQItem 
              question="How long can I carry forward unused credits?"
              answer="Credits can be carried forward for 10-15 years depending on the tax year in which they were earned."
            />
          </div>
        </section>

        {/* Inject FAQ Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* CTA Section */}
        <section className="bg-[#124C56] text-white p-12 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Maximize Your Arizona R&D Tax Credits
          </h2>
          <p className="text-xl mb-8">
            Start with a free, no-obligation evaluation to see how much you could save under Arizona's program.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default Arizona;