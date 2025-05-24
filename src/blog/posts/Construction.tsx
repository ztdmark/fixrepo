import React from 'react';
import { Building2, Ruler, PenTool as Tool, Hammer, CheckCircle, AlertCircle, Cog, Lightbulb, Shield, Cloud, Construction as ConstructionIcon, Warehouse } from 'lucide-react';
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

function Construction() {
  return (
    <BlogLayout categories={['Construction']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for the Construction Industry: How to Qualify and Maximize Savings
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
            alt="Modern Construction Site" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Innovation isn't limited to laboratories — it happens on construction sites every day. Whether you're developing energy-efficient designs, improving construction techniques, or integrating new materials, many construction companies qualify for valuable R&D tax credits. Here's how to identify and claim your savings.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Construction
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Lightbulb}
                title="Energy-Efficient Design"
                description="Designing and constructing energy-efficient buildings, systems, or structures that exceed standard requirements."
              />
              <ActivityCard
                icon={Tool}
                title="Construction Methods"
                description="Testing and refining construction techniques for safety, durability, sustainability, or cost-efficiency."
              />
              <ActivityCard
                icon={ConstructionIcon}
                title="Materials Innovation"
                description="Working with new materials like green composites or modular systems, or innovating installation methods."
              />
              <ActivityCard
                icon={Cloud}
                title="BIM & Smart Tech"
                description="Developing or enhancing BIM models, smart building systems, or IoT integration into projects."
              />
              <ActivityCard
                icon={Shield}
                title="Safety Innovation"
                description="Developing new safety systems, structural reinforcement methods, or hazard mitigation techniques."
              />
              <ActivityCard
                icon={Warehouse}
                title="Sustainable Building"
                description="Innovating ways to reduce environmental impact, recycle materials, or implement low-carbon practices."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Even failed tests or pilot projects can qualify — it's about the experimentation, not just success.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Construction Projects
            </h2>

            <ProjectExample
              icon={Building2}
              title="Building Systems Innovation"
              description="Developing advanced building systems and infrastructure solutions."
              points={[
                "High-performance HVAC system design",
                "Energy modeling and LEED certification strategies",
                "Smart building control systems",
                "Advanced plumbing or electrical solutions"
              ]}
            />

            <ProjectExample
              icon={Ruler}
              title="Construction Methods"
              description="Improving construction techniques and processes."
              points={[
                "New methods for modular construction",
                "Innovative prefabrication techniques",
                "Custom solutions for complex building challenges",
                "Advanced foundation or structural systems"
              ]}
            />

            <ProjectExample
              icon={Cog}
              title="Technology Integration"
              description="Incorporating advanced technology into construction projects."
              points={[
                "BIM implementation and optimization",
                "IoT systems integration",
                "Automated construction monitoring",
                "Digital twin development"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Construction Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving a building, system, material, or construction method through technical innovation."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using engineering, physics, material science, or environmental sciences to solve construction challenges."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Addressing technical challenges in design, construction feasibility, or material performance."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting modeling, testing, simulations, or trial builds to evaluate solutions."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Construction R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document design iterations, field trials, and technical challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track engineer, architect, and construction staff time on qualifying activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain testing results, modeling data, and technical reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Keep records of material testing and performance evaluations</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Build Smarter — and Save More
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Construction companies innovate in every project — and the R&D tax credit rewards that technical advancement. Credits Granted helps contractors, builders, and developers claim every available dollar with audit-ready studies built for the construction industry.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Construction R&D Tax Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you build smarter — and save more.
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

export default Construction;