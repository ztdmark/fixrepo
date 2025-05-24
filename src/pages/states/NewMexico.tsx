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

function NewMexico() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does New Mexico's rural area bonus work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Research conducted in rural areas receives double credit rates: 10% basic credit (vs 5%) and 10% additional credit (vs 5%) for payroll growth. This incentivizes R&D investment outside major urban centers."
        }
      },
      {
        "@type": "Question",
        "name": "What makes the credit refundable for some businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small businesses can receive a refund of unused credits. Other businesses can apply credits against gross receipts tax (GRT) or withholding tax for immediate benefit."
        }
      },
      {
        "@type": "Question",
        "name": "When must applications be submitted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applications must be submitted within one year after the end of the tax year in which the R&D was conducted. Late applications are not accepted."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="New Mexico R&D Tax Credit | Credits Granted"
        description="Discover how New Mexico supports research and tech growth with powerful R&D credits. Get expert support to claim yours."
        canonical="https://creditsgranted.com/state-rd-tax-credit/new-mexico"
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
            New Mexico R&D Tax Credit Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Support innovation in the Land of Enchantment with flexible R&D incentives
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
            New Mexico's R&D Tax Credit Program
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            New Mexico offers a unique two-tier R&D tax credit program with enhanced rates for rural areas and companies increasing payroll. The program includes refundable options for small businesses and flexibility in applying credits against various taxes.
          </p>
        </section>

        {/* Credit Details */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Program Details</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Forms Required</h3>
              <p className="text-[#475569]">Form RPD-41385 (application), Form RPD-41290 (claim)</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Eligible Entities</h3>
              <p className="text-[#475569]">All business entities</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Type</h3>
              <p className="text-[#475569]">Refundable (for small businesses or via offset to GRT/withholding); otherwise non-refundable</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#1E293B] mb-2">Credit Percentage</h3>
              <p className="text-[#475569]">5% basic (10% in rural areas); +5% additional for payroll growth (10% in rural areas)</p>
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
                <h3 className="font-semibold text-[#1E293B]">Rural Bonus</h3>
              </div>
              <p className="text-[#475569]">Double rates outside urban areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <DollarSign className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Payroll Growth Bonus</h3>
              </div>
              <p className="text-[#475569]">Additional credit for job creation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Flexible Application</h3>
              </div>
              <p className="text-[#475569]">Multiple tax offset options</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <FileCheck className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">3-Year Carryforward</h3>
              </div>
              <p className="text-[#475569]">Extended use period</p>
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="mb-16 bg-[#E6F2F3] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must apply within 1 year after tax year ends</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">R&D must be in NM and meet payroll criteria for additional credit</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Research must be conducted in New Mexico</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <p className="text-[#475569]">Must maintain documentation of qualifying activities</p>
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
              question="How does New Mexico's rural area bonus work?"
              answer="Research conducted in rural areas receives double credit rates: 10% basic credit (vs 5%) and 10% additional credit (vs 5%) for payroll growth. This incentivizes R&D investment outside major urban centers."
            />
            <FAQItem 
              question="What makes the credit refundable for some businesses?"
              answer="Small businesses can receive a refund of unused credits. Other businesses can apply credits against gross receipts tax (GRT) or withholding tax for immediate benefit."
            />
            <FAQItem 
              question="When must applications be submitted?"
              answer="Applications must be submitted within one year after the end of the tax year in which the R&D was conducted. Late applications are not accepted."
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
            Maximize Your New Mexico R&D Tax Credits
          </h2>
          <p className="text-xl mb-8">
            Start with a free, no-obligation evaluation to see how much you could save under New Mexico's program.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default NewMexico;