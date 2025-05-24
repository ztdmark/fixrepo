import React from 'react';
import { Zap, Battery, Sun, Wind, CheckCircle, AlertCircle, Brain, Cloud, Network, Gauge, Lightbulb } from 'lucide-react';
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

function Energy() {
  return (
    <BlogLayout categories={['Energy & Utilities']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for Energy and Utilities: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Energy Facility" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              The energy and utilities sector is at the forefront of innovation — from renewable energy advancements to smart grid technologies. Many of these efforts qualify for valuable R&D tax credits. Here's how energy and utility companies can leverage innovation to maximize tax savings.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Energy and Utilities
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Sun}
                title="Renewable Energy Development"
                description="Designing or improving solar panels, wind turbines, hydroelectric systems, or bioenergy solutions."
              />
              <ActivityCard
                icon={Network}
                title="Smart Grid Solutions"
                description="Developing smart grids, energy management systems, or battery storage technologies."
              />
              <ActivityCard
                icon={Gauge}
                title="Efficiency Improvements"
                description="Enhancing energy transmission, distribution systems, or developing demand response technologies."
              />
              <ActivityCard
                icon={Leaf}
                title="Sustainability Innovation"
                description="Creating systems that reduce emissions, optimize energy use, or integrate clean energy sources."
              />
              <ActivityCard
                icon={Brain}
                title="AI Integration"
                description="Implementing machine learning for predictive maintenance and grid optimization."
              />
              <ActivityCard
                icon={Cloud}
                title="System Integration"
                description="Testing new technologies in real-world environments and grid integration trials."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Improvements to existing energy systems can qualify — not just brand-new innovations.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Energy and Utilities Projects
            </h2>

            <ProjectExample
              icon={Sun}
              title="Renewable Energy Innovation"
              description="Advancing solar and wind energy technologies."
              points={[
                "Engineering more efficient solar tracking systems",
                "Developing advanced wind turbine components",
                "Optimizing renewable energy generation",
                "Creating innovative mounting solutions"
              ]}
            />

            <ProjectExample
              icon={Battery}
              title="Energy Storage Solutions"
              description="Developing advanced storage technologies."
              points={[
                "Designing energy storage technologies",
                "Improving battery efficiency and lifespan",
                "Creating grid-scale storage solutions",
                "Developing hybrid storage systems"
              ]}
            />

            <ProjectExample
              icon={Network}
              title="Smart Grid Technologies"
              description="Building intelligent energy distribution systems."
              points={[
                "Developing smart meters and monitoring",
                "Creating automated demand response systems",
                "Building microgrids for community resilience",
                "Implementing AI-driven grid management"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Energy Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving energy products, systems, or processes through technical innovation."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using engineering, environmental science, physics, or computer science principles."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Addressing unknowns in system performance, energy efficiency, or integration methods."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting modeling, simulations, field tests, or pilot installations."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Energy R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain technical documentation on design iterations and system testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track employee time, supplies, and contractor expenses tied to R&D</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document both lab trials and real-world pilot projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Keep detailed records of environmental impact studies</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Power Innovation While Reducing Your Tax Bill
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Energy and utilities companies are solving some of the world's biggest challenges — and the R&D tax credit rewards that innovation. Credits Granted helps companies capture every available dollar with audit-ready studies customized to the energy sector.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Energy and Utilities R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you innovate sustainably — and save more.
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

export default Energy;