import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle, ChevronRight, Clock, DollarSign, FileCheck, LineChart, Building2 as Building, Code, Factory, Plane, Beaker, Pill, Wheat, Zap, Users, Building2, Briefcase, FileText, Globe, ChevronLeft, ChevronRight as ChevronRightIcon, Lightbulb, Cog, BarChart, FileSpreadsheet, Laptop, Microscope, Atom, Cpu, Wrench, Hammer, Rocket, Server, Binary, Leaf, Warehouse, Forklift, Brain, Network, Cloud, Database, Shield, Ship as Chip, Rotate3D as Robot, Dna, Microscope as MicroscopeAlt, Ruler, PenTool as Tool, Gauge, Scan, Radiation } from 'lucide-react';
import Layout from './components/Layout';
import SEO from './components/SEO';
import CTAButton from './components/CTAButton';

function FlipCard({ icon: Icon, title, description, link }: { icon: any, title: string, description: string, link: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front bg-[#E6F2F3] p-6 flex flex-col items-center justify-center">
          <Icon className="w-12 h-12 text-[#124C56] mb-4" />
          <h3 className="text-lg font-semibold text-[#1E293B]">{title}</h3>
        </div>
        <div className="flip-card-back bg-[#F8FAFC] p-6 flex flex-col items-center justify-center">
          <p className="text-[#1E293B] mb-4">{description}</p>
          <Link 
            to={link}
            className="inline-block mt-4 text-[#124C56] hover:text-[#0A6C74] font-semibold text-lg not-italic"
          >
            Learn More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function WaveDivider({ color = "#F8FAFC", isTop = false }: { color?: string, isTop?: boolean }) {
  return (
    <div className={`wave-divider ${isTop ? 'top' : ''}`}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill={color}></path>
      </svg>
    </div>
  );
}

function AnimatedStat({ value, suffix, prefix, label, icon: Icon, duration = 4 }: { 
  value: number, 
  suffix?: string, 
  prefix?: string, 
  label: string, 
  icon: any,
  duration?: number 
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div className="text-center">
      <div className="inline-block p-4 bg-[#124C56]/10 rounded-full mb-4">
        <Icon className="w-8 h-8 text-[#124C56]" />
      </div>
      <p className="text-2xl font-bold text-[#124C56]">
        {prefix}
        <CountUp
          start={0}
          end={value}
          duration={duration}
          separator=","
          decimal="."
          suffix={suffix}
          onEnd={() => setHasAnimated(true)}
          preserveValue={true}
        />
      </p>
      <p className="text-[#1E293B]">{label}</p>
    </div>
  );
}

function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "Credits Granted made the R&D credit process so simple. They helped us identify activities we didn't even realize qualified — and secured us a $275,000 tax credit. Their audit-ready study gave us complete confidence.",
      author: "SaaS Company CEO",
      caseStudyLink: "/blog/case-study-software-development"
    },
    {
      quote: "We had no idea our sustainable building projects qualified for the R&D credit. Credits Granted helped us document everything and secure $180,000 in credits — all without disrupting our work.",
      author: "Construction Firm Partner",
      caseStudyLink: "/blog/case-study-construction"
    },
    {
      quote: "Credits Granted helped us realize that even our process improvements qualified for R&D credits. Their team handled everything seamlessly, and we secured $210,000 in savings.",
      author: "Manufacturing Company CFO",
      caseStudyLink: "/blog/case-study-manufacturing"
    },
    {
      quote: "Credits Granted made it effortless to offer R&D credits to our clients. Their team handled everything professionally and protected our reputation with audit-ready studies.",
      author: "Partner, CPA Firm",
      caseStudyLink: "/blog/case-study-small-cpa-firm"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <blockquote className="text-xl text-[#64748B] max-w-3xl mx-auto italic">
                "{testimonial.quote}"
                <footer className="mt-4 font-semibold not-italic">
                  — {testimonial.author}
                </footer>
                <Link 
                  to={testimonial.caseStudyLink}
                  className="inline-block mt-4 text-[#124C56] hover:text-[#0A6C74] font-semibold text-lg not-italic"
                >
                  Read Full Case Study →
                </Link>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md text-[#124C56] hover:bg-[#F8FAFC] transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md text-[#124C56] hover:bg-[#F8FAFC] transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#124C56]' : 'bg-[#CBD5E1]'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ image, title, snippet, link }: { image: string; title: string; snippet: string; link: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1E293B] mb-2 line-clamp-2">{title}</h3>
        <p className="text-[#64748B] mb-4 line-clamp-2">{snippet}</p>
        <Link 
          to={link}
          className="inline-flex items-center text-[#124C56] hover:text-[#0A6C74] font-semibold"
        >
          Read More
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

function BlogCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      title: "Common Misconceptions About R&D Tax Credits",
      snippet: "Debunking common myths that prevent businesses from claiming valuable R&D tax credits they deserve.",
      link: "/blog/common-misconceptions-about-rd-tax-credits"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      title: "The R&D Tax Credit 4-Part Test Explained",
      snippet: "Understanding the IRS's 4-part test is essential for qualifying R&D activities. Learn how to apply each criterion to your projects.",
      link: "/blog/rd-tax-credit-4-part-test"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      title: "Qualified Research Expenses (QREs): Breaking Down the Basics",
      snippet: "Learn which expenses qualify for the R&D tax credit and how to properly document them for maximum benefit.",
      link: "/blog/qualified-research-expenses-basics"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(blogPosts.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(blogPosts.length / 3)) % Math.ceil(blogPosts.length / 3));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-out flex gap-6"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md text-[#124C56] hover:bg-[#F8FAFC] transition-colors"
        aria-label="Previous blog posts"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md text-[#124C56] hover:bg-[#F8FAFC] transition-colors"
        aria-label="Next blog posts"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {[...Array(Math.ceil(blogPosts.length / 3))].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`testimonial-dot rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#124C56]' : 'bg-[#CBD5E1]'
            }`}
            aria-label={`Go to blog page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('.section-container').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('.calendly-inline-widget');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const qualificationCards = [
    {
      icon: Building,
      title: "Construction",
      description: "Developing energy-efficient designs, evaluating construction techniques.",
      link: "/rd-tax-credit/construction"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Writing code, building tools, creating or enhancing functionality.",
      link: "/rd-tax-credit/software"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Improving production processes, designing prototypes, testing new materials.",
      link: "/rd-tax-credit/manufacturing"
    },
    {
      icon: Plane,
      title: "Aerospace & Defense",
      description: "Designing new components, developing control systems or testing structures.",
      link: "/rd-tax-credit/aerospace"
    },
    {
      icon: Beaker,
      title: "Chemicals & Materials",
      description: "Developing new formulations, testing materials, improving processes.",
      link: "/rd-tax-credit/chemicals"
    },
    {
      icon: Pill,
      title: "Biotechnology & Pharmaceuticals",
      description: "Developing new drugs, optimizing formulations, improving testing processes.",
      link: "/rd-tax-credit/biotechnology"
    },
    {
      icon: Wheat,
      title: "Agriculture & Food Production",
      description: "Developing farming methods, processing improvements, shelf life testing.",
      link: "/rd-tax-credit/agriculture"
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Optimizing systems, smart grid tech, improving energy efficiency.",
      link: "/rd-tax-credit/energy"
    }
  ];

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      title: "Common Misconceptions About R&D Tax Credits",
      snippet: "Debunking common myths that prevent businesses from claiming valuable R&D tax credits they deserve.",
      link: "/blog/common-misconceptions-about-rd-tax-credits"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      title: "The R&D Tax Credit 4-Part Test Explained",
      snippet: "Understanding the IRS's 4-part test is essential for qualifying R&D activities. Learn how to apply each criterion to your projects.",
      link: "/blog/rd-tax-credit-4-part-test"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      title: "Qualified Research Expenses (QREs): Breaking Down the Basics",
      snippet: "Learn which expenses qualify for the R&D tax credit and how to properly document them for maximum benefit.",
      link: "/blog/qualified-research-expenses-basics"
    }
  ];

  return (
    <Layout>
      <SEO
        title="Maximize Your R&D Tax Credits | Credits Granted"
        description="Expert R&D tax credit consulting with full audit protection. Maximize your savings with Credits Granted."
        canonical="https://creditsgranted.com"
      />
      <main>
        <section className="relative min-h-[85vh] hero-section flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative max-w-7xl mx-auto text-center px-4">
            <div className="max-w-[800px] mx-auto">
              <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                R&D Tax Credits Done Right
              </h1>
              <div className="hero-subheadline">
                <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                  No contingency fees. No fluff. Just audit-ready results — from advocates you can trust.
                </p>
              </div>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <CTAButton>
                  Get My Free Evaluation
                </CTAButton>
                <Link 
                  to="/calculator"
                  className="cta-button cta-button-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg" 
                  aria-label="Calculate potential R&D tax credit"
                >
                  Estimate My R&D Tax Credit
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafa] relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#124C56] mb-6">
              What is the R&D Tax Credit?
            </h2>
            <p className="text-lg text-center text-[#64748B] mb-12 max-w-3xl mx-auto">
              The R&D Tax Credit rewards businesses for developing new or improved products and processes. 
              It directly reduces your tax liability — putting real cash savings back into your business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <Briefcase className="w-8 h-8 text-[#124C56]" />
                <p className="text-[#1E293B]">Available to businesses of any size</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <DollarSign className="w-8 h-8 text-[#124C56]" />
                <p className="text-[#1E293B]">Covers wages, supplies, and research contractors</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <FileText className="w-8 h-8 text-[#124C56]" />
                <p className="text-[#1E293B]">Claim retroactively for past work</p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
                <Globe className="w-8 h-8 text-[#124C56]" />
                <p className="text-[#1E293B]">Available across all industries</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafa] relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
              Trusted By Businesses Nationwide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedStat
                value={73000000}
                prefix="$"
                suffix="+"
                label="in credits secured"
                icon={LineChart}
                duration={4}
              />
              <AnimatedStat
                value={500}
                suffix="+"
                label="projects completed"
                icon={FileCheck}
                duration={4}
              />
              <AnimatedStat
                value={11}
                label="years of experience"
                icon={Clock}
                duration={4}
              />
            </div>
          </div>
        </section>

        <section className="section-container py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#124C56] mb-6">
              Who Qualifies for the R&D Tax Credit?
            </h2>
            <p className="text-lg text-center text-[#64748B] mb-12 max-w-3xl mx-auto">
              R&D tax credits apply to a wide range of industries. If you're innovating, improving, or developing — you may qualify.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {qualificationCards.map((card, index) => (
                <FlipCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-container py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafa] relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
              Our Process is Simple — and Built to Protect You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                  <Users className="w-12 h-12 text-[#124C56]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Your Free Evaluation</h3>
                <p className="text-[#64748B]">Schedule your free, no-obligation consultation.</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                  <Calculator className="w-12 h-12 text-[#124C56]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">We Analyze and Document</h3>
                <p className="text-[#64748B]">We review your R&D activities and prepare audit-ready documentation.</p>
              </div>
              <div className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4">
                  <DollarSign className="w-12 h-12 text-[#124C56]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Claim your Credit</h3>
                <p className="text-[#64748B]">Claim your R&D Tax Credit supported by an audit-ready study and expert support.</p>
              </div>
            </div>
            <div className="text-center">
              <CTAButton className="cta-button cta-button-accent">
                Get Started Today
              </CTAButton>
            </div>
          </div>
        </section>
        
        <section className="section-container py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1E293B] mb-12">
              What Our Clients Say
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        <section className="section-container py-16 px-4 sm:px-6 lg:px-8 bg-[#f8fafa] relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-4">
              Insights & Resources
            </h2>
            <p className="text-lg text-center text-[#64748B] mb-12 max-w-3xl mx-auto">
              Explore the latest updates on R&D tax credits and strategies for maximizing your savings.
            </p>
            <BlogCarousel />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default App;