import React from 'react';
import Layout from './components/Layout';
import SEO from './components/SEO';

function Privacy() {
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Layout hideConsultation>
      <SEO 
        title="Privacy Policy"
        description="Learn how Credits Granted protects and handles your personal information."
      />
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-[#1E293B] text-center mb-8">Privacy Policy</h1>
          
          <p className="text-[#475569] text-center mb-12">Effective Date: {today}</p>

          <p className="text-[#475569] mb-8">
            Credits Granted ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [creditsgranted.com].
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Information We Collect</h2>
          <p className="text-[#475569] mb-4">
            We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, company name, and any other information you choose to provide through forms or communications.
          </p>
          <p className="text-[#475569] mb-8">
            We may also collect certain information automatically, including your IP address, browser type, operating system, access times, and pages viewed directly before and after accessing the website.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">How We Use the Information</h2>
          <p className="text-[#475569] mb-4">We may use the information we collect to:</p>
          <ul className="list-disc pl-6 text-[#475569] mb-8">
            <li>Provide, operate, and maintain our services</li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Communicate with you about services, updates, and marketing offers</li>
            <li>Analyze website usage to improve performance and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">How We Share the Information</h2>
          <p className="text-[#475569] mb-4">
            We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business. These parties are obligated to keep your information confidential.
          </p>
          <p className="text-[#475569] mb-8">
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-[#475569] mb-8">
            Our website may use cookies, web beacons, and other tracking technologies to enhance your experience. You can set your browser to refuse all or some cookies or alert you when cookies are being sent.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Third-Party Links</h2>
          <p className="text-[#475569] mb-8">
            Our website may contain links to third-party websites. We are not responsible for the content, security, or privacy practices of any third parties.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Your Rights and Choices</h2>
          <p className="text-[#475569] mb-8">
            You have the right to opt out of receiving communications from us at any time. You may also request to access, correct, or delete your personal information by contacting us using the information below.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Data Security</h2>
          <p className="text-[#475569] mb-8">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Changes to This Privacy Policy</h2>
          <p className="text-[#475569] mb-8">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>

          <h2 className="text-2xl font-bold text-[#1E293B] mb-4">Contact Us</h2>
          <p className="text-[#475569]">
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <p className="text-[#475569] mb-4">Credits Granted</p>
          <p className="text-[#475569]">
            Email: <a href="mailto:info@creditsgranted.com" className="text-[#124C56] hover:text-[#0A6C74]">info@creditsgranted.com</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;