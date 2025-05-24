import React from 'react';
import { Building2, CheckCircle, DollarSign, FileCheck, Brain, Ruler } from 'lucide-react';
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

function CaseStudyConstruction() {
  return (
    <BlogLayout categories={['Case Studies', 'Construction']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Case Study: Construction Firm – Innovating Energy-Efficient Building Designs
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Construction Project" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Client Background */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Client Background
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <p className="text-[#475569] mb-0">
                A mid-sized construction firm specializing in commercial and residential projects sought guidance on qualifying for the R&D tax credit. The firm had invested in developing energy-efficient building designs to meet evolving regulatory standards and client sustainability goals.
              </p>
            </div>

            {/* Challenge */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Challenge
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ChallengePoint
                title="Unrecognized R&D Activities"
                description="The client was unaware that their work on energy modeling, evaluating new materials, and iterative design testing could qualify as R&D activities."
              />
              <ChallengePoint
                title="Documentation Concerns"
                description="Existing project documentation focused on compliance rather than capturing the technical nature of R&D work."
              />
              <ChallengePoint
                title="Audit Protection"
                description="The firm needed confidence that their R&D claims would withstand potential IRS scrutiny."
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
                  <h4 className="font-semibold text-[#1E293B]">Detailed Analysis</h4>
                </div>
                <p className="text-[#475569] text-sm">Performed comprehensive feasibility analysis to identify qualifying projects and activities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <FileCheck className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Technical Documentation</h4>
                </div>
                <p className="text-[#475569] text-sm">Worked with engineering teams to document testing processes and material evaluations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Building2 className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Process Integration</h4>
                </div>
                <p className="text-[#475569] text-sm">Created systems to track R&D activities within existing project workflows.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Ruler className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Design Optimization</h4>
                </div>
                <p className="text-[#475569] text-sm">Captured building envelope optimizations and energy modeling iterations.</p>
              </div>
            </div>

            {/* Results */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Results
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <ResultMetric
                icon={DollarSign}
                value="$180,000"
                label="Federal R&D tax credit secured"
              />
              <ResultMetric
                icon={FileCheck}
                value="100%"
                label="Audit protection with documentation"
              />
              <ResultMetric
                icon={Brain}
                value="12"
                label="Qualifying projects identified"
              />
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-[#124C56] mb-4">Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Enhanced internal processes for tracking future R&D activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Increased cash flow reinvested into new sustainable building initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Strengthened reputation for innovation in sustainable construction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Reduced effective tax rate while maintaining compliance</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Key Takeaways
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              This case demonstrates how construction companies can leverage R&D tax credits to support innovation in sustainable building practices. By properly documenting technical challenges and solutions, firms can turn their commitment to energy efficiency into significant tax savings.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Savings Through Innovation?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you claim every dollar you deserve.
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

export default CaseStudyConstruction;