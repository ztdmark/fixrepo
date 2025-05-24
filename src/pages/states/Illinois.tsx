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

function Illinois() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Illinois calculate the base period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Illinois uses a 3-year rolling average of prior Illinois QREs as the base amount. The credit is calculated on expenses exceeding this base."
        }
      },
      {
        "@type": "Question",
        "name": "How do combined groups handle the credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Combined groups must use a unitary calculation approach, considering the group's total Illinois QREs and base amount collectively."
        }
      },
      {
        "@type": "Question",
        "name": "When does Illinois's R&D credit expire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The credit is currently available through tax years ending before January 1, 2027. Unused credits can be carried forward for 5 years."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Illinois R&D Tax Credit | Credits Granted"
        description="Illinois businesses may qualify for significant R&D tax credits. Learn what activities are eligible and how to claim them."
        canonical="https://creditsgranted.com/state-rd-tax-credit/illinois"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Illinois R&D Tax Credit Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Support innovation in the Prairie State with valuable R&D incentives
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Illinois's R&D Tax Credit Program
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Illinois offers a research and development tax credit that mirrors the federal structure but provides a flat 6.5% rate on increased research spending. The program is available through 2027 and includes special provisions for combined groups.
          </p>
        </section>

        {/* Credit Details */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Program Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Forms Required</h3>
              <p className="text-[#475569]">Schedule 1299-D (corporations), Schedule CR (individuals)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Eligible Entities</h3>
              <p className="text-[#475569]">Corporations, Partnerships, Trusts</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Type</h3>
              <p className="text-[#475569]">Non-refundable</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Percentage</h3>
              <p className="text-[#475569]">6.5% of Illinois QREs above 3-year base</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Key Program Features</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Flat Rate</h3>
              </div>
              <p className="text-[#475569]">6.5% on increased spending</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <DollarSign className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">5-Year Carryforward</h3>
              </div>
              <p className="text-[#475569]">Extended use period</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Unitary Calculation</h3>
              </div>
              <p className="text-[#475569]">Combined group provisions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <FileCheck className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Available through 2027</h3>
              </div>
              <p className="text-[#475569]">Current sunset date</p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-16 bg-[#E6F2F3] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must have increased Illinois R&D expenses</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Based on IRC §41 definitions</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Applies to in-state QREs only</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Combined groups use a unitary calculation</p>
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
              question="How does Illinois calculate the base period?"
              answer="Illinois uses a 3-year rolling average of prior Illinois QREs as the base amount. The credit is calculated on expenses exceeding this base."
            />
            <FAQItem 
              question="How do combined groups handle the credit?"
              answer="Combined groups must use a unitary calculation approach, considering the group's total Illinois QREs and base amount collectively."
            />
            <FAQItem 
              question="When does Illinois's R&D credit expire?"
              answer="The credit is currently available through tax years ending before January 1, 2027. Unused credits can be carried forward for 5 years."
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
            Maximize Your Illinois R&D Tax Credits
          </h2>
          <p className="text-xl mb-8">
            Start with a free, no-obligation evaluation to see how much you could save under Illinois's program.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default Illinois;