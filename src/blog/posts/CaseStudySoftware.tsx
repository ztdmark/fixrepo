import React from 'react';
import { Code, CheckCircle, DollarSign, FileCheck, Brain, Cloud } from 'lucide-react';
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

function CaseStudySoftware() {
  return (
    <BlogLayout categories={['Case Studies', 'Software Development']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Case Study: Software Development Firm – Securing $275,000 in R&D Tax Credits
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
            alt="Software Development Team" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Client Background */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Client Background
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <p className="text-[#475569] mb-0">
                A growing software company specializing in cloud-based project management tools needed help maximizing its R&D tax credits. The firm had invested heavily in developing a new SaaS platform designed to streamline remote collaboration for businesses.
              </p>
            </div>

            {/* Challenge */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Challenge
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ChallengePoint
                title="Uncertainty About Qualifying Activities"
                description="The company was unsure whether its activities — primarily coding, UI/UX design, and API development — qualified for the R&D tax credit."
              />
              <ChallengePoint
                title="Limited Documentation"
                description="Internal documentation focused on product development but lacked the technical detail needed for R&D claims."
              />
              <ChallengePoint
                title="Complex Development Process"
                description="Multiple teams working on interconnected features made it difficult to track qualifying activities."
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
                  <h4 className="font-semibold text-[#1E293B]">Comprehensive Analysis</h4>
                </div>
                <p className="text-[#475569] text-sm">Performed detailed feasibility analysis to identify all qualifying development activities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <FileCheck className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Documentation Structure</h4>
                </div>
                <p className="text-[#475569] text-sm">Implemented systematic documentation process for technical challenges and solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Cloud className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Technical Mapping</h4>
                </div>
                <p className="text-[#475569] text-sm">Mapped development activities to specific technical uncertainties and experiments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Code className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Process Integration</h4>
                </div>
                <p className="text-[#475569] text-sm">Created repeatable process for capturing R&D activities within existing workflows.</p>
              </div>
            </div>

            {/* Results */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Results
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <ResultMetric
                icon={DollarSign}
                value="$275,000"
                label="Federal R&D tax credit secured"
              />
              <ResultMetric
                icon={FileCheck}
                value="100%"
                label="Audit protection with documentation"
              />
              <ResultMetric
                icon={Brain}
                value="3x"
                label="More qualifying activities identified"
              />
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-[#124C56] mb-4">Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Reinvested tax savings into accelerating product upgrades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Gained competitive advantage in remote work software market</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Established sustainable process for future R&D claims</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Enhanced technical documentation improved development efficiency</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Key Takeaways
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              This case demonstrates how software companies can maximize their R&D tax credits through proper documentation and expert guidance. By implementing systematic processes for tracking qualifying activities, businesses can turn their innovation investments into significant tax savings.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you innovate with confidence — and maximize savings.
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

export default CaseStudySoftware;