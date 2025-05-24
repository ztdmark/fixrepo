import React from 'react';
import { Building2, AlertCircle, CheckCircle, DollarSign } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function KeyDifference({ title, description, points }: {
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

function IndustryCard({ industry, description }: { industry: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-3">
        <Building2 className="w-6 h-6 text-[#124C56]" />
        <h4 className="font-semibold text-[#1E293B]">{industry}</h4>
      </div>
      <p className="text-[#475569] text-sm">{description}</p>
    </div>
  );
}

function StateTaxLaws() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Impact of State Tax Laws on R&D Credits: Focus on California
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=80" 
            alt="California State Capitol" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              While the federal R&D tax credit offers major savings, many states — including California — provide additional incentives. Understanding how state laws differ from federal rules can help businesses maximize their total benefit. Here's what you need to know about claiming R&D credits in California.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Federal vs. State R&D Credits: Key Differences
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Federal and state R&D tax credits share similarities, but states often have unique rules, calculation methods, and eligibility criteria. Some states mirror the federal guidelines closely, while others impose additional restrictions or offer enhanced benefits.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              How California's R&D Credit Works
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-[#124C56]" />
                <h3 className="text-xl font-semibold text-[#1E293B]">Available Credits:</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">15% credit on qualified research expenses that exceed a base amount</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">24% credit on basic research payments to qualified organizations</span>
                </li>
              </ul>
              <div className="flex items-start gap-2 mt-6 bg-[#E6F2F3] p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569] text-sm">
                  California does not conform to all recent federal tax changes, so it's important to treat the credits separately.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Key Differences to Watch Out for in California
            </h2>

            <KeyDifference
              title="1. No Refundable Credit"
              description="California's R&D credit can only be used to reduce tax liability — it's non-refundable."
              points={[
                "If your business doesn't owe taxes, you can't receive a cash refund",
                "Unused credits can generally be carried forward indefinitely",
                "Strategic tax planning is crucial to maximize benefit"
              ]}
            />

            <KeyDifference
              title="2. Non-Conformance to Federal Rules"
              description="California generally follows the federal 4-part test for qualification, but it does not conform completely to federal R&D credit rules."
              points={[
                "Some definitions and allowable expenses differ",
                "Activities and expenses that qualify federally may need additional review",
                "California-specific standards must be carefully applied"
              ]}
            />

            <KeyDifference
              title="3. Separate Calculation Rules"
              description="California's credit calculation is different from the federal credit."
              points={[
                "Requires separate calculations for state and federal claims",
                "Different base period calculations may apply",
                "Documentation must support both federal and state claims"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Industries That Benefit in California
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <IndustryCard
                industry="Software Development"
                description="Custom software development, cloud solutions, and enterprise applications"
              />
              <IndustryCard
                industry="Biotechnology"
                description="Drug development, medical research, and life sciences innovation"
              />
              <IndustryCard
                industry="Manufacturing"
                description="Process improvements, automation, and product development"
              />
              <IndustryCard
                industry="Aerospace"
                description="Component design, testing, and systems integration"
              />
              <IndustryCard
                industry="Clean Tech"
                description="Renewable energy solutions and environmental innovations"
              />
              <IndustryCard
                industry="Agriculture"
                description="Farming techniques, crop development, and processing methods"
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  You don't have to be in "traditional" R&D to qualify — technical improvements in products or processes may be enough.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Maximize Both Federal and California Credits
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Businesses operating in California can benefit significantly by claiming both the federal and state R&D tax credits. However, navigating the differences requires careful planning, accurate documentation, and separate calculations. Credits Granted specializes in helping California businesses maximize their R&D savings while staying audit-ready.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Navigating Federal and State R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies ensure you claim every credit you're entitled to — in California and beyond.
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

export default StateTaxLaws;