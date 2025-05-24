import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();
  const location = useLocation();

  const industries = [
    { name: 'Construction', path: '/rd-tax-credit/construction' },
    { name: 'Software Development', path: '/rd-tax-credit/software' },
    { name: 'Manufacturing', path: '/rd-tax-credit/manufacturing' },
    { name: 'Aerospace & Defense', path: '/rd-tax-credit/aerospace' },
    { name: 'Agriculture & Food Production', path: '/rd-tax-credit/agriculture' },
    { name: 'Biotechnology & Pharmaceuticals', path: '/rd-tax-credit/biotechnology' },
    { name: 'Chemicals & Materials', path: '/rd-tax-credit/chemicals' },
    { name: 'Energy & Utilities', path: '/rd-tax-credit/energy' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'State Credits', path: '/state-credits' },
    { name: 'Insights', path: '/blog' }
  ];

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsIndustriesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 150);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-[#124C56]">
              Credits Granted
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              index === 1 ? (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-[#124C56]'
                        : 'text-[#64748B] hover:text-[#124C56]'
                    }`}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Industries Dropdown */}
                  <div 
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center text-sm font-medium transition-colors ${
                        isIndustriesOpen ? 'text-[#124C56]' : 'text-[#64748B] hover:text-[#124C56]'
                      }`}
                    >
                      Industries
                      <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isIndustriesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            to={industry.path}
                            className="block px-4 py-2 text-sm text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#124C56] transition-colors"
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#124C56]'
                      : 'text-[#64748B] hover:text-[#124C56]'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://creditsgranted.clientportal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#124C56] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0A6C74] transition-colors"
            >
              Client Portal
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#64748B] hover:text-[#124C56]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              index === 1 ? (
                <React.Fragment key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.path)
                        ? 'text-[#124C56] bg-[#F8FAFC]'
                        : 'text-[#64748B] hover:text-[#124C56] hover:bg-[#F8FAFC]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Industries in mobile menu */}
                  <div className="px-3 py-2">
                    <div className="font-medium text-[#64748B] mb-2">Industries</div>
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        to={industry.path}
                        className="block px-3 py-2 text-sm text-[#64748B] hover:text-[#124C56] hover:bg-[#F8FAFC]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </React.Fragment>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-[#124C56] bg-[#F8FAFC]'
                      : 'text-[#64748B] hover:text-[#124C56] hover:bg-[#F8FAFC]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <a
              href="https://creditsgranted.clientportal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#124C56] text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-[#0A6C74] transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Portal
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;