import React from 'react';
import { Building2, CheckCircle, DollarSign, FileCheck, Brain, Users, Calculator, Shield } from 'lucide-react';
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

function CaseStudyCPA() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Case Study: Small CPA Firm – Expanding Services Without Adding Headcount
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" 
            alt="Professional CPA Office" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Client Background */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Client Background
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <p className="text-[#475569] mb-0">
                A boutique CPA firm specializing in tax compliance and advisory services wanted to offer R&D tax credit studies to its clients but lacked in-house expertise. They were concerned about the cost and complexity of hiring technical specialists or managing compliance risks themselves.
              </p>
            </div>

            {/* Challenge */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Challenge
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ChallengePoint
                title="Limited Technical Expertise"
                description="The firm needed specialized knowledge to identify and document qualifying R&D activities across various industries."
              />
              <ChallengePoint
                title="Resource Constraints"
                description="Adding full-time technical staff wasn't feasible, but they needed to maintain service quality."
              />
              <ChallengePoint
                title="Client Relationship Management"
                description="The firm wanted to preserve their role as the primary point of contact while ensuring expert delivery."
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
                    <Users className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">White-Label Partnership</h4>
                </div>
                <p className="text-[#475569] text-sm">Seamless integration with the firm's existing client service model.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Brain className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Technical Expertise</h4>
                </div>
                <p className="text-[#475569] text-sm">Full access to our team of R&D tax credit specialists.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Calculator className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Comprehensive Studies</h4>
                </div>
                <p className="text-[#475569] text-sm">Audit-ready documentation and thorough technical analysis.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-[#E6F2F3] rounded-lg">
                    <Shield className="w-6 h-6 text-[#124C56]" />
                  </div>
                  <h4 className="font-semibold text-[#1E293B]">Risk Management</h4>
                </div>
                <p className="text-[#475569] text-sm">Full audit support and compliance assurance.</p>
              </div>
            </div>

            {/* Results */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              The Results
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <ResultMetric
                icon={DollarSign}
                value="$500,000+"
                label="Total client credits secured"
              />
              <ResultMetric
                icon={Users}
                value="8"
                label="New clients added"
              />
              <ResultMetric
                icon={FileCheck}
                value="100%"
                label="Client retention rate"
              />
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-[#124C56] mb-4">Impact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Expanded service offering with no additional hiring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Zero audit issues due to strong documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Strengthened client loyalty by offering a valuable new service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Generated new revenue streams without infrastructure investment</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Key Takeaways
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              This case demonstrates how small accounting firms can expand their service offerings and generate new revenue streams without the overhead of additional staff or technical expertise. By partnering with Credits Granted, the firm enhanced its reputation as a full-service advisor while maintaining control of client relationships.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Want to Expand Your Services Without Adding Staff?
            </h2>
            <p className="text-xl mb-8">
              Partner with Credits Granted to offer R&D studies to your clients — risk-free and fully audit-ready.
            </p>
            <CTAButton>
              Partner With Us
            </CTAButton>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
}

export default CaseStudyCPA;