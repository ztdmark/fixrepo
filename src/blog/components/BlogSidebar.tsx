import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../../components/CTAButton';

const recentPosts = [
  {
    title: "Case Study: Software Development Firm Secures $275,000 in R&D Credits",
    date: "March 15, 2024",
    link: "/blog/case-study-software-development"
  },
  {
    title: "The R&D Tax Credit 4-Part Test Explained",
    date: "February 15, 2024",
    link: "/blog/rd-tax-credit-4-part-test"
  },
  {
    title: "Common Misconceptions About R&D Tax Credits",
    date: "February 25, 2024",
    link: "/blog/common-misconceptions-about-rd-tax-credits"
  }
];

function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Recent Posts Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              to={post.link}
              className="block group"
            >
              <h4 className="text-[#1E293B] font-medium group-hover:text-[#124C56] line-clamp-2 transition-colors">
                {post.title}
              </h4>
              <span className="text-sm text-[#64748B]">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#124C56] text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-4">Ready to Maximize Your R&D Credits?</h3>
        <p className="text-white/90 mb-6">Book your free evaluation today and discover how much you could save.</p>
        <CTAButton>
          Get My Free Evaluation
        </CTAButton>
      </div>
    </div>
  );
}

export default BlogSidebar;