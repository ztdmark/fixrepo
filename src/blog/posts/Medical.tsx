import React from 'react';
import { Stethoscope, Heart, Brain, Shield, CheckCircle, AlertCircle, Microscope, Binary, Laptop, Book as Robot, Dna, Scan } from 'lucide-react';
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

function Medical() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for Medical Devices: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
            alt="Medical Device Innovation" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              The medical device industry thrives on innovation — from developing life-saving technologies to improving existing products for greater efficiency and safety. Fortunately, many of these R&D activities qualify for valuable tax credits. Here's how medical device companies can capture and maximize their savings.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Medical Devices
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Heart}
                title="New Product Development"
                description="Designing and engineering new medical devices — surgical instruments, diagnostic equipment, or wearable technologies."
              />
              <ActivityCard
                icon={Shield}
                title="Device Improvement"
                description="Enhancing performance, durability, safety, or user-friendliness of existing medical devices."
              />
              <ActivityCard
                icon={Microscope}
                title="Prototype Development"
                description="Building prototypes, conducting clinical evaluations, and testing functionality in controlled settings."
              />
              <ActivityCard
                icon={Binary}
                title="Software Integration"
                description="Developing device software, data collection systems, and user interfaces for medical equipment."
              />
              <ActivityCard
                icon={Robot}
                title="Manufacturing Innovation"
                description="Improving manufacturing methods to increase precision, reduce defects, or enhance scalability."
              />
              <ActivityCard
                icon={Scan}
                title="Compliance Testing"
                description="Technical development and testing to meet FDA, ISO, or CE standards and requirements."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Even iterations based on clinical trial feedback or regulatory input can qualify as R&D.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Medical Device Projects
            </h2>

            <ProjectExample
              icon={Robot}
              title="Surgical Innovation"
              description="Advancing surgical tools and technologies."
              points={[
                "Developing minimally invasive surgical tools",
                "Creating robotic-assisted surgical systems",
                "Improving surgical navigation technology",
                "Enhancing surgical visualization systems"
              ]}
            />

            <ProjectExample
              icon={Heart}
              title="Implantable Devices"
              description="Engineering medical implants and devices."
              points={[
                "Designing advanced pacemakers",
                "Developing joint replacement technologies",
                "Creating smart implants with monitoring",
                "Testing biocompatible materials"
              ]}
            />

            <ProjectExample
              icon={Brain}
              title="Diagnostic Systems"
              description="Building advanced diagnostic technologies."
              points={[
                "Creating AI-driven imaging systems",
                "Developing portable diagnostic devices",
                "Enhancing medical scanning technology",
                "Improving diagnostic accuracy"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Medical Device Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving medical products, processes, or technologies through technical innovation."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using engineering, biology, material science, or computer science principles."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Addressing unknowns in device performance, safety, or manufacturability."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting prototyping, testing, and clinical validation studies."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Medical Device R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain detailed documentation of design iterations and technical testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track employee time and supply costs directly tied to device development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document clinical trial results and regulatory submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Separate R&D activities from post-commercialization support</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Turn Medical Innovation into Tax Savings
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Medical device companies are changing lives — and the R&D tax credit helps reward that innovation. Credits Granted helps device innovators claim every available dollar with audit-ready studies designed for the medical technology sector.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Medical Device R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you innovate with confidence — and maximize savings.
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

export default Medical;