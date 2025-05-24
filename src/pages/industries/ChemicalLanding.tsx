import React from 'react';
import { FlaskRound as Flask, Beaker, Atom, Brain, CheckCircle, AlertCircle, Radiation, Microscope, Gauge, Cog, Droplets, Leaf, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

const chemicalPosts = [
  {
    title: "Chemical and Materials R&D: Maximizing Tax Benefits",
    excerpt: "How chemical and materials companies can identify qualifying R&D activities and maximize tax savings.",
    link: "/blog/chemical-rd-credits",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80"
  }
];

function BlogPreviewCard({ title, excerpt, link, image }: { 
  title: string;
  excerpt: string;
  link: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img 
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1E293B] mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-[#64748B] mb-4 line-clamp-2">
          {excerpt}
        </p>
        <Link 
          to={link}
          className="inline-flex items-center text-[#124C56] hover:text-[#0A6C74] font-semibold group"
        >
          Read More 
          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

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

function ChemicalLanding() {
  const scrollToConsultation = () => {
    const consultationSection = document.querySelector('.calendly-inline-widget');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What chemical or materials work qualifies as R&D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Developing new formulations, testing alternative raw materials, improving durability, or solving chemical performance issues often qualifies under Section 41."
        }
      },
      {
        "@type": "Question",
        "name": "Do coatings, adhesives, or plastics innovation count as R&D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If the development process involves technical uncertainty and systematic experimentation, these types of product innovation are eligible."
        }
      },
      {
        "@type": "Question",
        "name": "Can routine quality control or batch production qualify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally no — routine or post-R&D processes aren't eligible. But if you're testing new blends or production methods, that may be considered qualifying research."
        }
      },
      {
        "@type": "Question",
        "name": "What kinds of documentation should chemical companies maintain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lab test results, formulation trials, experiment logs, raw material substitutions, and employee time tracking are all useful for credit documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Do failed formulations still qualify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The credit is based on attempting to solve technical uncertainty — failed experiments are still valid if part of a qualifying process."
        }
      },
      {
        "@type": "Question",
        "name": "Are pilot runs or scale-up trials eligible expenses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Often yes — as long as the runs are part of a process to evaluate or validate the formulation or manufacturing method under real conditions."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Chemical & Material R&D Tax Credit Guide"
        description="Learn how chemical and material industries can capitalize on R&D tax incentives."
        canonical="https://creditsgranted.com/rd-tax-credit/chemicals"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAMbJMUaUe1YXiy9Don8v73pUS2GtmLTblzgwZ)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            R&D Tax Credits for Chemical and Materials Companies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            From formulation to testing, turn your chemical and materials innovation into valuable tax credits.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToConsultation}
              className="bg-[#124C56] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A6C74] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Get Your Free Evaluation
            </button>
            <p className="text-white/80 text-sm">
              It only takes 15 minutes to find out if your lab or plant qualifies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Unlocking R&D Tax Credits for Chemical & Materials Innovation
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Formulation, testing, blending, and performance optimization often meet the IRS criteria for R&D tax credits. Whether you're developing new materials, improving chemical processes, or solving technical challenges, your innovation deserves recognition.
          </p>
          <p className="text-lg text-[#475569]">
            California's innovation hub status in materials, coatings, and composites means companies can benefit from both federal and state R&D incentives that reward technical advancement.
          </p>
        </section>

        {/* Section 2: Qualification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Does Your Company Qualify for R&D Credits?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Flask className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Formulation Work</h3>
              </div>
              <p className="text-[#475569]">Chemical formulas and blending optimization</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Microscope className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Materials Testing</h3>
              </div>
              <p className="text-[#475569]">Performance and durability validation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Atom className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Advanced Materials</h3>
              </div>
              <p className="text-[#475569]">Polymers, composites, and coatings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Gauge className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Process Innovation</h3>
              </div>
              <p className="text-[#475569]">Manufacturing and quality improvements</p>
            </div>
          </div>
          <div className="mt-6 bg-[#E6F2F3] p-6 rounded-lg">
            <p className="text-[#124C56] font-medium">
              Note: Qualifying work can happen in the lab, plant, or field — and doesn't require FDA or EPA approval to count.
            </p>
          </div>
        </section>

        {/* Section 3: Eligible Expenses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Eligible R&D Expenses You Can Claim
          </h2>
          <div className="space-y-4">
            {[
              'Wages for chemists, lab techs, and process engineers',
              'Supplies used in experiments and formulations',
              'Pilot runs and small-batch testing materials',
              'Third-party testing labs or formulation consultants'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
                <p className="text-[#475569]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Case Study */}
        <section className="mb-16 bg-[#F8FAFC] p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Real Results: R&D Credit Success in Chemicals
          </h2>
          <p className="text-lg text-[#475569] italic">
            "A Southern California coatings manufacturer claimed $145,000 in R&D credits for developing eco-friendly finishes and testing custom pigment blends for durability and performance."
          </p>
        </section>

        {/* Section 5: Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Our Process: From Formulation to Filing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Free discovery call + technical interview',
              'Wage + activity modeling',
              'Documentation and audit-ready R&D study',
              'CPA-ready filing support or handoff'
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#124C56] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-[#1E293B] font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Why Credits Granted?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1E293B]">11 years experience</p>
                <p className="text-[#475569]">Deep expertise in chemical R&D</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1E293B]">$72.5M+ saved for clients</p>
                <p className="text-[#475569]">Proven track record of success</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1E293B]">500+ R&D credit studies</p>
                <p className="text-[#475569]">Extensive industry experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1E293B]">Technical expertise</p>
                <p className="text-[#475569]">We understand your processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            From Our Blog: Chemical & Materials R&D Insights
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Learn how companies are turning testing and formulation into tax credit wins.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {chemicalPosts.map((post, index) => (
              <BlogPreviewCard
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                link={post.link}
                image={post.image}
              />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
            Frequently Asked Questions: Chemical & Materials R&D Credits
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FAQItem 
              question="What chemical or materials work qualifies as R&D?"
              answer="Developing new formulations, testing alternative raw materials, improving durability, or solving chemical performance issues often qualifies under Section 41."
            />
            <FAQItem 
              question="Do coatings, adhesives, or plastics innovation count as R&D?"
              answer="Yes. If the development process involves technical uncertainty and systematic experimentation, these types of product innovation are eligible."
            />
            <FAQItem 
              question="Can routine quality control or batch production qualify?"
              answer="Generally no — routine or post-R&D processes aren't eligible. But if you're testing new blends or production methods, that may be considered qualifying research."
            />
            <FAQItem 
              question="What kinds of documentation should chemical companies maintain?"
              answer="Lab test results, formulation trials, experiment logs, raw material substitutions, and employee time tracking are all useful for credit documentation."
            />
            <FAQItem 
              question="Do failed formulations still qualify?"
              answer="Yes. The credit is based on attempting to solve technical uncertainty — failed experiments are still valid if part of a qualifying process."
            />
            <FAQItem 
              question="Are pilot runs or scale-up trials eligible expenses?"
              answer="Often yes — as long as the runs are part of a process to evaluate or validate the formulation or manufacturing method under real conditions."
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
            Start Your R&D Credit Evaluation
          </h2>
          <p className="text-xl mb-8">
            If your team is developing new blends, materials, or formulations, your innovation could qualify for valuable credits. Let's find out — book your free evaluation today.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default ChemicalLanding;