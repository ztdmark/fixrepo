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

function Florida() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the application window for Florida's R&D credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applications must be submitted between March 20-27. The narrow window is strictly enforced, and credits are awarded on a first-come, first-served basis until the cap is reached."
        }
      },
      {
        "@type": "Question",
        "name": "What industries qualify as 'Target Industries' in Florida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Qualifying industries include manufacturing, life sciences, information technology, aviation/aerospace, homeland security/defense, cloud IT, marine sciences, materials science, and nanotechnology."
        }
      },
      {
        "@type": "Question",
        "name": "How is the credit calculated if the program is oversubscribed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If approved applications exceed the $9M annual cap, credits are allocated proportionally among all approved applicants based on their qualified research expenses."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Florida R&D Tax Credit | Credits Granted"
        description="Florida offers R&D credits for qualifying companies. Learn how to claim the credit and reduce your tax liability efficiently."
        canonical="https://creditsgranted.com/state-rd-tax-credit/florida"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Florida R&D Tax Credit Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Support innovation in the Sunshine State with targeted industry R&D incentives
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
            Florida's R&D Tax Credit Program
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Florida offers a competitive R&D tax credit program specifically for qualified target industries, with a unique annual application window in March. The program rewards increased research spending and supports high-tech sector growth.
          </p>
        </section>

        {/* Credit Details */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Program Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Forms Required</h3>
              <p className="text-[#475569]">F-1193EC (application), F-1120 (claim)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Eligible Entities</h3>
              <p className="text-[#475569]">C-Corps only in qualified target industries</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Type</h3>
              <p className="text-[#475569]">Non-refundable</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Percentage</h3>
              <p className="text-[#475569]">10% of excess Florida QREs over prior 4-year average</p>
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
                <h3 className="font-semibold text-[#1E293B]">Annual Application</h3>
              </div>
              <p className="text-[#475569]">March 20-27 window only</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <DollarSign className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">$9M Annual Cap</h3>
              </div>
              <p className="text-[#475569]">Competitive allocation process</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Target Industries</h3>
              </div>
              <p className="text-[#475569]">Specific sectors only</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <FileCheck className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Increased Spending</h3>
              </div>
              <p className="text-[#475569]">Based on 4-year average</p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-16 bg-[#E6F2F3] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must be a certified 'Qualified Target Industry' business</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must increase R&D spending in Florida</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must apply during March application window</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">C-Corporation status required</p>
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
              question="When is the application window for Florida's R&D credit?"
              answer="Applications must be submitted between March 20-27. The narrow window is strictly enforced, and credits are awarded on a first-come, first-served basis until the cap is reached."
            />
            <FAQItem 
              question="What industries qualify as 'Target Industries' in Florida?"
              answer="Qualifying industries include manufacturing, life sciences, information technology, aviation/aerospace, homeland security/defense, cloud IT, marine sciences, materials science, and nanotechnology."
            />
            <FAQItem 
              question="How is the credit calculated if the program is oversubscribed?"
              answer="If approved applications exceed the $9M annual cap, credits are allocated proportionally among all approved applicants based on their qualified research expenses."
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
            Maximize Your Florida R&D Tax Credits
          </h2>
          <p className="text-xl mb-8">
            Start with a free, no-obligation evaluation to see how much you could save under Florida's program.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default Florida;