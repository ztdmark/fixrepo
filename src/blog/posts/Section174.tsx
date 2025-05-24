import React from 'react';
import { Calculator, AlertCircle, CheckCircle, FileText, DollarSign, Clock, Shield } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function InfoCard({ icon: Icon, title, description }: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
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

function Section174Impact({ title, description, points }: {
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
      <h3 className="text-2xl font-semibold text-[#124C56] mb-4">{title}</h3>
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

function BestPractice({ title, description }: { title: string; description: string }) {
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

function Section174() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Navigating Section 174: How R&D Studies Help Manage Amortization Challenges
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
            alt="Section 174 Navigation" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Recent changes to Section 174 of the Internal Revenue Code now require businesses to amortize their R&D expenses over five years instead of deducting them immediately. This shift creates new challenges — and opportunities — for companies conducting research. Here's how a strong R&D study can help you navigate Section 174 and minimize the financial impact.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              What Is Section 174?
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <p className="text-[#475569] mb-6">
                Section 174 governs the treatment of research and experimental (R&E) expenditures. Under new rules effective in 2022, businesses must:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Capitalize and amortize domestic R&E expenditures over five years</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Capitalize and amortize foreign R&E expenditures over fifteen years</span>
                </li>
              </ul>
              <div className="flex items-start gap-2 mt-6 bg-[#E6F2F3] p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569] text-sm">
                  The amortization begins at the midpoint of the taxable year the expenses are paid or incurred.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              How Section 174 Affects Businesses
            </h2>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <InfoCard
                icon={DollarSign}
                title="Higher Tax Bills"
                description="Immediate increase in taxable income due to required amortization"
              />
              <InfoCard
                icon={Calculator}
                title="Cash Flow Impact"
                description="Reduced immediate deductions affect short-term cash flow"
              />
              <InfoCard
                icon={FileText}
                title="Administrative Burden"
                description="Greater complexity in tracking and amortizing expenses"
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Important: Amortization applies regardless of whether an R&D tax credit is claimed.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              The Role of an R&D Study Under Section 174
            </h2>

            <Section174Impact
              title="1. Clear Separation of Qualified R&D Activities"
              description="A detailed R&D study helps distinguish which activities and expenses must be capitalized under Section 174."
              points={[
                "Identify qualifying research activities",
                "Separate routine testing from qualified research",
                "Track funded vs. self-funded research"
              ]}
            />

            <Section174Impact
              title="2. Improved Documentation for IRS Compliance"
              description="Comprehensive documentation provides a strong audit trail and supports your position."
              points={[
                "Detailed project descriptions and timelines",
                "Clear financial tracking and allocations",
                "Supporting evidence for qualified activities"
              ]}
            />

            <Section174Impact
              title="3. Optimized R&D Tax Credit Claim"
              description="While Section 174 requires capitalization, maximizing your R&D credit is crucial."
              points={[
                "Identify all qualifying activities and expenses",
                "Calculate accurate credit amounts",
                "Offset increased tax liability from amortization"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Best Practices for Managing Section 174 Challenges
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <BestPractice
                title="Annual R&D Studies"
                description="Conduct professional R&D studies each year to ensure compliance and maximize benefits."
              />
              <BestPractice
                title="Separate Tracking"
                description="Maintain distinct accounting for R&D activities and related expenses."
              />
              <BestPractice
                title="Proactive Planning"
                description="Work with tax professionals to manage cash flow impacts and optimize timing."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Stay Compliant and Maximize Your Savings
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Section 174 has changed how businesses account for R&D expenses — but it hasn't changed the importance of innovation. With a strong, audit-ready R&D study from Credits Granted, you can comply with the new rules, reduce audit risk, and still claim the valuable R&D tax credits you deserve.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Managing Section 174 Compliance?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready R&D studies help you stay compliant and maximize your tax savings.
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

export default Section174;