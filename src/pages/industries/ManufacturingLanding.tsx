import React from 'react';
import { Factory, Cog, Wrench, Hammer, CheckCircle, Brain, PenTool as Tool, Gauge, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

const manufacturingPosts = [
  {
    title: "Case Study: Manufacturing Firm Secures $210,000 in R&D Credits",
    excerpt: "Learn how a manufacturing company maximized their R&D tax credits through process improvements and innovation.",
    link: "/blog/case-study-manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "R&D Tax Credits for Manufacturing: How to Qualify and Maximize Savings",
    excerpt: "Discover how manufacturers can identify qualifying activities and maximize their R&D tax credit claims.",
    link: "/blog/manufacturing-rd-credits",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
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

function ManufacturingLanding() {
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
        "name": "What counts as R&D in a manufacturing environment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Developing new products, improving production processes, designing tooling or automation, and experimenting with new materials or tolerances may qualify."
        }
      },
      {
        "@type": "Question",
        "name": "Do pilot runs and test batches qualify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If you're building test batches to validate performance or solve technical uncertainty, those costs often qualify."
        }
      },
      {
        "@type": "Question",
        "name": "Are process improvements R&D-eligible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They can be. If you're using a process of experimentation to improve quality, yield, throughput, or energy efficiency, it's likely eligible."
        }
      },
      {
        "@type": "Question",
        "name": "Can contract manufacturers claim the credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — if they retain technical risk, financial control, or own the process IP. It depends on the terms of the agreement."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prove that manufacturing work was R&D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Document design files, test logs, scrap rates, employee roles, and emails showing iterative development or problem-solving."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to succeed for the credit to apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The IRS rewards the attempt to solve uncertainty — success isn't required, just a qualified process."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="R&D Tax Credits for U.S. Manufacturers"
        description="From tooling to process improvements, see how manufacturers maximize R&D credits."
        canonical="https://creditsgranted.com/rd-tax-credit/manufacturing"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAHezs1lEpQoImAj9nr2vY0JLUgFRxiEtC58X3)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            R&D Tax Credits for Manufacturing Companies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Turn your manufacturing innovations into valuable tax credits. From process improvements to new product development, see how much you could save.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToConsultation}
              className="bg-[#124C56] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A6C74] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Get Your Free Evaluation
            </button>
            <p className="text-white/80 text-sm">
              It only takes 15 minutes to find out if you qualify
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Unlocking R&D Tax Credits for Manufacturers
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Many manufacturers qualify for R&D tax credits without realizing it. If you're developing new processes, improving production methods, or solving technical challenges, your work likely qualifies for valuable tax incentives.
          </p>
          <p className="text-lg text-[#475569]">
            California manufacturers can benefit from both federal and state R&D credits, potentially saving hundreds of thousands in taxes. Best of all, you don't need a formal R&D department — innovation happening on your production floor counts.
          </p>
        </section>

        {/* Section 2: Qualification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Does Your Manufacturing Business Qualify?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Factory className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Process Innovation</h3>
              </div>
              <p className="text-[#475569]">Improving production methods and efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Tool className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Tooling Development</h3>
              </div>
              <p className="text-[#475569]">Creating or improving tools and fixtures</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Gauge className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Quality Improvement</h3>
              </div>
              <p className="text-[#475569]">Enhancing product quality and consistency</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Brain className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Product Development</h3>
              </div>
              <p className="text-[#475569]">Creating new or improved products</p>
            </div>
          </div>
          <div className="mt-6 bg-[#E6F2F3] p-6 rounded-lg">
            <p className="text-[#124C56] font-medium">
              Note: Both successful and unsuccessful development efforts can qualify — it's about the technical process, not just the final outcome.
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
              'Wages for engineers, machinists, and technical leads',
              'Supplies used for prototypes and testing',
              'Contract engineering and design services',
              'Equipment time for testing and validation'
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
            Real Results: R&D Credit Success in Manufacturing
          </h2>
          <p className="text-lg text-[#475569] italic">
            "A Southern California manufacturer of custom industrial components claimed over $175,000 in R&D credits through design work, testing iterations, and tooling development."
          </p>
        </section>

        {/* Section 5: Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Our Process: From Shop Floor to Tax Credit
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Initial consultation and technical deep dive',
              'Project and wage modeling',
              'Documentation + audit-ready tax credit study',
              'Filing support and IRS audit defense'
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
                <p className="text-[#475569]">Deep expertise in manufacturing R&D</p>
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
                <p className="font-medium text-[#1E293B]">Manufacturing expertise</p>
                <p className="text-[#475569]">We understand your processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            From Our Blog: Manufacturing R&D Insights
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Learn how real manufacturers are solving problems and getting rewarded with tax credits.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {manufacturingPosts.map((post, index) => (
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
            Frequently Asked Questions: Manufacturing & R&D Credits
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FAQItem 
              question="What counts as R&D in a manufacturing environment?"
              answer="Developing new products, improving production processes, designing tooling or automation, and experimenting with new materials or tolerances may qualify."
            />
            <FAQItem 
              question="Do pilot runs and test batches qualify?"
              answer="Yes. If you're building test batches to validate performance or solve technical uncertainty, those costs often qualify."
            />
            <FAQItem 
              question="Are process improvements R&D-eligible?"
              answer="They can be. If you're using a process of experimentation to improve quality, yield, throughput, or energy efficiency, it's likely eligible."
            />
            <FAQItem 
              question="Can contract manufacturers claim the credit?"
              answer="Yes — if they retain technical risk, financial control, or own the process IP. It depends on the terms of the agreement."
            />
            <FAQItem 
              question="How do I prove that manufacturing work was R&D?"
              answer="Document design files, test logs, scrap rates, employee roles, and emails showing iterative development or problem-solving."
            />
            <FAQItem 
              question="Do I need to succeed for the credit to apply?"
              answer="No. The IRS rewards the attempt to solve uncertainty — success isn't required, just a qualified process."
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
            If your manufacturing team is developing new products, improving processes, or solving technical challenges, you likely qualify. Let's find out — book your free evaluation today.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default ManufacturingLanding;