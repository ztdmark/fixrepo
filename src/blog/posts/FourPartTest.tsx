import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function TestPart({ number, title, description, tip }: {
  number: number;
  title: string;
  description: string;
  tip: string;
}) {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 bg-[#124C56] text-white rounded-full flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#124C56] mb-4">{title}</h3>
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-[#124C56]" />
              <h4 className="font-semibold text-[#1E293B]">Reality Check:</h4>
            </div>
            <p className="text-[#475569] pl-7">{description}</p>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#124C56]" />
            <h4 className="font-semibold text-[#1E293B]">Tip:</h4>
            <p className="text-[#475569]">{tip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FourPartTest() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The R&D Tax Credit 4-Part Test Explained
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80" 
            alt="R&D Tax Credit 4-Part Test" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-8 leading-relaxed">
              The R&D tax credit can provide significant financial savings, but to qualify, businesses must meet the IRS's 4-part test. Understanding these requirements is essential to determine if your activities are eligible. Let's break down each part clearly and simply.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              What is the 4-Part Test?
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              The IRS developed the 4-part test to ensure that businesses claiming the R&D tax credit are engaging in true research and development. Each part of the test focuses on a different element of qualifying activities.
            </p>

            {/* Part 1 */}
            <TestPart
              number={1}
              title="Permitted Purpose"
              description="The work must aim to create or improve a product, process, software, technique, formula, or invention that enhances performance, quality, reliability, or functionality."
              tip="Cosmetic or aesthetic improvements don't qualify."
            />

            {/* Part 2 */}
            <TestPart
              number={2}
              title="Technological in Nature"
              description="The activity must rely on hard sciences like engineering, biology, chemistry, physics, or computer science."
              tip="The use of these sciences must be integral to solving a technical challenge."
            />

            {/* Part 3 */}
            <TestPart
              number={3}
              title="Elimination of Uncertainty"
              description="The work must attempt to eliminate uncertainty related to product or process development."
              tip="Uncertainty can relate to capability, method, or design."
            />

            {/* Part 4 */}
            <TestPart
              number={4}
              title="Process of Experimentation"
              description="The activity must involve a process of experimentation, such as modeling, simulating, testing, or systematic trial and error to solve technical problems."
              tip="Even failed experiments can qualify!"
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Why the 4-Part Test Matters
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Failing to meet even one of these criteria can disqualify a project. A thorough understanding ensures compliance, maximizes your claim, and reduces audit risks.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Unlock Your R&D Opportunities
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              The 4-part test is the foundation of a strong R&D tax credit claim. If you're developing new products, improving existing processes, or tackling technical challenges, you might already qualify — and Credits Granted can help you claim what you've earned.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to See If You Qualify?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted. Our audit-ready studies make claiming your R&D tax credits easy and stress-free.
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

export default FourPartTest;