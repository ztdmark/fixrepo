import React, { useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';

interface BlogPost {
  id: number;
  title: string;
  snippet: string;
  image: string;
  categories: string[];
  link: string;
  date?: string;
}

const categories = [
  'Aerospace & Defense',
  'Agriculture & Food Production',
  'Biotechnology & Pharmaceuticals',
  'Case Studies',
  'Chemical & Materials Engineering',
  'Construction',
  'Energy & Utilities',
  'General',
  'Manufacturing',
  'Medical Devices',
  'Software Development'
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Common Misconceptions About R&D Tax Credits",
    snippet: "Debunking common myths that prevent businesses from claiming valuable R&D tax credits they deserve.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    categories: ["General"],
    link: "/blog/common-misconceptions-about-rd-tax-credits",
    date: "February 25, 2024"
  },
  {
    id: 2,
    title: "The Impact of State Tax Laws on R&D Credits: Focus on California",
    snippet: "Understanding how California's state R&D tax credit program works alongside federal benefits.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=800&q=80",
    categories: ["General"],
    link: "/blog/state-tax-laws-california-rd-credits",
    date: "February 20, 2024"
  },
  {
    id: 3,
    title: "The R&D Tax Credit 4-Part Test Explained",
    snippet: "Understanding the IRS's 4-part test is essential for qualifying R&D activities. Learn how to apply each criterion to your projects.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    categories: ["General"],
    link: "/blog/rd-tax-credit-4-part-test",
    date: "February 15, 2024"
  },
  {
    id: 4,
    title: "Qualified Research Expenses (QREs): Breaking Down the Basics",
    snippet: "Learn which expenses qualify for the R&D tax credit and how to properly document them for maximum benefit.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    categories: ["General"],
    link: "/blog/qualified-research-expenses-basics",
    date: "February 10, 2024"
  },
  {
    id: 5,
    title: "Section 174: Navigating Amortization Challenges",
    snippet: "Understanding how Section 174 changes affect R&D expenses and strategies for managing the impact.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    categories: ["General"],
    link: "/blog/section-174-amortization-challenges",
    date: "February 5, 2024"
  },
  {
    id: 6,
    title: "R&D Tax Credits for Manufacturing: How to Qualify and Maximize Savings",
    snippet: "Discover how manufacturers can identify qualifying activities and maximize their R&D tax credit claims.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    categories: ["Manufacturing"],
    link: "/blog/manufacturing-rd-credits",
    date: "January 30, 2024"
  },
  {
    id: 7,
    title: "Software Development R&D Credits: A Complete Guide",
    snippet: "Learn how software development activities can qualify for R&D tax credits and maximize your benefits.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    categories: ["Software Development"],
    link: "/blog/software-rd-credits",
    date: "January 25, 2024"
  },
  {
    id: 8,
    title: "R&D Tax Credits for Biotech and Pharmaceuticals",
    snippet: "How biotech and pharmaceutical companies can leverage R&D credits for their research activities.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    categories: ["Biotechnology & Pharmaceuticals"],
    link: "/blog/biotech-rd-credits",
    date: "January 20, 2024"
  },
  {
    id: 9,
    title: "Agricultural Innovation and R&D Tax Credits",
    snippet: "Explore how agricultural businesses can qualify for R&D credits through innovative farming and food production.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
    categories: ["Agriculture & Food Production"],
    link: "/blog/agriculture-rd-credits",
    date: "January 15, 2024"
  },
  {
    id: 10,
    title: "Chemical and Materials R&D: Maximizing Tax Benefits",
    snippet: "How chemical and materials companies can identify qualifying R&D activities and maximize tax savings.",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
    categories: ["Chemical & Materials Engineering"],
    link: "/blog/chemical-rd-credits",
    date: "January 10, 2024"
  },
  {
    id: 11,
    title: "Construction Industry R&D Tax Credits Guide",
    snippet: "Understanding how construction companies can qualify for R&D credits through innovative building practices.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    categories: ["Construction"],
    link: "/blog/construction-rd-credits",
    date: "January 5, 2024"
  },
  {
    id: 12,
    title: "Energy and Utilities: R&D Tax Credit Opportunities",
    snippet: "How energy and utility companies can leverage R&D credits for innovative technologies and processes.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
    categories: ["Energy & Utilities"],
    link: "/blog/energy-rd-credits",
    date: "December 30, 2023"
  },
  {
    id: 13,
    title: "Medical Device R&D Tax Credits: A Comprehensive Guide",
    snippet: "Learn how medical device manufacturers can qualify their development activities for R&D tax credits.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    categories: ["Medical Devices"],
    link: "/blog/medical-rd-credits",
    date: "December 25, 2023"
  },
  {
    id: 14,
    title: "Aerospace and Defense R&D Tax Credits",
    snippet: "How aerospace and defense companies can maximize tax savings through R&D credits.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80",
    categories: ["Aerospace & Defense"],
    link: "/blog/aerospace-rd-credits",
    date: "December 20, 2023"
  },
  {
    id: 15,
    title: "Case Study: Software Development Firm Secures $275,000 in R&D Credits",
    snippet: "Learn how a growing software company maximized their R&D tax credits through comprehensive documentation and expert guidance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    categories: ["Case Studies", "Software Development"],
    link: "/blog/case-study-software-development",
    date: "March 15, 2024"
  },
  {
    id: 16,
    title: "Case Study: Construction Firm Secures $180,000 in R&D Credits",
    snippet: "Learn how a construction company maximized their R&D tax credits through innovative building designs and energy efficiency improvements.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    categories: ["Case Studies", "Construction"],
    link: "/blog/case-study-construction",
    date: "March 10, 2024"
  },
  {
    id: 17,
    title: "Case Study: Manufacturing Firm Secures $210,000 in R&D Credits",
    snippet: "Learn how a manufacturing company maximized their R&D tax credits through process improvements and innovation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    categories: ["Case Studies", "Manufacturing"],
    link: "/blog/case-study-manufacturing",
    date: "March 5, 2024"
  },
  {
    id: 18,
    title: "Case Study: Small CPA Firm Expands Services Without Adding Staff",
    snippet: "Learn how a boutique CPA firm partnered with Credits Granted to offer R&D tax credit services and secure over $500,000 in credits for their clients.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    categories: ["Case Studies"],
    link: "/blog/case-study-small-cpa-firm",
    date: "March 1, 2024"
  }
];

const featuredPost = blogPosts[0];
const recentPosts = blogPosts.slice(1, 4);

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts
    .filter(post => !searchQuery || post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(post => !selectedCategory || post.categories.includes(selectedCategory))
    .filter(post => post.id !== featuredPost.id);

  return (
    <Layout>
      <SEO 
        title="R&D Tax Credit Insights & Resources | Credits Granted"
        description="Expert advice, case studies, and strategies for maximizing your R&D tax credits. Stay updated with the latest industry insights."
        canonical="https://creditsgranted.com/insights"
        type="blog"
      />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert advice, real-world case studies, and strategies for maximizing your R&D tax credits.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 px-4 bg-[#f8fafa]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#1E293B] mb-8">Featured Insight</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <Link to={featuredPost.link} className="block w-full h-[400px] overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-sm text-[#124C56] font-medium mb-2">
                    {featuredPost.categories[0]}
                  </span>
                  <Link to={featuredPost.link} className="group">
                    <h3 className="text-3xl font-bold text-[#1E293B] mb-4 group-hover:text-[#124C56] transition-colors">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="text-lg text-[#64748B] mb-6">
                    {featuredPost.snippet}
                  </p>
                  <Link 
                    to={featuredPost.link}
                    className="inline-flex items-center text-[#124C56] hover:text-[#0A6C74] font-semibold text-lg group"
                  >
                    Read More 
                    <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content with Sidebar */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map(post => (
                    <div 
                      key={post.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    >
                      <Link 
                        to={post.link}
                        className="block w-full h-48 overflow-hidden"
                      >
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#124C56] font-medium">
                            {post.categories[0]}
                          </span>
                          <span className="text-sm text-[#64748B]">
                            {post.date}
                          </span>
                        </div>
                        <Link 
                          to={post.link}
                          className="group"
                        >
                          <h3 className="text-xl font-bold text-[#1E293B] mb-2 line-clamp-2 group-hover:text-[#124C56] transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-[#64748B] mb-4 line-clamp-2">
                          {post.snippet}
                        </p>
                        <Link 
                          to={post.link}
                          className="inline-flex items-center text-[#124C56] hover:text-[#0A6C74] font-semibold group"
                        >
                          Read More 
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3 space-y-8">
                {/* Search */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#124C56] focus:border-transparent"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category === selectedCategory ? '' : category)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-[#124C56] text-white'
                            : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map(post => (
                      <Link
                        key={post.id}
                        to={post.link}
                        className="block group"
                      >
                        <h4 className="text-[#1E293B] font-medium group-hover:text-[#124C56] line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-sm text-[#64748B]">{post.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-[#124C56] p-6 rounded-lg text-white text-center">
                  <h3 className="text-xl font-semibold mb-4">Ready to Maximize Your R&D Credits?</h3>
                  <p className="text-white/90 mb-6">Book your free evaluation today and discover how much you could save.</p>
                  <button className="w-full bg-white text-[#124C56] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Get My Free Evaluation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default BlogPage;