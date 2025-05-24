import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import BlogLayout from '../components/BlogLayout';
import CTAButton from '../../components/CTAButton';

function Misconception({ title, myth, reality }: { title: string; myth: string; reality: string }) {
  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg mb-12">
      <h3 className="text-xl font-semibold text-[#124C56] mb-4">{title}</h3>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <h4 className="font-semibold text-[#1E293B]">Myth:</h4>
        </div>
        <p className="text-[#475569] pl-7">{myth}</p>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-[#124C56]" />
        <h4 className="font-semibold text-[#1E293B]">Reality:</h4>
      </div>
      <p className="text-[#475569] pl-7">{reality}</p>
    </div>
  );
}

function Misconceptions() {
  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Common Misconceptions About R&D Tax Credits
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" 
            alt="Common Misconceptions About R&D Tax Credits" 
            className="w-full h-[400px] object-cover rounded-xl mb-12"
          />

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#475569] mb-12 leading-relaxed">
              The R&D tax credit is one of the most valuable incentives available to businesses, yet many companies miss out due to common misconceptions. From thinking it's only for high-tech industries to underestimating eligible activities, misunderstandings can cost real money. Here's what you need to know to claim your full credit confidently.
            </p>

            <Misconception
              title="Misconception #1 — Only Tech Companies Qualify"
              myth="R&D tax credits are only for software companies, biotech firms, and other high-tech industries."
              reality="While software development and biotech often qualify, industries like construction, manufacturing, agriculture, and energy also perform qualifying R&D activities."
            />

            <Misconception
              title="Misconception #2 — You Need a Lab or Dedicated R&D Department"
              myth="Only companies with formal research labs or dedicated R&D departments can claim the credit."
              reality="You don't need a lab coat or a research lab. Everyday innovation — improving a product, developing a new process, testing materials — can qualify."
            />

            <Misconception
              title="Misconception #3 — If the Project Fails, You Can't Claim It"
              myth="Only successful R&D projects qualify for the tax credit."
              reality="Even failed R&D efforts can qualify. The IRS recognizes that uncertainty and trial-and-error are part of the innovation process."
            />

            <Misconception
              title="Misconception #4 — It's Too Complicated to Claim"
              myth="The documentation and filing requirements are too complex for most businesses."
              reality="With the right expertise, claiming the credit is straightforward. Audit-ready documentation ensures compliance and maximizes your claim without added stress."
            />

            <Misconception
              title="Misconception #5 — It's Too Small to Be Worth It"
              myth="The potential credit amount isn't worth the effort of claiming it."
              reality="Even small to mid-sized businesses can unlock significant tax savings. Every qualifying project adds up — and cumulative credits can make a big impact on your bottom line."
            />

            <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
              Conclusion: Don't Leave Money on the Table
            </h2>
            <p className="text-xl text-[#475569] mb-12">
              Misconceptions can cost businesses valuable tax savings. If you're improving products, processes, or software, you might already qualify for the R&D tax credit — without even realizing it.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-[#124C56] text-white p-12 rounded-xl text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Out If You Qualify?
            </h2>
            <p className="text-xl mb-8">
              Start with a free, no-obligation feasibility analysis from Credits Granted. Our audit-ready studies make claiming your R&D tax credits easy and stress-free.
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

export default Misconceptions;