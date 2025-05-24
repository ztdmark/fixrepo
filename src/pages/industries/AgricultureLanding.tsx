import React from 'react';
import { Wheat, Leaf, FlaskRound as Flask, Brain, CheckCircle, Droplets, Sprout, Scan, ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

const agriculturePosts = [
  {
    title: "Agricultural Innovation and R&D Tax Credits",
    excerpt: "Explore how agricultural businesses can qualify for R&D credits through innovative farming and food production.",
    link: "/blog/agriculture-rd-credits",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
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

function AgricultureLanding() {
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
        "name": "What qualifies as R&D in agriculture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Activities like improving irrigation systems, testing crop genetics, developing custom equipment, or enhancing food safety processes may qualify as R&D under IRS rules."
        }
      },
      {
        "@type": "Question",
        "name": "Do field trials and crop experiments count as R&D?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If you're using a scientific process to test hypotheses, evaluate outcomes, and improve techniques — even in a field setting — those trials may be eligible."
        }
      },
      {
        "@type": "Question",
        "name": "Can farms without full-time engineers still claim the credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many agricultural operations perform qualifying R&D without formal engineers. The key is that the work solves technical uncertainty through experimentation."
        }
      },
      {
        "@type": "Question",
        "name": "What expenses in agriculture typically qualify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Qualified wages, supplies for testing or prototyping, third-party research, and data collection tools are common eligible costs in ag-based R&D claims."
        }
      },
      {
        "@type": "Question",
        "name": "Does unsuccessful crop innovation still count?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The credit is based on the process, not the outcome — failed experiments can still be valid if they meet the 4-part test."
        }
      },
      {
        "@type": "Question",
        "name": "Can agtech startups also qualify for the R&D credit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Startups developing sensors, software platforms, drones, or hardware for agricultural use are often excellent candidates for the credit — even pre-revenue."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO 
        title="R&D Credits for Agriculture & Food Production"
        description="Discover how agricultural innovations can benefit from R&D tax incentives."
        canonical="https://creditsgranted.com/rd-tax-credit/agriculture"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center px-4"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAT6fa9ld0jqMQFvsuwz51gZD7LdryUIiHhexc)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            R&D Tax Credits for Agriculture and AgTech Companies
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            From crop optimization to precision agriculture, turn your farming innovations into valuable tax credits.
          </p>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={scrollToConsultation}
              className="bg-[#124C56] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0A6C74] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              Get Your Free Evaluation
            </button>
            <p className="text-white/80 text-sm">
              It only takes 15 minutes to find out if your farm qualifies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Section 1: Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Unlocking R&D Tax Credits in Agriculture
          </h2>
          <p className="text-lg text-[#475569] mb-6">
            Innovation in crop management, equipment design, irrigation, and agtech often qualifies for valuable R&D tax credits. Whether you're optimizing growing conditions, developing new farming methods, or creating agricultural technology, your technical advancement deserves recognition.
          </p>
          <p className="text-lg text-[#475569]">
            California's agricultural sector benefits from both federal and state R&D incentives that reward innovation in farming and food production.
          </p>
        </section>

        {/* Section 2: Qualification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Does Your Agriculture Business Qualify?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Droplets className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Irrigation Innovation</h3>
              </div>
              <p className="text-[#475569]">Smart irrigation and nutrient delivery systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Sprout className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Crop Development</h3>
              </div>
              <p className="text-[#475569]">Breeding programs and growing techniques</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Scan className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Precision Agriculture</h3>
              </div>
              <p className="text-[#475569]">Sensor networks and data-driven farming</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#E6F2F3] rounded-lg">
                  <Flask className="w-6 h-6 text-[#124C56]" />
                </div>
                <h3 className="font-semibold text-[#1E293B]">Food Processing</h3>
              </div>
              <p className="text-[#475569]">Processing and preservation methods</p>
            </div>
          </div>
          <div className="mt-6 bg-[#E6F2F3] p-6 rounded-lg">
            <p className="text-[#124C56] font-medium">
              Note: Innovation in the field, lab, or greenhouse can all qualify for R&D credits.
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
              'Wages for agronomists, engineers, and farm techs',
              'Supplies for field trials and testing plots',
              'Contracted research with universities or labs',
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
            Real Results: R&D Credit Success in Agriculture
          </h2>
          <p className="text-lg text-[#475569] italic">
            "A Central Valley farm claimed over $160,000 in federal and state R&D credits after optimizing its irrigation systems, experimenting with nutrient delivery, and piloting new drone-based crop monitoring."
          </p>
        </section>

        {/* Section 5: Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            Our Process: From Field Trials to Federal Credits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Discovery call + project identification',
              'Technical scoping and cost modeling',
              'Documentation and audit-ready tax credit study',
              'Final delivery and filing support'
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
                <p className="text-[#475569]">Deep expertise in agricultural R&D</p>
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
                <p className="font-medium text-[#1E293B]">Agricultural expertise</p>
                <p className="text-[#475569]">We understand farming innovation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
            From Our Blog: Agriculture R&D Insights
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Learn how innovative farms and agtech companies are turning fieldwork into tax savings.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {agriculturePosts.map((post, index) => (
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
            Frequently Asked Questions: Agriculture & R&D Credits
          </h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <FAQItem 
              question="What qualifies as R&D in agriculture?"
              answer="Activities like improving irrigation systems, testing crop genetics, developing custom equipment, or enhancing food safety processes may qualify as R&D under IRS rules."
            />
            <FAQItem 
              question="Do field trials and crop experiments count as R&D?"
              answer="Yes. If you're using a scientific process to test hypotheses, evaluate outcomes, and improve techniques — even in a field setting — those trials may be eligible."
            />
            <FAQItem 
              question="Can farms without full-time engineers still claim the credit?"
              answer="Yes. Many agricultural operations perform qualifying R&D without formal engineers. The key is that the work solves technical uncertainty through experimentation."
            />
            <FAQItem 
              question="What expenses in agriculture typically qualify?"
              answer="Qualified wages, supplies for testing or prototyping, third-party research, and data collection tools are common eligible costs in ag-based R&D claims."
            />
            <FAQItem 
              question="Does unsuccessful crop innovation still count?"
              answer="Absolutely. The credit is based on the process, not the outcome — failed experiments can still be valid if they meet the 4-part test."
            />
            <FAQItem 
              question="Can agtech startups also qualify for the R&D credit?"
              answer="Yes. Startups developing sensors, software platforms, drones, or hardware for agricultural use are often excellent candidates for the credit — even pre-revenue."
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
            From crops to code, your agricultural innovation may qualify. Let's find out — book a free consultation with Credits Granted today.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </section>
      </div>
    </Layout>
  );
}

export default AgricultureLanding;