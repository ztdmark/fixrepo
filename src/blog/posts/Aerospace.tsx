import React from 'react';
import { Plane, Rocket, Shield, CheckCircle, AlertCircle, Brain, Cloud, Network, Lock, ChevronRight } from 'lucide-react';
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

function Aerospace() {
  return (
    <BlogLayout categories={['Aerospace & Defense']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for Aerospace and Defense: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80" 
            alt="Aerospace Innovation" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Innovation in aerospace and defense drives technological progress across the world — from advanced aircraft to cutting-edge defense systems. Many of these developments qualify for valuable R&D tax credits. Here's how aerospace and defense companies can maximize their tax savings while continuing to innovate.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Aerospace and Defense
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Plane}
                title="New Product Development"
                description="Designing new aircraft, spacecraft, satellites, or defense systems with enhanced capabilities."
              />
              <ActivityCard
                icon={Brain}
                title="Materials Innovation"
                description="Developing new lightweight materials, improving composites, or enhancing structural durability."
              />
              <ActivityCard
                icon={Network}
                title="System Integration"
                description="Integrating complex avionics, propulsion, navigation, or communication technologies."
              />
              <ActivityCard
                icon={Shield}
                title="Safety & Compliance"
                description="Technical development and testing to meet FAA, DoD, or NASA standards."
              />
              <ActivityCard
                icon={Cloud}
                title="Manufacturing Innovation"
                description="Implementing advanced manufacturing processes like additive manufacturing for aerospace parts."
              />
              <ActivityCard
                icon={Lock}
                title="Software Systems"
                description="Developing flight control systems, navigation software, or cybersecurity solutions."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Prototype development, even if not commercialized, often qualifies for the R&D credit.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Aerospace Projects
            </h2>

            <ProjectExample
              icon={Plane}
              title="Aircraft Innovation"
              description="Advancing aircraft design and capabilities."
              points={[
                "Designing unmanned aerial vehicles (UAVs)",
                "Developing autonomous flight systems",
                "Creating advanced navigation solutions",
                "Improving aerodynamic performance"
              ]}
            />

            <ProjectExample
              icon={Shield}
              title="Defense Systems"
              description="Developing advanced defense technologies."
              points={[
                "Creating new stealth technologies",
                "Developing radar and sensor systems",
                "Enhancing cybersecurity platforms",
                "Building secure communication systems"
              ]}
            />

            <ProjectExample
              icon={Rocket}
              title="Space Technologies"
              description="Innovating space exploration systems."
              points={[
                "Engineering satellite communication systems",
                "Developing propulsion technologies",
                "Creating thermal protection systems",
                "Designing life support systems"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Aerospace Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving products, systems, or manufacturing processes through technical innovation."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using engineering, physics, materials science, or computer science principles."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Solving unknowns in performance, safety, materials, or system integration."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting simulations, prototyping, modeling, and extensive testing."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Aerospace R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document technical challenges, iterations, and testing protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track engineer and technical staff time tied directly to R&D</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain records of prototypes and test results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Keep detailed documentation of design schematics and simulations</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Propel Innovation — and Savings
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              The aerospace and defense industry pushes the limits of technology — and the R&D tax credit helps offset the investment required to do so. Credits Granted helps aerospace innovators claim every available dollar with audit-ready studies tailored to your sector's high standards.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Aerospace and Defense R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you launch innovation while reducing tax liability.
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

export default Aerospace;