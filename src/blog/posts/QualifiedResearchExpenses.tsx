import React from 'react';
import { DollarSign, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function ExpenseCategory({ title, description, qualifies, tip }: {
  title: string;
  description: string;
  qualifies: string[];
  tip: string;
}) {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
      <h3 className="text-2xl font-semibold text-[#124C56] mb-6">{title}</h3>
      <p className="text-[#475569] mb-6">{description}</p>
      
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle className="w-5 h-5 text-[#124C56]" />
          <h4 className="font-semibold text-[#1E293B]">Who/What Qualifies:</h4>
        </div>
        <ul className="pl-7 space-y-2">
          {qualifies.map((item, index) => (
            <li key={index} className="text-[#475569] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#124C56] rounded-full flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-start gap-2">
        <AlertCircle className="w-5 h-5 text-[#124C56] mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-[#1E293B] mb-1">Tip:</h4>
          <p className="text-[#475569]">{tip}</p>
        </div>
      </div>
    </div>
  );
}

function NonQualifiedExpense({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-semibold text-[#1E293B]">{title}</h4>
        <p className="text-[#475569]">{description}</p>
      </div>
    </div>
  );
}

function QualifiedResearchExpenses() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Qualified Research Expenses (QREs): Breaking Down the Basics
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80" 
            alt="Qualified Research Expenses Breakdown" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              When it comes to claiming the R&D tax credit, knowing which expenses qualify is essential. These Qualified Research Expenses (QREs) form the foundation of your claim. Let's break down what counts, what doesn't, and how to maximize your potential benefit.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              What Are Qualified Research Expenses (QREs)?
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              QREs are specific costs businesses incur while performing research and development activities that meet the IRS's requirements. Accurately identifying these expenses ensures you claim the correct amount and remain compliant.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              The Four Main Categories of QREs
            </h2>

            <ExpenseCategory
              title="1. Wages"
              description="The wages paid to employees directly involved in qualified research activities can be included."
              qualifies={[
                "Researchers and scientists",
                "Engineers and developers",
                "Technical project managers",
                "Direct supervisors of R&D activities"
              ]}
              tip="Only the portion of time spent on qualified activities counts. Maintain detailed time tracking for partial allocations."
            />

            <ExpenseCategory
              title="2. Supplies"
              description="The cost of materials and supplies used during the research process can be included."
              qualifies={[
                "Raw materials for prototypes",
                "Test components and materials",
                "Laboratory supplies",
                "Experimental materials"
              ]}
              tip="Capital items and general administrative supplies usually don't qualify. Focus on materials consumed or destroyed in research."
            />

            <ExpenseCategory
              title="3. Contract Research Expenses"
              description="Payments to third parties performing qualified R&D activities on your behalf may be eligible."
              qualifies={[
                "External research laboratories",
                "Engineering consultants",
                "Specialized testing facilities",
                "Technical contractors"
              ]}
              tip="Only 65% of eligible contract research expenses typically qualify for the credit. Maintain proper documentation of research agreements."
            />

            <ExpenseCategory
              title="4. Computer Rental or Leasing"
              description="Costs for renting or leasing cloud computing services used in research may qualify."
              qualifies={[
                "Cloud computing resources",
                "Specialized software licenses",
                "Data processing services",
                "Testing environments"
              ]}
              tip="Only the portion of usage dedicated to R&D counts. Track and document research-specific usage carefully."
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Common Non-Qualified Expenses to Watch Out For
            </h2>
            <div className="bg-red-50 p-8 rounded-lg mb-12">
              <NonQualifiedExpense
                title="Marketing and Advertising"
                description="Market research, consumer surveys, and promotional activities don't qualify."
              />
              <NonQualifiedExpense
                title="Routine Data Collection"
                description="Regular quality control testing and data gathering without experimental purpose."
              />
              <NonQualifiedExpense
                title="Management Studies"
                description="Efficiency studies and general business improvements not involving technical uncertainty."
              />
              <NonQualifiedExpense
                title="Foreign Research"
                description="Research conducted outside the United States generally doesn't qualify."
              />
              <NonQualifiedExpense
                title="Funded Research"
                description="Research funded by grants, contracts, or other external sources isn't eligible."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Why Properly Identifying QREs Matters
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Maximizing your R&D tax credit starts with correctly identifying QREs. Overstating expenses can trigger audits, while understating leaves money on the table. A professional, audit-ready study ensures you claim everything you're entitled to — and stay compliant.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Turn Your R&D Investments into Tax Savings
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Qualified Research Expenses are the backbone of a strong R&D tax credit claim. By accurately tracking wages, supplies, contract research, and cloud services, your business can maximize its tax savings — and Credits Granted can help you every step of the way.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your R&D Tax Credit?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted. Our audit-ready studies ensure you claim every dollar you deserve.
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

export default QualifiedResearchExpenses;