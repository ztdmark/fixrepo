import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import CountUp from 'react-countup';
import Layout from './components/Layout';
import SEO from './components/SEO';
import ConsultationSection from './components/ConsultationSection';

interface Industry {
  name: string;
  percentage: number;
  link: string;
}

const industries: Industry[] = [
  { name: 'Aerospace & Defense', percentage: 2.5, link: '/blog/aerospace-rd-credits' },
  { name: 'Agriculture & Food Production', percentage: 3.5, link: '/blog/agriculture-rd-credits' },
  { name: 'Biotechnology & Pharmaceuticals', percentage: 4.0, link: '/blog/biotech-rd-credits' },
  { name: 'Chemicals & Materials Engineering', percentage: 2.5, link: '/blog/chemical-rd-credits' },
  { name: 'Construction', percentage: 2.0, link: '/blog/construction-rd-credits' },
  { name: 'Energy & Utilities', percentage: 3.5, link: '/blog/energy-rd-credits' },
  { name: 'Manufacturing', percentage: 2.0, link: '/blog/manufacturing-rd-credits' },
  { name: 'Medical Devices', percentage: 2.5, link: '/blog/medical-rd-credits' },
  { name: 'Software Development', percentage: 5.5, link: '/blog/software-rd-credits' }
];

const qualifyingActivities = [
  'Hire US-based engineers, developers, or scientists',
  'Design and develop product prototypes and/or software',
  'Perform experimentation and validation on products, manufacturing processes, and/or software',
  'None of the above'
];

function BlogPreviewCard({ industry }: { industry: string }) {
  const industryData = industries.find(i => i.name === industry);
  if (!industryData) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden mt-6">
      <img 
        src={`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80`}
        alt={`${industry} Innovation`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1E293B] mb-2">
          How {industry} Companies Maximize R&D Tax Credits
        </h3>
        <p className="text-[#64748B] mb-4">
          Learn how companies in your industry are leveraging R&D tax credits to fund innovation and growth.
        </p>
        <Link 
          to={industryData.link}
          className="inline-flex items-center text-[#124C56] hover:text-[#0A6C74] font-semibold group"
        >
          Read More 
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

function Calculator() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [totalWages, setTotalWages] = useState<string>('');
  const [estimatedCredit, setEstimatedCredit] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [showAmount, setShowAmount] = useState(false);

  useEffect(() => {
    if (estimatedCredit !== null) {
      // Reset animation state
      setShowAmount(false);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#124C56', '#0A6C74', '#E6F2F3'],
        disableForReducedMotion: true
      });

      // Show amount with slight delay for animation
      setTimeout(() => setShowAmount(true), 100);
    }
  }, [estimatedCredit]);

  const calculateCredit = () => {
    setError('');
    setEstimatedCredit(null);
    setShowAmount(false);

    if (!selectedIndustry || !selectedActivity || !totalWages) {
      setError('Please fill in all fields');
      return;
    }

    if (selectedActivity === 'None of the above') {
      setError('You may not qualify for R&D tax credits based on your selections. Contact us for a personalized evaluation.');
      return;
    }

    const wages = parseFloat(totalWages.replace(/[^0-9.]/g, ''));
    if (isNaN(wages) || wages <= 0) {
      setError('Please enter a valid wage amount');
      return;
    }

    const industry = industries.find(i => i.name === selectedIndustry);
    if (industry) {
      const credit = wages * (industry.percentage / 100);
      setEstimatedCredit(credit);
      
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/[^0-9.]/g, '');
    if (number === '') return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(parseFloat(number));
  };

  const handleWageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setTotalWages(formatCurrency(value));
  };

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <SEO 
        title="R&D Tax Credit Calculator | Estimate Your Savings"
        description="Calculate your potential R&D tax credit savings with our easy-to-use calculator. Get an instant estimate of your qualified research expenses."
        canonical="https://creditsgranted.com/calculator"
      />
      <div className="min-h-screen bg-[#F8FAFC] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1E293B] mb-6">
                Try Our R&D Tax Credit Calculator
              </h1>
              <p className="text-xl text-[#475569] mb-8">
                See how much you qualify to receive from the IRS.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <CalculatorIcon className="w-6 h-6 text-[#124C56]" />
                  <h2 className="text-xl font-semibold text-[#1E293B]">How It Works</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#124C56] text-white rounded-full flex items-center justify-center text-sm">1</span>
                    <span className="text-[#475569]">Select your industry and qualifying activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#124C56] text-white rounded-full flex items-center justify-center text-sm">2</span>
                    <span className="text-[#475569]">Enter your total wages for the current year</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#124C56] text-white rounded-full flex items-center justify-center text-sm">3</span>
                    <span className="text-[#475569]">Get an instant estimate of your potential credit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Calculator Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Select your industry
                  </label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124C56] focus:border-transparent"
                  >
                    <option value="">Select an industry...</option>
                    {industries.map((industry) => (
                      <option key={industry.name} value={industry.name}>
                        {industry.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Which of these apply to your business?
                  </label>
                  <select
                    value={selectedActivity}
                    onChange={(e) => setSelectedActivity(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124C56] focus:border-transparent"
                  >
                    <option value="">Select an activity...</option>
                    {qualifyingActivities.map((activity) => (
                      <option key={activity} value={activity}>
                        {activity}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Enter Current Year Total Wages
                  </label>
                  <input
                    type="text"
                    value={totalWages}
                    onChange={handleWageChange}
                    placeholder="$0"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124C56] focus:border-transparent"
                  />
                </div>

                <button
                  onClick={calculateCredit}
                  className="w-full bg-[#124C56] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0A6C74] transition-all"
                >
                  Estimate
                </button>

                {error && (
                  <div className="flex items-start gap-2 text-red-600">
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Section */}
          {estimatedCredit !== null && !error && (
            <div id="results-section" className="mt-12">
              <div className="bg-[#0A6C74] p-8 rounded-xl shadow-sm text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">
                  🎉 Congratulations! Here's What You Could Save:
                </h2>
                <div className={`flex justify-center mb-6 transition-opacity duration-500 ${showAmount ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-5xl font-bold text-white">
                    <CountUp
                      start={0}
                      end={estimatedCredit}
                      duration={1}
                      separator=","
                      prefix="$"
                      decimals={0}
                      className="animate-pulse"
                    />
                  </div>
                </div>
                <p className="text-lg text-white mb-6">
                  Schedule a call now to start claiming your benefit!
                </p>
                <button
                  onClick={scrollToCalendly}
                  className="bg-white text-[#0A6C74] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Schedule a Call
                </button>
              </div>

              {/* Industry-specific Blog Section */}
              <div className="max-w-2xl mx-auto mt-8">
                <h3 className="text-xl font-semibold text-center text-[#1E293B] mb-4">
                  Learn More About R&D Tax Credits in {selectedIndustry}
                </h3>
                <BlogPreviewCard industry={selectedIndustry} />
              </div>
            </div>
          )}

          {/* Calendly Section */}
          <div id="calendly-section" className="mt-16">
            <ConsultationSection />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Calculator;