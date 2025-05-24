import React from 'react';
import { Wheat, Leaf, FlaskRound as Flask, Brain, CheckCircle, AlertCircle, Droplets, Sprout, Scan, Microscope, Bone as Drone, Rotate3D as Robot } from 'lucide-react';
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

function Agriculture() {
  return (
    <BlogLayout categories={['Agriculture & Food Production']}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              R&D Tax Credits for the Agriculture and Food Industry: How to Qualify and Maximize Savings
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Agricultural Research" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              Agriculture and food production companies constantly innovate — from developing new farming techniques to enhancing food preservation methods. Many of these activities can qualify for valuable R&D tax credits, helping businesses reinvest in growth and sustainability. Here's how to identify and maximize your opportunities.
            </p>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Common R&D Activities in Agriculture and Food Production
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <ActivityCard
                icon={Flask}
                title="Crop Improvement"
                description="Developing new plant varieties, enhancing crop resistance, or optimizing yield through genetic innovation."
              />
              <ActivityCard
                icon={Leaf}
                title="Sustainable Farming"
                description="Designing environmentally friendly farming methods including precision agriculture and conservation practices."
              />
              <ActivityCard
                icon={Sprout}
                title="Product Development"
                description="Creating new food products, enhancing flavors, improving nutritional content, or extending shelf life."
              />
              <ActivityCard
                icon={Droplets}
                title="Packaging Innovation"
                description="Developing improved food packaging for sustainability, shelf life, or functionality."
              />
              <ActivityCard
                icon={Robot}
                title="Smart Technology"
                description="Implementing agricultural robotics, drone technology, or IoT-based smart farming solutions."
              />
              <ActivityCard
                icon={Microscope}
                title="Quality Testing"
                description="Developing new testing methods for food safety, nutritional content, or shelf stability."
              />
            </div>

            <div className="bg-[#E6F2F3] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#124C56] mt-1" />
                <p className="text-[#475569]">
                  Tip: Both improvements to farming techniques and enhancements to food products often qualify — even small changes that improve efficiency, sustainability, or quality.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
              Examples of Qualified Agriculture and Food Projects
            </h2>

            <ProjectExample
              icon={Wheat}
              title="Crop Innovation"
              description="Developing improved crop varieties and farming methods."
              points={[
                "Engineering drought-resistant or pest-resistant crops",
                "Formulating new organic fertilizers or soil enhancers",
                "Optimizing planting and harvesting techniques",
                "Developing sustainable irrigation systems"
              ]}
            />

            <ProjectExample
              icon={Brain}
              title="Smart Agriculture"
              description="Implementing advanced technology in farming operations."
              points={[
                "Developing AI-based crop monitoring systems",
                "Creating precision farming platforms",
                "Implementing automated harvesting systems",
                "Building IoT sensor networks for farm management"
              ]}
            />

            <ProjectExample
              icon={Flask}
              title="Food Innovation"
              description="Advancing food processing and preservation methods."
              points={[
                "Developing plant-based protein products",
                "Creating new preservation techniques",
                "Improving nutritional content",
                "Innovating sustainable packaging solutions"
              ]}
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Applying the 4-Part Test to Agriculture and Food Projects
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <TestCriteria
                title="Permitted Purpose"
                description="Improving crops, processes, packaging, or food products through technical innovation."
              />
              <TestCriteria
                title="Technological in Nature"
                description="Using biology, chemistry, agricultural science, or engineering principles."
              />
              <TestCriteria
                title="Elimination of Uncertainty"
                description="Addressing technical unknowns related to production, yield, or shelf life."
              />
              <TestCriteria
                title="Process of Experimentation"
                description="Conducting field trials, lab testing, or iterative development to evaluate solutions."
              />
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Maximizing Your Agriculture and Food R&D Tax Credit
            </h2>
            <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Document experiments, field trials, and testing protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Track employee time and supply expenses directly tied to R&D</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Maintain records of both successful and unsuccessful innovations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#124C56] mt-1" />
                  <span className="text-[#475569]">Keep detailed documentation of research methodologies and outcomes</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Cultivate Innovation While Reducing Tax Liability
            </h2>
            <p className="text-lg text-[#475569] mb-12">
              Innovation in agriculture and food production helps feed the world sustainably — and the R&D tax credit rewards that innovation. Credits Granted helps agricultural businesses claim every available dollar with audit-ready studies tailored to your unique operations.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Maximize Your Agricultural and Food R&D Credits?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you grow and innovate while maximizing tax savings.
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

export default Agriculture;