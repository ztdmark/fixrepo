import React from 'react';
import { FlaskRound as Flask, Microscope, Dna, Brain, CheckCircle, Beaker, Radiation, Scan, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

const biotechPosts = [
  {
    title: "R&D Tax Credits for Biotech and Pharmaceuticals",
    excerpt: "How biotech and pharmaceutical companies can leverage R&D credits for their research activities.",
    link: "/blog/biotech-rd-credits",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
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

function BiotechLanding() {
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
        "name": "What biotech or pharma work qualifies for the R&D tax credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Developing new compounds, conducting preclinical or clinical trials, designing delivery systems, and performing lab-based diagnostics are commonly qualifying activities."
        }
      },
      {
        "@type": "Question",
        "name": "Can pre-revenue biotech companies still claim the credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. As long as qualifying R&D is performed, pre-revenue companies — including those with no product on market — may still be eligible for credits (and can even offset payroll tax)."
        }
      },
      {
        "@type": "Question",
        "name": "What expenses in biotech/pharma are typically eligible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Qualified employee wages, lab testing supplies, third-party CRO work, data analysis software, and prototype development often count toward the credit."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need FDA approval for the R&D to qualify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The IRS cares about the technical process, not regulatory outcomes — pre-approval lab work, experimentation, and formulation still qualify."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim the R&D credit if I received a government grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Possibly. Work funded by non-taxable government grants (e.g., NIH) may not qualify, but self-funded or venture-backed R&D usually does."
        }
      },
      {
        "@type": "Question",
        "name": "What documentation should life sciences companies keep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lab notebooks, protocols, batch records, experiment logs, employee time tracking, and project plans are all helpful for a strong, audit-ready claim."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Biotech & Pharma R&D Tax Credit Insights"
        description="Explore how biotech and pharma companies can leverage R&D tax credits for research advancements."
        canonical="https://creditsgranted.com/rd-tax-credit/biotechnology"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAA7Hzse8wqxNbf9VHcdSy3BTCX24kUKR7hli8)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            R&D Tax Credits for Biotechnology and Pharmaceutical Companies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            From drug development to diagnostic tools, turn your life sciences innovation into valuable tax credits.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToConsultation}
              className="bg-[#124C56] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A6C74] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Get Your Free Evaluation
            </button>
            <p className="text-white/80 text-sm">
              It only takes 15 minutes to determine your eligibility
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Unlocking R&D Tax Credits in Biotech and Pharma
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Biotech and pharmaceutical companies performing drug development, lab testing, diagnostics, and preclinical work often qualify for substantial R&D tax credits. Whether you're developing therapies, optimizing formulations, or creating diagnostic tools, your technical advancement deserves recognition.
          </p>
          <p className="text-lg text-[#475569]">
            California's role as a biotech hub means companies can benefit from both federal and state R&D incentives that reward life sciences innovation.
          </p>
        </section>

        {/* Section 2: Qualification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Does Your Life Sciences Company Qualify?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Flask className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Drug Development</h3>
              </div>
              <p className="text-[#475569]">Novel therapeutics and formulation work</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Microscope className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Clinical Research</h3>
              </div>
              <p className="text-[#475569]">Preclinical and clinical trial activities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Scan className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Diagnostic Tools</h3>
              </div>
              <p className="text-[#475569]">Medical device and testing development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">AI Drug Discovery</h3>
              </div>
              <p className="text-[#475569]">Computational biology and screening</p>
            </div>
          </div>
          <div className="mt-6 bg-[#E6F2F3] p-6 rounded-lg">
            <p className="text-[#124C56] font-medium">
              Note: Both VC-backed startups and mature life sciences companies can qualify — even in the pre-revenue phase.
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
              'Wages for researchers, chemists, lab technicians, and regulatory teams',
              'Supplies for trials, assays, and analytical testing',
              'Contract research with CROs, universities, or labs',
              'Software tools used for modeling or data collection'
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
            Real Results: R&D Credit Success in Biotech
          </h2>
          <p className="text-lg text-[#475569] italic">
            "A pre-revenue biotech firm in San Diego claimed $260,000+ in R&D credits by documenting early-stage lab work, formulation iterations, and preclinical contract research."
          </p>
        </section>

        {/* Section 5: Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Our Process: From Molecule to Money Back
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Discovery call and technical interview',
              'Project + wage modeling',
              'Documentation and audit-ready study',
              'Final deliverables and support for filing'
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
                <p className="text-[#475569]">Deep expertise in biotech R&D</p>
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
                <p className="font-medium text-[#1E293B]">FDA compliance expertise</p>
                <p className="text-[#475569]">We understand your requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            From Our Blog: Life Sciences R&D Insights
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Discover how biotech startups and drug innovators are turning lab work into tax credit wins.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {biotechPosts.map((post, index) => (
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
            Frequently Asked Questions: Biotech, Pharma & R&D Credits
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FAQItem 
              question="What biotech or pharma work qualifies for the R&D tax credit?"
              answer="Developing new compounds, conducting preclinical or clinical trials, designing delivery systems, and performing lab-based diagnostics are commonly qualifying activities."
            />
            <FAQItem 
              question="Can pre-revenue biotech companies still claim the credit?"
              answer="Yes. As long as qualifying R&D is performed, pre-revenue companies — including those with no product on market — may still be eligible for credits (and can even offset payroll tax)."
            />
            <FAQItem 
              question="What expenses in biotech/pharma are typically eligible?"
              answer="Qualified employee wages, lab testing supplies, third-party CRO work, data analysis software, and prototype development often count toward the credit."
            />
            <FAQItem 
              question="Do I need FDA approval for the R&D to qualify?"
              answer="No. The IRS cares about the technical process, not regulatory outcomes — pre-approval lab work, experimentation, and formulation still qualify."
            />
            <FAQItem 
              question="Can I claim the R&D credit if I received a government grant?"
              answer="Possibly. Work funded by non-taxable government grants (e.g., NIH) may not qualify, but self-funded or venture-backed R&D usually does."
            />
            <FAQItem 
              question="What documentation should life sciences companies keep?"
              answer="Lab notebooks, protocols, batch records, experiment logs, employee time tracking, and project plans are all helpful for a strong, audit-ready claim."
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
            If your team is developing therapies, testing compounds, or solving life sciences challenges, you likely qualify. Book your free consultation today.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default BiotechLanding;