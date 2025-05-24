import React from 'react';
import { Plane, Rocket, Shield, CheckCircle, Brain, Cloud, Network, Lock, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

const aerospacePosts = [
  {
    title: "R&D Tax Credits for Aerospace and Defense: How to Qualify and Maximize Savings",
    excerpt: "How aerospace and defense companies can maximize tax savings through R&D credits.",
    link: "/blog/aerospace-rd-credits",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80"
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

function AerospaceLanding() {
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
        "name": "What aerospace activities qualify for the R&D tax credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engineering new aircraft components, optimizing materials, simulation modeling, software development, and solving performance or compliance challenges are all potentially eligible."
        }
      },
      {
        "@type": "Question",
        "name": "Can DOD or NASA contractors claim the credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — contractors can claim the credit if they retain financial risk or technical control over the work. Government-funded R&D generally doesn't qualify unless structured properly."
        }
      },
      {
        "@type": "Question",
        "name": "Does defense-related testing or prototyping count as R&D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Iterative prototyping, flight testing, or qualifying parts for defense standards often meets the IRS criteria for experimentation and uncertainty."
        }
      },
      {
        "@type": "Question",
        "name": "What documentation helps support aerospace R&D claims?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engineering logs, CAD files, testing data, simulation reports, contracts showing ownership of work, and technical meeting notes are all helpful."
        }
      },
      {
        "@type": "Question",
        "name": "What types of employees qualify as R&D contributors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engineers, software developers, systems designers, and even project managers directing technical activities may count toward eligible wages."
        }
      },
      {
        "@type": "Question",
        "name": "Can R&D credits be used against AMT or payroll taxes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — small aerospace firms (under $5M in gross receipts) may offset payroll taxes, and many credits can be carried forward to offset future AMT."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="Aerospace R&D Tax Credit Overview"
        description="Qualify aircraft design, testing, and simulation under federal and state credits."
        canonical="https://creditsgranted.com/rd-tax-credit/aerospace"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAQ79W1Ps91JOHeKvPz6Q2pXCTrFZGklM4LVaq)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            R&D Tax Credits for Aerospace and Defense Companies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            From advanced avionics to defense systems, turn your technical innovations into valuable tax credits.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToConsultation}
              className="bg-[#124C56] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A6C74] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Get Your Free Evaluation
            </button>
            <p className="text-white/80 text-sm">
              It only takes 15 minutes to find out if your projects qualify
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Unlocking R&D Tax Credits for Aerospace and Defense
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Advanced design, engineering, systems integration, and compliance work in aerospace and defense often qualifies for valuable R&D tax credits. Whether you're a prime contractor or specialized supplier, your technical innovation deserves recognition.
          </p>
          <p className="text-lg text-[#475569]">
            California's strong aerospace sector benefits from both federal and state R&D incentives that reward technical advancement and problem-solving.
          </p>
        </section>

        {/* Section 2: Qualification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Does Your Aerospace or Defense Business Qualify?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Plane className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Systems Development</h3>
              </div>
              <p className="text-[#475569]">Avionics, flight systems, and component design</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Shield className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Defense Innovation</h3>
              </div>
              <p className="text-[#475569]">Advanced defense systems and security solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Network className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Integration Testing</h3>
              </div>
              <p className="text-[#475569]">Systems integration and performance validation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Rocket className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Space Systems</h3>
              </div>
              <p className="text-[#475569]">Spacecraft and satellite technology development</p>
            </div>
          </div>
          <div className="mt-6 bg-[#E6F2F3] p-6 rounded-lg">
            <p className="text-[#124C56] font-medium">
              Note: Both prime contractors and subcontractors may qualify — even under strict confidentiality requirements.
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
              'Wages for engineers, designers, and project managers',
              'Materials and supplies for prototypes and testing',
              'Contract research and engineering support',
              'Specialized testing equipment and facilities'
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
            Real Results: R&D Credit Success in Aerospace
          </h2>
          <p className="text-lg text-[#475569] italic">
            "A Southern California aerospace subcontractor claimed $220,000+ in R&D credits by documenting wages, simulation time, and advanced material testing."
          </p>
        </section>

        {/* Section 5: Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Our Process: From Tech Specs to Tax Credit
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Free consult + technical qualification call',
              'Project and wage modeling',
              'Full R&D study with audit defense documentation',
              'CPA-ready submission package'
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
                <p className="text-[#475569]">Deep expertise in aerospace R&D</p>
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
                <p className="font-medium text-[#1E293B]">DOD contracting expertise</p>
                <p className="text-[#475569]">We understand your requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            From Our Blog: Aerospace R&D Insights
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Explore how innovative aerospace and defense teams are earning significant tax savings through R&D credits.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {aerospacePosts.map((post, index) => (
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
            Frequently Asked Questions: Aerospace & Defense R&D Credits
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FAQItem 
              question="What aerospace activities qualify for the R&D tax credit?"
              answer="Engineering new aircraft components, optimizing materials, simulation modeling, software development, and solving performance or compliance challenges are all potentially eligible."
            />
            <FAQItem 
              question="Can DOD or NASA contractors claim the credit?"
              answer="Yes — contractors can claim the credit if they retain financial risk or technical control over the work. Government-funded R&D generally doesn't qualify unless structured properly."
            />
            <FAQItem 
              question="Does defense-related testing or prototyping count as R&D?"
              answer="Yes. Iterative prototyping, flight testing, or qualifying parts for defense standards often meets the IRS criteria for experimentation and uncertainty."
            />
            <FAQItem 
              question="What documentation helps support aerospace R&D claims?"
              answer="Engineering logs, CAD files, testing data, simulation reports, contracts showing ownership of work, and technical meeting notes are all helpful."
            />
            <FAQItem 
              question="What types of employees qualify as R&D contributors?"
              answer="Engineers, software developers, systems designers, and even project managers directing technical activities may count toward eligible wages."
            />
            <FAQItem 
              question="Can R&D credits be used against AMT or payroll taxes?"
              answer="Yes — small aerospace firms (under $5M in gross receipts) may offset payroll taxes, and many credits can be carried forward to offset future AMT."
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
            If your aerospace or defense projects involve technical design, problem-solving, or prototype testing, you likely qualify. Book your free evaluation today.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default AerospaceLanding;