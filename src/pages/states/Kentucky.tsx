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

function Kentucky() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of facilities qualify for Kentucky's R&D credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The credit applies to tangible, depreciable property used for R&D activities in Kentucky. This includes labs, testing facilities, and research equipment."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Kentucky's credit different from other states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kentucky focuses on physical R&D infrastructure rather than operational expenses. The credit rewards capital investment in research facilities and equipment."
        }
      },
      {
        "@type": "Question",
        "name": "How long can unused credits be carried forward?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unused credits can be carried forward for up to 10 years and can offset both income tax and Limited Liability Entity Tax (LLET)."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Kentucky R&D Tax Credit | Credits Granted"
        description="Learn how Kentucky businesses can benefit from R&D incentives. Identify qualifying projects and maximize your return."
        canonical="https://creditsgranted.com/state-rd-tax-credit/kentucky"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506974210756-8e1b8985d348?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kentucky R&D Tax Credit Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Support research infrastructure in the Bluegrass State with facility-focused R&D incentives
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
            Kentucky's R&D Tax Credit Program
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Kentucky offers a unique R&D tax credit program focused on research infrastructure and facilities. The program provides enhanced rates for investments in economic development areas and supports long-term research capability development.
          </p>
        </section>

        {/* Credit Details */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Program Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Forms Required</h3>
              <p className="text-[#475569]">Schedule QR</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Eligible Entities</h3>
              <p className="text-[#475569]">Corporations and Pass-through Entities with income or LLET</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Type</h3>
              <p className="text-[#475569]">Non-refundable</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Percentage</h3>
              <p className="text-[#475569]">5% of facility investment costs (or 15% in economic development areas)</p>
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
                <h3 className="font-semibold text-[#1E293B]">Facility Focus</h3>
              </div>
              <p className="text-[#475569]">Infrastructure investment credit</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <DollarSign className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Enhanced Rates</h3>
              </div>
              <p className="text-[#475569]">15% in development areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">10-Year Carryforward</h3>
              </div>
              <p className="text-[#475569]">Extended use period</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <FileCheck className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">LLET Offset</h3>
              </div>
              <p className="text-[#475569]">Multiple tax applications</p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-16 bg-[#E6F2F3] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must construct or improve facilities for R&D in Kentucky</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Only applies to tangible, depreciable property</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Research must be conducted in Kentucky</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must maintain documentation of facility investments</p>
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
              question="What types of facilities qualify for Kentucky's R&D credit?"
              answer="The credit applies to tangible, depreciable property used for R&D activities in Kentucky. This includes labs, testing facilities, and research equipment."
            />
            <FAQItem 
              question="Why is Kentucky's credit different from other states?"
              answer="Kentucky focuses on physical R&D infrastructure rather than operational expenses. The credit rewards capital investment in research facilities and equipment."
            />
            <FAQItem 
              question="How long can unused credits be carried forward?"
              answer="Unused credits can be carried forward for up to 10 years and can offset both income tax and Limited Liability Entity Tax (LLET)."
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
            Maximize Your Kentucky R&D Tax Credits
          </h2>
          <p className="text-xl mb-8">
            Start with a free, no-obligation evaluation to see how much you could save under Kentucky's program.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default Kentucky;