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

function Vermont() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Vermont's credit calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vermont's credit equals 27% of the federal R&D credit amount attributable to Vermont research activities. The calculation is straightforward and directly tied to the federal credit."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to claim the federal credit first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Vermont's credit is only available to taxpayers who qualify for and claim the federal R&D credit. The state credit is calculated as a percentage of the federal credit."
        }
      },
      {
        "@type": "Question",
        "name": "How long can unused credits be carried forward?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unused Vermont R&D credits can be carried forward for up to 10 years, providing flexibility for companies with limited current tax liability."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Vermont R&D Tax Credit | Credits Granted"
        description="Vermont mirrors the federal R&D credit but adds unique state rules. Learn how to qualify and file confidently."
        canonical="https://creditsgranted.com/state-rd-tax-credit/vermont"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1570132173681-40ed8060fb4a?auto=format&fit=crop&w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vermont R&D Tax Credit Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Support innovation in the Green Mountain State with valuable R&D incentives
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
            Vermont's R&D Tax Credit Program
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Vermont offers a straightforward R&D tax credit program that builds directly on the federal credit. With a generous 27% rate applied to the federal credit amount, the program provides substantial support for Vermont-based research activities.
          </p>
        </section>

        {/* Credit Details */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Program Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Forms Required</h3>
              <p className="text-[#475569]">Form BA-404 (with corporate or individual return)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Eligible Entities</h3>
              <p className="text-[#475569]">All business entities</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Type</h3>
              <p className="text-[#475569]">Non-refundable</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Percentage</h3>
              <p className="text-[#475569]">27% of the federal R&D credit attributable to Vermont</p>
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
                <h3 className="font-semibold text-[#1E293B]">Simple Calculation</h3>
              </div>
              <p className="text-[#475569]">Based on federal credit</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <DollarSign className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">10-Year Carryforward</h3>
              </div>
              <p className="text-[#475569]">Extended use period</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">No State Cap</h3>
              </div>
              <p className="text-[#475569]">Unlimited program funding</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <FileCheck className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">All Entities Eligible</h3>
              </div>
              <p className="text-[#475569]">Broad qualification criteria</p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-16 bg-[#E6F2F3] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must qualify for and claim the federal R&D credit</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Research must be conducted in Vermont</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">No VT-specific base or computation required</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Credit tied directly to federal calculation</p>
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
              question="How is Vermont's credit calculated?"
              answer="Vermont's credit equals 27% of the federal R&D credit amount attributable to Vermont research activities. The calculation is straightforward and directly tied to the federal credit."
            />
            <FAQItem 
              question="Do I need to claim the federal credit first?"
              answer="Yes. Vermont's credit is only available to taxpayers who qualify for and claim the federal R&D credit. The state credit is calculated as a percentage of the federal credit."
            />
            <FAQItem 
              question="How long can unused credits be carried forward?"
              answer="Unused Vermont R&D credits can be carried forward for up to 10 years, providing flexibility for companies with limited current tax liability."
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
            Maximize Your Vermont R&D Tax Credits
          </h2>
          <p className="text-xl mb-8">
            Start with a free, no-obligation evaluation to see how much you could save under Vermont's program.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default Vermont;