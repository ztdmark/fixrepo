import React from 'react';
import { FlaskRound as Flask, Microscope, Dna, Brain, CheckCircle, AlertCircle, Beaker, Radiation, Scan } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function ActivityCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-[#E6F2F3] rounded-lg">
          <Icon className="w-6 h-6 text-[#124C56]" />
        </div>
        <h4 className="font-semibold text-[#1E293B]">{title}</h4>
      </div>
      <p className="text-[#475569] text-sm">{description}</p>
    </div>
  );
}

function ProjectExample({ icon: Icon, title, description, points }: {
  icon: any;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <Icon className="w-8 h-8 text-[#124C56]" />
        </div>
        <h3 className="text-xl font-semibold text-[#124C56]">{title}</h3>
      </div>
      <p className="text-[#475569] mb-6">{description}</p>
      
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
            <span className="text-[#475569]">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TestCriteria({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 mb-6 last:mb-0">
      <CheckCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-[#1E293B] mb-1">{title}</h4>
        <p className="text-[#475569]">{description}</p>
      </div>
    </div>
  );
}

function Biotech() {
  return (
    <BlogLayout categories={['Biotechnology & Pharmaceuticals']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for Biotechnology and Pharmaceuticals: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80" 
            alt="Biotech Research Laboratory" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Biotechnology and pharmaceutical companies invest heavily in innovation — from developing new therapies to improving lab techniques. Fortunately, many of these R&D activities can qualify for valuable federal and state tax credits. Here's how life sciences companies can maximize their R&D tax savings.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Biotech and Pharma
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Flask}
                title="Drug Development"
                description="Developing new pharmaceutical compounds, biologics, or therapeutic solutions."
              />
              <ActivityCard
                icon={Microscope}
                title="Clinical Trials"
                description="Conducting trials to evaluate drug efficacy, safety, and optimal dosing."
              />
              <ActivityCard
                icon={Beaker}
                title="Process Improvements"
                description="Enhancing production methods, optimizing formulations, or scaling lab processes."
              />
              <ActivityCard
                icon={Scan}
                title="Diagnostic Tools"
                description="Creating diagnostic tests, medical devices, or biomarker identification systems."
              />
              <ActivityCard
                icon={Radiation}
                title="Regulatory Testing"
                description="Technical development and testing to meet FDA standards and requirements."
              />
              <ActivityCard
                icon={Brain}
                title="AI Drug Discovery"
                description="Using artificial intelligence to accelerate drug discovery and development."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Activities focused on new methods, improved functionality, or technical uncertainty generally qualify — even if the project is later abandoned.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Biotech and Pharma Projects
            </h2>

            <ProjectExample
              icon={Dna}
              title="Novel Drug Delivery Systems"
              description="Developing innovative methods for drug delivery and absorption."
              points={[
                "Nanotechnology-based delivery systems",
                "Controlled release formulations",
                "Targeted therapy mechanisms",
                "Novel administration methods"
              ]}
            />

            <ProjectExample
              icon={Flask}
              title="Biologics Development"
              description="Engineering complex biological products for therapeutic use."
              points={[
                "Vaccine development and optimization",
                "Monoclonal antibody production",
                "Gene therapy vectors",
                "Cell-based therapeutics"
              ]}
            />

            <ProjectExample
              icon={Brain}
              title="AI-Driven Drug Discovery"
              description="Leveraging artificial intelligence to accelerate research."
              points={[
                "Predictive modeling for drug candidates",
                "Machine learning for target identification",
                "Automated screening processes",
                "Data analysis optimization"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Biotech Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving therapeutic products, research methods, or manufacturing processes."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using biological sciences, chemistry, or computational methods to solve technical challenges."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Addressing unknowns in drug efficacy, manufacturing processes, or biological mechanisms."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting systematic testing, clinical trials, and validation studies to evaluate solutions."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Biotech R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document research protocols and experimental methods thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track time spent on qualified research activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain detailed lab records and clinical trial data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Separate non-qualifying activities like marketing or routine testing</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Fund Innovation While Reducing Tax Burden
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Biotechnology and pharmaceutical innovation drives major advancements in healthcare — and the R&D tax credit rewards that effort. Credits Granted helps life sciences companies claim every available dollar with audit-ready studies customized for the industry's unique challenges.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Biotech and Pharma R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you fund innovation while reducing your tax burden.
            </p>
            <CTAButton>
              Get My Free Evaluation
            </CTAButton>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}

export default Biotech;