import React from 'react';
import { FlaskRound as Flask, Beaker, Atom, Brain, CheckCircle, AlertCircle, Radiation, Microscope, Gauge, Cog, Droplets, Leaf } from 'lucide-react';
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

function Chemical() {
  return (
    <BlogLayout categories={['Chemical & Materials Engineering']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for the Chemical and Materials Industry: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80" 
            alt="Chemical Research Laboratory" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Innovation in chemicals and materials drives advancements across nearly every sector — from manufacturing to energy to consumer goods. Companies in this space often qualify for valuable R&D tax credits. Here's how chemical and materials companies can identify eligible activities and maximize savings.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Chemicals and Materials
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Flask}
                title="New Material Development"
                description="Creating new polymers, composites, alloys, coatings, or specialty chemicals for specific applications."
              />
              <ActivityCard
                icon={Beaker}
                title="Product Formulation"
                description="Developing new chemical formulations, enhancing product durability, or improving resistance properties."
              />
              <ActivityCard
                icon={Cog}
                title="Process Development"
                description="Improving chemical manufacturing processes to increase yield, reduce waste, or enhance efficiency."
              />
              <ActivityCard
                icon={Leaf}
                title="Sustainability Innovation"
                description="Developing biodegradable materials, green chemistry solutions, or sustainable processes."
              />
              <ActivityCard
                icon={Gauge}
                title="Performance Testing"
                description="Testing materials for strength, stability, chemical resistance, or environmental durability."
              />
              <ActivityCard
                icon={Microscope}
                title="Analysis Methods"
                description="Developing new analytical techniques or quality control processes for materials."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Both product innovations and improvements to manufacturing methods often qualify for the credit.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Chemical and Materials Projects
            </h2>

            <ProjectExample
              icon={Atom}
              title="Advanced Materials"
              description="Developing high-performance materials for specific applications."
              points={[
                "High-strength, lightweight composites for aerospace",
                "Flame-retardant coatings and treatments",
                "Advanced battery materials for energy storage",
                "Smart materials with responsive properties"
              ]}
            />

            <ProjectExample
              icon={Droplets}
              title="Sustainable Solutions"
              description="Creating environmentally friendly materials and processes."
              points={[
                "Biodegradable plastics and packaging",
                "Green chemistry processes",
                "Recycling-friendly materials",
                "Low-emission manufacturing methods"
              ]}
            />

            <ProjectExample
              icon={Brain}
              title="Process Innovation"
              description="Improving chemical production efficiency and quality."
              points={[
                "Catalyst optimization for reactions",
                "Waste reduction techniques",
                "Energy-efficient processes",
                "Quality control improvements"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Chemicals and Materials Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving chemical products, materials, or processes for enhanced performance."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Relying on chemistry, engineering, material science, or physics principles."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Solving unknowns in composition, performance, or production methods."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting systematic testing, simulations, or pilot production trials."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Chemical and Materials R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Keep detailed lab reports, formulation logs, and testing data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track project timelines, technical challenges, and iteration phases</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain expense tracking tied specifically to R&D efforts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document safety and environmental compliance activities</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Build Better Materials — and Bigger Tax Savings
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Chemical and materials innovation fuels growth across industries — and the R&D tax credit helps offset the investment. Credits Granted delivers audit-ready studies that ensure you maximize every opportunity while staying compliant.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Chemical and Materials R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you innovate sustainably and profitably.
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

export default Chemical;