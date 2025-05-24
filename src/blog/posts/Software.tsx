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

function Software() {
  return (
    <BlogLayout categories={['Software Development']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for Software Development: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80" 
            alt="Software Development Environment" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Innovation is at the core of software development. Whether you're building new applications, optimizing system performance, or enhancing cybersecurity, many of your activities may qualify for the R&D tax credit. Here's how software companies can claim and maximize their savings.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Software Development
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Code}
                title="New Software Development"
                description="Building entirely new software products, applications, or platforms for customers or internal use."
              />
              <ActivityCard
                icon={Laptop}
                title="System Performance"
                description="Enhancing speed, scalability, data processing efficiency, or user experience through technical innovation."
              />
              <ActivityCard
                icon={Database}
                title="Custom Solutions"
                description="Developing tailored software solutions, integrating APIs, or building custom dashboards."
              />
              <ActivityCard
                icon={Binary}
                title="Testing & Prototyping"
                description="Iterative development, testing new features, debugging code, and prototyping functionality."
              />
              <ActivityCard
                icon={Shield}
                title="Cybersecurity Innovation"
                description="Developing new algorithms, encryption methods, or AI-driven threat detection systems."
              />
              <ActivityCard
                icon={Cloud}
                title="Cloud Architecture"
                description="Creating scalable cloud infrastructure, microservices, and distributed systems."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Both successful and unsuccessful development efforts can qualify — it's about the technical process, not just the final product.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Software Projects
            </h2>

            <ProjectExample
              icon={Brain}
              title="AI & Machine Learning"
              description="Developing artificial intelligence and machine learning solutions."
              points={[
                "Creating predictive analytics models",
                "Implementing natural language processing",
                "Developing computer vision systems",
                "Building automated decision systems"
              ]}
            />

            <ProjectExample
              icon={Cloud}
              title="Cloud Computing & SaaS"
              description="Building scalable cloud-based business applications."
              points={[
                "Developing distributed architectures",
                "Creating containerized applications",
                "Implementing microservices",
                "Building multi-tenant systems"
              ]}
            />

            <ProjectExample
              icon={Lock}
              title="Cybersecurity Solutions"
              description="Creating advanced security and data protection systems."
              points={[
                "Developing encryption algorithms",
                "Building threat detection systems",
                "Creating secure authentication methods",
                "Implementing zero-trust architectures"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Software Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Improving software functionality, performance, reliability, or security through technical innovation."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Relying on computer science principles like algorithms, data structures, or system architecture."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Resolving technical challenges where the development path or outcome isn't readily apparent."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Using systematic approaches like prototyping, testing, and iterative development to evaluate solutions."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Software R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document technical challenges and problem-solving approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track developer time spent on qualified activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain detailed project documentation and technical specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Record iterations, testing results, and development milestones</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Turn Your Software Innovation into Tax Savings
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Software companies drive technological advancement — and the R&D tax credit rewards that innovation. Credits Granted helps software developers claim every dollar they're entitled to with audit-ready studies tailored to the software industry.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Software R&D Tax Credit?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you capture the full value of your innovation.
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

export default Software;