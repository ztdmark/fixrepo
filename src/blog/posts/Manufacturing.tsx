import React from 'react';
import { Code, Binary, Cpu, Server, Shield, CheckCircle, AlertCircle, Brain, Cloud, Database, Network, Lock, Laptop } from 'lucide-react';
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

function ExampleProject({ title, description, points }: {
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg mb-8">
      <h3 className="text-xl font-semibold text-[#124C56] mb-4">{title}</h3>
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

function Manufacturing() {
  return (
    <BlogLayout categories={['Manufacturing']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for Manufacturers: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Manufacturing Facility" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Manufacturing is a constant engine of innovation. Whether you're developing new products, improving production processes, or experimenting with materials, many of your activities may qualify for the R&D tax credit. Let's explore how manufacturers can claim and maximize these valuable tax incentives.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Manufacturing
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Code}
                title="Software Development"
                description="Creating custom software solutions and integrating new technologies into manufacturing processes."
              />
              <ActivityCard
                icon={Binary}
                title="Digital Integration"
                description="Implementing digital systems and automation to enhance manufacturing efficiency."
              />
              <ActivityCard
                icon={Cpu}
                title="Hardware Innovation"
                description="Developing new hardware solutions and improving existing manufacturing equipment."
              />
              <ActivityCard
                icon={Server}
                title="Infrastructure Optimization"
                description="Enhancing manufacturing infrastructure for better performance and reliability."
              />
              <ActivityCard
                icon={Shield}
                title="Security Implementation"
                description="Developing secure systems and protocols for manufacturing operations."
              />
              <ActivityCard
                icon={Brain}
                title="AI Integration"
                description="Implementing artificial intelligence and machine learning in manufacturing processes."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Even process improvements — not just new products — can qualify for the credit.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Manufacturing Activities
            </h2>

            <ExampleProject
              title="Advanced Machinery Development"
              description="Creating new industrial equipment or improving existing machinery."
              points={[
                "Designing custom manufacturing equipment",
                "Developing new control systems",
                "Improving equipment efficiency and reliability",
                "Integrating smart manufacturing capabilities"
              ]}
            />

            <ExampleProject
              title="Sustainable Manufacturing"
              description="Implementing eco-friendly production methods and materials."
              points={[
                "Developing recycling and waste reduction processes",
                "Testing sustainable material alternatives",
                "Optimizing energy efficiency",
                "Creating closed-loop manufacturing systems"
              ]}
            />

            <ExampleProject
              title="Smart Factory Implementation"
              description="Integrating advanced technology into manufacturing operations."
              points={[
                "Implementing IoT sensors and monitoring",
                "Developing predictive maintenance systems",
                "Creating digital twin simulations",
                "Automating quality control processes"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Manufacturing
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Developing or improving products, processes, or manufacturing techniques that enhance functionality or performance."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using engineering, physics, material science, or other hard sciences to solve manufacturing challenges."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Resolving technical unknowns in product design, manufacturing methods, or material performance."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting systematic testing, modeling, or trials to evaluate alternatives and optimize outcomes."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Manufacturing R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document technical challenges and experimental processes thoroughly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track wages for employees involved in R&D activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Monitor supplies and materials used in testing and prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain detailed project descriptions and financial records</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Don't Leave Your Innovation Unrewarded
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Manufacturers drive innovation daily — and the R&D tax credit rewards that effort. Whether you're building better products or improving how they're made, Credits Granted helps you capture every available dollar with audit-ready support.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your R&D Tax Savings?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help manufacturers claim the credits they deserve with confidence.
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

export default Manufacturing;