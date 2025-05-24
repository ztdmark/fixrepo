import React from 'react';
import { Factory, CheckCircle, DollarSign, FileCheck, Brain, Cloud } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function ResultMetric({ icon: Icon, value, label }: {
  icon: any;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <div className="inline-block p-3 bg-[#E6F2F3] rounded-lg mb-4">
        <Icon className="w-8 h-8 text-[#124C56]" />
      </div>
      <p className="text-2xl font-bold text-[#124C56] mb-2">{value}</p>
      <p className="text-[#475569]">{label}</p>
    </div>
  );
}

function ChallengePoint({ title, description }: { title: string; description: string }) {
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

function CaseStudyManufacturing() {
  return (
    <BlogLayout categories={['Case Studies', 'Manufacturing']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Case Study: Manufacturing Firm – Boosting Innovation Through Process Improvements
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Manufacturing Facility" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Client Background */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Client Background
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <p className="text-[#475569] mb-0">
                A regional manufacturer specializing in industrial equipment production approached Credits Granted to explore potential R&D tax credit opportunities. The firm had been continuously improving its manufacturing processes to increase efficiency and reduce material waste, alongside occasional new product prototyping.
              </p>
            </div>

            {/* Challenge */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Challenge
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ChallengePoint
                title="Limited Understanding of Qualifying Activities"
                description="The company believed that only entirely new product inventions qualified for the R&D tax credit. They were unaware that process improvements could also be eligible activities."
              />
              <ChallengePoint
                title="Documentation Gaps"
                description="While the company maintained production records, they lacked documentation of the technical challenges and experimentation involved."
              />
              <ChallengePoint
                title="Complex Operations"
                description="Multiple production lines and ongoing improvements made it difficult to track qualifying activities systematically."
              />
            </div>

            {/* Solution */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Our Solution
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Brain className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Thorough Analysis</h4>
                </div>
                <p className="text-[#475569] text-sm">Conducted comprehensive feasibility study identifying qualifying process improvements and testing activities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <FileCheck className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Documentation System</h4>
                </div>
                <p className="text-[#475569] text-sm">Implemented structured documentation process for capturing technical uncertainties and solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Factory className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Process Integration</h4>
                </div>
                <p className="text-[#475569] text-sm">Created efficient system for tracking R&D activities within existing workflows.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Cloud className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Technical Mapping</h4>
                </div>
                <p className="text-[#475569] text-sm">Mapped process improvements to specific technical challenges and experiments.</p>
              </div>
            </div>

            {/* Results */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Results
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <ResultMetric
                icon={DollarSign}
                value="$210,000"
                label="Federal R&D tax credit secured"
              />
              <ResultMetric
                icon={FileCheck}
                value="100%"
                label="Audit protection with documentation"
              />
              <ResultMetric
                icon={Brain}
                value="15+"
                label="Qualifying processes identified"
              />
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-[#124C56] mb-4">Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Developed an internal system to track eligible activities year-round</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Freed up capital for investment in additional production technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Enhanced innovation pipeline through better documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Full support documentation ready for any future audit</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Key Takeaways
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              This case demonstrates how manufacturers can leverage R&D tax credits not just for new products, but for process improvements as well. By properly documenting technical challenges and solutions, companies can turn their commitment to efficiency into significant tax savings.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Make Your Innovation Pay Off?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Maximize your credits and build a stronger future.
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

export default CaseStudyManufacturing;