import React from 'react';
import { Code2, GitBranch, Database, Shield, ArrowRight } from 'lucide-react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import CTAButton from '../../components/CTAButton';

function SoftwareLanding() {
  return (
    <Layout>
      <SEO 
        title="Software R&D Tax Credit for Dev Teams"
        description="Agile, SaaS, and custom software all qualify for lucrative R&D credits. Find out how."
        canonical="https://creditsgranted.com/rd-tax-credit/software"
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAvVmQ3VPKGxyCOwQ0P5XMDYiIsqefBa7JucjL)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            R&D Tax Credits for Software Development
          </h1>
          <p className="hero-subheadline text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            From SaaS platforms to custom enterprise solutions, software development activities can qualify for substantial R&D tax credits.
          </p>
          <CTAButton>
            Calculate Your Credit
          </CTAButton>
        </div>
      </section>

      {/* Qualifying Activities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
            Qualifying Software Development Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <Code2 className="w-12 h-12 text-[#124C56] mb-6" />
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Development Innovation</h3>
              <ul className="space-y-3 text-[#475569]">
                <li>• New algorithms</li>
                <li>• API development</li>
                <li>• Architecture design</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
            
            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <GitBranch className="w-12 h-12 text-[#124C56] mb-6" />
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Integration Solutions</h3>
              <ul className="space-y-3 text-[#475569]">
                <li>• System integration</li>
                <li>• Legacy modernization</li>
                <li>• Cloud migration</li>
                <li>• Microservices</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <Database className="w-12 h-12 text-[#124C56] mb-6" />
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Data Solutions</h3>
              <ul className="space-y-3 text-[#475569]">
                <li>• Database optimization</li>
                <li>• Big data processing</li>
                <li>• Data migration</li>
                <li>• Analytics systems</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-xl">
              <Shield className="w-12 h-12 text-[#124C56] mb-6" />
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Security & Testing</h3>
              <ul className="space-y-3 text-[#475569]">
                <li>• Security protocols</li>
                <li>• Automated testing</li>
                <li>• Quality assurance</li>
                <li>• Penetration testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
                  Case Study: SaaS Company Secures $275,000 Credit
                </h2>
                <p className="text-[#475569] mb-6">
                  A growing software company specializing in enterprise SaaS solutions qualified for substantial R&D credits through their innovative development process.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#124C56] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#475569]">Developed new machine learning algorithms</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#124C56] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#475569]">Created custom API integration framework</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#124C56] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#475569]">Implemented microservices architecture</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#124C56] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-[#475569]">Enhanced security protocols</span>
                  </li>
                </ul>
                <CTAButton>
                  Read Full Case Study
                </CTAButton>
              </div>
              <div 
                className="h-full min-h-[400px]"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#124C56] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            See How Much Your Software Company Could Save
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your free evaluation today and discover if your development activities qualify for R&D tax credits.
          </p>
          <CTAButton>
            Get My Free Evaluation
          </CTAButton>
        </div>
      </section>
    </Layout>
  );
}

export default SoftwareLanding;