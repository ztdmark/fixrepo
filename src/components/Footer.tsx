import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#124C56] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Credits Granted</h3>
            <p className="text-[#94A3B8]">Expert R&D tax credit consulting with full audit protection.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#94A3B8] hover:text-white transition-colors" aria-label="Go to homepage">Home</Link></li>
              <li><Link to="/partnerships" className="text-[#94A3B8] hover:text-white transition-colors" aria-label="Learn about our partnerships">Partnerships</Link></li>
              <li><Link to="/insights" className="text-[#94A3B8] hover:text-white transition-colors" aria-label="Read our insights">Insights</Link></li>
              <li><Link to="/privacy" className="text-[#94A3B8] hover:text-white transition-colors" aria-label="View privacy policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@creditsgranted.com" className="text-[#94A3B8] hover:text-white transition-colors" aria-label="Send us an email">info@creditsgranted.com</a></li>
              <li><a href="https://linkedin.com/company/credits-granted" className="text-[#94A3B8] hover:text-white transition-colors" aria-label="Visit our LinkedIn profile">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-[#94A3B8] mb-4">Stay updated with the latest R&D tax credit news.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-[#94A3B8] flex-1 focus:outline-none focus:ring-2 focus:ring-white/20 border border-white/10"
                aria-label="Email address for newsletter"
              />
              <button 
                className="bg-white text-[#124C56] px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#94A3B8]/20 text-center text-[#94A3B8]">
          © {new Date().getFullYear()} Credits Granted. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;