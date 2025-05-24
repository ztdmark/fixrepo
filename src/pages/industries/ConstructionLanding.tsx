import React from 'react';
import { ArrowRight, HardHat, Ruler, Building2, Wrench, Calculator, ClipboardCheck, FileSpreadsheet } from 'lucide-react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { scrollToCalendly } from '../../utils/scroll';

interface QualificationItemProps {
  icon: React.ElementType;
  text: string;
}

const QualificationItem: React.FC<QualificationItemProps> = ({ icon: Icon, text }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0">
      <Icon className="w-6 h-6 text-[#124C56]" />
    </div>
    <p className="text-[#475569] text-lg">{text}</p>
  </div>
);

function ConstructionLanding() {
  return (
    <Layout>
      <SEO 
        title="Construction R&D Tax Credit | Credits Granted"
        description="Learn how construction firms qualify for the R&D tax credit — design-build, engineering, and more."
        canonical="https://creditsgranted.com/rd-tax-credit/construction"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAct3CSOV9ApWJmkXglCbKB9whQHFVxT70oeOZ)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Construction R&D Tax Credits
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Unlock hidden tax credits for design, engineering, and planning — all without lifting a finger.
          </p>
          <button 
            onClick={scrollToCalendly}
            className="bg-[#124C56] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0A6C74] transition-colors"
          >
            Calculate Your Credit
          </button>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
            Does Your Company Qualify?
          </h2>
          <div className="mb-12">
            <QualificationItem
              icon={Building2}
              text="Design-build firms developing innovative building solutions"
            />
            <QualificationItem
              icon={Wrench}
              text="Construction companies improving building methods or materials"
            />
            <QualificationItem
              icon={Ruler}
              text="Engineering teams creating new structural designs"
            />
            <QualificationItem
              icon={HardHat}
              text="Firms developing sustainable or energy-efficient building practices"
            />
            <QualificationItem
              icon={Calculator}
              text="Companies investing in construction technology or automation"
            />
            <QualificationItem
              icon={ClipboardCheck}
              text="Teams working on complex infrastructure projects"
            />
          </div>

          {/* Case Study Callout */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-8 mb-12">
            <p className="text-xl text-[#1E293B] mb-4">
              We helped a design-build construction firm earn over $180,000 in R&D credits. 
              <Link to="/blog/case-study-construction" className="text-[#124C56] hover:text-[#0A6C74] ml-2 inline-flex items-center">
                See how we did it <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
            Eligible Expenses
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Wages</h3>
              <ul className="list-disc pl-6 space-y-3 text-[#475569]">
                <li>Engineering and architectural staff time</li>
                <li>Project managers developing new methods</li>
                <li>Design team innovation hours</li>
                <li>Quality control personnel</li>
                <li>Technical documentation specialists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Supplies & Contract Research</h3>
              <ul className="list-disc pl-6 space-y-3 text-[#475569]">
                <li>Prototype materials and components</li>
                <li>Testing equipment and supplies</li>
                <li>Specialized software licenses</li>
                <li>Cloud computing resources</li>
                <li>Third-party engineering services</li>
                <li>Testing facility rentals</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-20 px-4 bg-[#124C56] text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                See How Much Your Construction Firm Could Save
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Book your free evaluation today and discover if your construction innovations qualify for R&D tax credits.
              </p>
              <button 
                onClick={scrollToCalendly}
                className="bg-white text-[#124C56] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get My Free Evaluation
              </button>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}

export default ConstructionLanding;