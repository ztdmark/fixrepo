import React from 'react';
import { DollarSign, Users, FileCheck, Shield, ArrowRight, CheckCircle, Award, Briefcase, BarChart, FileText, HelpCircle, ChevronDown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Layout from './components/Layout';
import SEO from './components/SEO';
import CTAButton from './components/CTAButton';
import { useState } from 'react';

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-[#1E293B]">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[#124C56] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <p className="pb-4 text-[#64748B]">{answer}</p>
      )}
    </div>
  );
}

function BenefitCard({ title, description, icon: Icon }: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-center justify-center w-20 h-20 bg-[#E6F2F3] rounded-lg mb-4 mx-auto shadow-md group-hover:shadow-lg group-hover:bg-[#DCE9EA] transition-all duration-300">
        <Icon className="w-10 h-10 text-[#124C56]" />
      </div>
      <h3 className="text-xl font-semibold text-[#1E293B] mb-2 text-center leading-tight">{title}</h3>
      <p className="text-[#475569] text-center text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function ProcessStep({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-16 h-16 bg-[#124C56] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
        {number}
      </div>
      <h3 className="text-2xl font-semibold text-[#1E293B] mb-4">{title}</h3>
      <p className="text-[#64748B] text-lg">{description}</p>
      {number !== 3 && (
        <ArrowRight className="absolute top-1/2 -translate-y-8 -right-6 w-12 h-12 text-[#124C56] hidden md:block" />
      )}
    </div>
  );
}

function TrustCard({ title, description, icon: Icon }: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center justify-center w-12 h-12 bg-[#E6F2F3] rounded-lg">
          <Icon className="w-6 h-6 text-[#124C56]" />
        </div>
        <h3 className="text-lg font-semibold text-[#1E293B]">{title}</h3>
      </div>
      <p className="text-[#475569] text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function Section174Point({ title, description }: { title: string; description: string }) {
  const boldKeywords = (text: string) => {
    return text.replace(
      /(reduce liability|financial strain|eligible R&D expenditures|optimize credit claims|future tax planning|audit protection|compliance)/g,
      '<strong>$1</strong>'
    );
  };

  return (
    <div className="border-b border-gray-100 last:border-0 py-6 first:pt-0 last:pb-0">
      <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{title}</h3>
      <p className="text-[#475569] font-medium" dangerouslySetInnerHTML={{ __html: boldKeywords(description) }}></p>
    </div>
  );
}

function Partnerships() {
  return (
    <Layout>
      <SEO 
        title="Partner With Credits Granted | Expand Your Services"
        description="Partner with Credits Granted to boost your firm's revenue. We handle R&D tax credit claims while you share in the success."
        canonical="https://creditsgranted.com/partnerships"
      />
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: 'url(https://5h44gfg5lf.ufs.sh/f/r5lsi1WyiUGAQFPMrks91JOHeKvPz6Q2pXCTrFZGklM4LVaq)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Boost Your Firm's Revenue with Our R&D Tax Credit Partnership
          </h1>
          <p className="hero-subheadline text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Refer your clients. We handle the work. You share the success.
          </p>
          <CTAButton className="text-xl">
            Start Earning with R&D Credits
          </CTAButton>
          <p className="mt-8 text-white/90 text-lg">
              Join 20+ CPA firms already earning revenue with Credits Granted
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-[#F9FBFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-6">
            How Our Partnership Works
          </h2>
          <p className="text-xl text-center text-[#64748B] mb-12 max-w-3xl mx-auto">
            A simple, profitable partnership that lets you focus on what you do best
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <ProcessStep
              number={1}
              title="Refer Clients"
              description="Introduce qualified clients to our R&D tax credit services"
            />
            <ProcessStep
              number={2}
              title="We Handle the Claim"
              description="Our team manages the entire process with audit-ready documentation"
            />
            <ProcessStep
              number={3}
              title="You Get Paid"
              description="Earn significant revenue share from successful claims"
            />
          </div>
        </div>
      </section>

      {/* Revenue Share Section */}
      <section className="py-20 px-4 bg-[#124C56]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            How the Revenue Share Works
          </h2>
          <p className="text-xl text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Our referral program is built to reward lasting partnerships
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <Users className="w-16 h-16 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">Refer 2+ Clients</h3>
                <p className="text-[#64748B]">Start your partnership journey</p>
              </div>
              <div className="hidden md:block">
                <ArrowRight className="w-12 h-12 text-[#124C56]" />
              </div>
              <div className="flex-1 text-center">
                <DollarSign className="w-16 h-16 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">Earn 20% Revenue Share</h3>
                <p className="text-[#64748B]">Uncapped earning potential</p>
              </div>
              <div className="hidden md:block">
                <ArrowRight className="w-12 h-12 text-[#124C56]" />
              </div>
              <div className="flex-1 text-center">
                <CheckCircle className="w-16 h-16 text-[#124C56] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#1E293B] mb-2">Get Paid Promptly</h3>
                <p className="text-[#64748B]">No delays, no hassle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-[#F9FBFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-4">
            Why Partner With Credits Granted
          </h2>
          <p className="text-xl text-center text-[#64748B] mb-12 max-w-3xl mx-auto">
            Join 20+ CPA firms already growing their practice with our partnership
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={CheckCircle}
              title="No Extra Work"
              description="We handle everything from technical analysis to documentation"
            />
            <BenefitCard
              icon={Shield}
              title="Fully Documented to Pass Review"
              description="Every study is prepared to meet IRS requirements and minimize audit risk"
            />
            <BenefitCard
              icon={BarChart}
              title="Growing Returns"
              description="Profit-sharing that increases with your referral volume"
            />
            <BenefitCard
              icon={Briefcase}
              title="Client Protection"
              description="You maintain control of all client relationships"
            />
          </div>
          <div className="mt-12 text-center">
            <CTAButton className="text-xl">
              Let's Boost Your Revenue. Book a Free Partnership Call →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-[#124C56]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Trusted by Businesses Nationwide
          </h2>
          <p className="text-xl text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Our partners trust us to deliver results
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <div className="flex flex-col items-center">
              <Briefcase className="w-12 h-12 mb-4 text-white" />
              <p className="text-4xl font-bold mb-2 text-white">20+</p>
              <p className="text-lg text-white/80">CPA Firms Partnered</p>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="w-12 h-12 mb-4 text-white" />
              <p className="text-4xl font-bold mb-2 text-white">$73M+</p>
              <p className="text-lg text-white/80">Credits Secured</p>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="w-12 h-12 mb-4 text-white" />
              <p className="text-4xl font-bold mb-2 text-white">500+</p>
              <p className="text-lg text-white/80">Successful Studies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-4">
            Here's What CPA Firms Are Saying
          </h2>
          <p className="text-xl text-center text-[#64748B] mb-12 max-w-3xl mx-auto">
            Trusted by leading CPA firms across the country
          </p>
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2
                }
              }}
              style={{ padding: '0 40px' }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              navigation={true}
              className="pb-4"
            >
              <SwiperSlide>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full border-2 border-[#E2E8F0]">
                  <h4 className="text-xl font-semibold text-[#124C56] mb-4">"An invaluable partner"</h4>
                  <p className="text-lg text-[#1E293B] mb-6">
                    "Credits Granted has been an invaluable partner. Their expertise in R&D credits has helped us deliver significant value to our clients while creating a new revenue stream."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#124C56] rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
                    <div className="ml-4">
                      <p className="font-semibold text-[#1E293B]">Partner</p>
                      <p className="text-[#64748B]">Regional CPA Firm</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full border-2 border-[#E2E8F0]">
                  <h4 className="text-xl font-semibold text-[#124C56] mb-4">"Seamless integration"</h4>
                  <p className="text-lg text-[#1E293B] mb-6">
                    "Working with Credits Granted has been seamless. They handle all the technical work while we maintain our client relationships. It's a win-win partnership."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#124C56] rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
                    <div className="ml-4">
                      <p className="font-semibold text-[#1E293B]">Managing Partner</p>
                      <p className="text-[#64748B]">Tax Advisory Firm</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full border-2 border-[#E2E8F0]">
                  <h4 className="text-xl font-semibold text-[#124C56] mb-4">"Referral turned into reward"</h4>
                  <p className="text-lg text-[#1E293B] mb-6">
                    "Credits Granted saved my client over $300,000 in taxes—and I got a vacation out of the referral fees. It was the easiest win I've had all year."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#124C56] rounded-full flex items-center justify-center text-white font-bold text-xl">T</div>
                    <div className="ml-4">
                      <p className="font-semibold text-[#1E293B]">Tax Practitioner</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full border-2 border-[#E2E8F0]">
                  <h4 className="text-xl font-semibold text-[#124C56] mb-4">"Peace of mind partnership"</h4>
                  <p className="text-lg text-[#1E293B] mb-6">
                    "I used to worry about compliance. Now, Credits Granted handles everything. They're meticulous, fast, and always professional."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#124C56] rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
                    <div className="ml-4">
                      <p className="font-semibold text-[#1E293B]">CPA</p>
                      <p className="text-[#64748B]">Boutique Accounting Firm</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full border-2 border-[#E2E8F0]">
                  <h4 className="text-xl font-semibold text-[#124C56] mb-4">"They just get it"</h4>
                  <p className="text-lg text-[#1E293B] mb-6">
                    "As a founder, I value partners who move quickly and don't drop the ball. Credits Granted delivered—on time, every time."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#124C56] rounded-full flex items-center justify-center text-white font-bold text-xl">J</div>
                    <div className="ml-4">
                      <p className="font-semibold text-[#1E293B]">Managing Partner</p>
                      <p className="text-[#64748B]">Startup-Focused CPA Firm</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full border-2 border-[#E2E8F0]">
                  <h4 className="text-xl font-semibold text-[#124C56] mb-4">"Results speak louder"</h4>
                  <p className="text-lg text-[#1E293B] mb-6">
                    "I've referred half a dozen clients so far. Every one has come back thrilled. I've added a new revenue stream without lifting a finger."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#124C56] rounded-full flex items-center justify-center text-white font-bold text-xl">K</div>
                    <div className="ml-4">
                      <p className="font-semibold text-[#1E293B]">Partner</p>
                      <p className="text-[#64748B]">Multi-State Tax Firm</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      
      {/* Final CTA with FAQ */}
      <section className="py-24 px-4 bg-[#124C56]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Ready to Grow Your Practice?
          </h2>
          
          <div className="bg-[#F9FBFC] rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[#124C56] mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#124C56]" />
              Common Questions
            </h3>
            <div className="space-y-2">
              <FAQ 
                question="What happens during the partnership call?"
                answer="In this focused 30-minute call, we'll learn about your firm's goals, walk through our partnership model, and explain how we help grow your practice with R&D tax credits. No pressure—just practical guidance."
              />
              <FAQ 
                question="How do we get started?"
                answer="You can start referring clients right away if you know they're doing R&D. We're also happy to review your client list to help identify potential opportunities. To support your team, we offer educational resources including webinars, Lunch & Learns, and tailored training sessions."
              />
              <FAQ 
                question="What support do you provide partners?"
                answer="We provide white-glove service from start to finish. Before any work begins, we connect with your tax team to walk through the process. Once introduced, we manage the entire engagement and keep you informed throughout. When the credit is finalized, we deliver it directly to the preparer and can also review returns for proper credit input before filing."
              />
              <div className="pt-6 text-center">
                <p className="text-[#64748B] mb-4">Still have questions?</p>
                <CTAButton className="text-lg">
                  Book a Call →
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
        <CTAButton className="w-full">
          Let's Boost Your Revenue →
        </CTAButton>
      </div>

    </Layout>
  );
}

export default Partnerships;