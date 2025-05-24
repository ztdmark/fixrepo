import React, { useState } from 'react';
import { CompassIcon, AlertCircle, CheckCircle, MapPin, ArrowRight } from 'lucide-react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Link } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';

const northeastStates = [
  { code: 'ME', name: 'Maine' },
  { code: 'VT', name: 'Vermont' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'DE', name: 'Delaware' },
  { code: 'MD', name: 'Maryland' },
  { code: 'DC', name: 'District of Columbia' }
];

const stateData = [
  {
    state: "Arizona",
    form: "Form 308 (plus Form 308-SBI for small business refund applications)",
    entities: "C-Corps, S-Corps, Partnerships, LLCs",
    creditType: "Nonrefundable (Partially refundable for small businesses under 150 employees)",
    percentage: "24% of first $2.5M in QREs, 15% above $2.5M; plus 10% for university basic research",
    eligibility: "QREs must be incurred in Arizona and meet IRC §41 definition. Refundable portion requires pre-approval by Arizona Commerce Authority.",
    description: "Arizona offers a strong R&D credit with a two-tier structure and a partial refund option for qualifying small businesses. Credits carry forward 10–15 years depending on tax year.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Arkansas",
    form: "AR1100RC5 (attach AEDC certificate)",
    entities: "Businesses with approved R&D programs in Arkansas",
    creditType: "Nonrefundable (Certain credits may be sold once with approval)",
    percentage: "20% for in-house R&D, 33% for university or targeted business research",
    eligibility: "Projects must be approved by Arkansas Economic Development Commission. Targeted high-tech companies may sell credits one time.",
    description: "Arkansas offers a variety of R&D incentives with higher credits for university partnerships or targeted high-tech sectors. Credits carry forward 9 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "California",
    form: "FTB 3523",
    entities: "C-Corps, S-Corps, Partnerships (pass-through to owners)",
    creditType: "Nonrefundable (not usable against AMT or $800 minimum franchise tax)",
    percentage: "15% of excess QREs above base amount, 24% for university research",
    eligibility: "Must be performed in California. Credit mirrors federal IRC §41 definitions but limited to in-state expenses.",
    description: "California's R&D credit is permanent, uncapped, and based on federal QRE definitions. Alternative calculation methods are available but require state approval to change.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Colorado",
    form: "Form DR 1366 (with EZ certification)",
    entities: "Businesses operating in designated Enterprise Zones",
    creditType: "Nonrefundable (carryforward allowed indefinitely)",
    percentage: "3% of increased QREs over prior two-year average",
    eligibility: "Research must occur in an Enterprise Zone. Pre-certification with local EZ administrator may be required.",
    description: "Colorado provides an Enterprise Zone R&D credit to incentivize research in economically targeted areas. Credits carry forward indefinitely.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Connecticut",
    form: "CT-1120 RDC, CT-1120K; CT-1120 XCH (for small biz refund exchange)",
    entities: "Corporations with CT-based research expenses",
    creditType: "Nonrefundable (Refundable for small businesses at 65%)",
    percentage: "6% for small businesses; 1–6% sliding scale for larger companies",
    eligibility: "R&D must be performed in Connecticut. Refundable exchange only available to companies under $70M in gross income.",
    description: "Connecticut's two-tier R&D credit supports both small and large corporations. Refund option available for eligible small businesses with no tax liability.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Delaware",
    form: "Forms 2070AC or 2071AC (application), Form 700 (claim)",
    entities: "C-Corps, S-Corps, Partnerships (pass-throughs)",
    creditType: "Fully refundable",
    percentage: "10% of excess QREs (or 50% of federal ASC); double for small businesses",
    eligibility: "Must incur Delaware QREs and apply by Sept 15; must have 3 consecutive years of activity in DE",
    description: "Delaware offers a refundable R&D credit based on either 10% of excess QREs or 50% of the federal ASC amount. Small businesses receive double rates. Credits are subject to an annual $5M cap and are prorated among applicants. Federal credit is not required.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Florida",
    form: "F-1193EC (application), F-1120 (claim)",
    entities: "C-Corps only in qualified target industries",
    creditType: "Non-refundable",
    percentage: "10% of excess Florida QREs over prior 4-year average",
    eligibility: "Must be a certified 'Qualified Target Industry' business and increase R&D in Florida",
    description: "Florida provides a competitive R&D credit for companies in designated industries. Must apply between March 20–27. The program has a $9M annual cap and credits are prorated if oversubscribed.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Georgia",
    form: "IT-RD (credit), IT-WH (withholding election), Form 600 (claim)",
    entities: "All businesses except those primarily retail",
    creditType: "Non-refundable (can offset payroll withholding)",
    percentage: "10% of excess GA QREs over base",
    eligibility: "Must have increased QREs over a 3-year base (or reduced % if <3 years)",
    description: "Georgia's credit is non-refundable but can be applied to income tax or Georgia payroll withholding. Useful for startups with little tax liability. First-time claimants have reduced credit.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Hawaii",
    form: "N-346 and N-346A",
    entities: "Qualified High Technology Businesses (QHTBs)",
    creditType: "Fully refundable",
    percentage: "100% of federal R&D credit (typically ~20% of QREs)",
    eligibility: "Must qualify as a QHTB and file annual survey with DBEDT",
    description: "Hawaii offers one of the most generous refundable credits in the U.S. equal to the federal credit. Subject to $5M annual statewide cap. Businesses must submit an annual certification and survey.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Idaho",
    form: "Form 67",
    entities: "All businesses with Idaho-based R&D",
    creditType: "Non-refundable",
    percentage: "5% of current-year Idaho QREs",
    eligibility: "Research must be in-state and meet IRC §41 criteria",
    description: "Idaho provides a flat 5% credit on QREs without a base amount. Carryforward allowed for 14 years. Credit can offset income tax or be applied against sales/use tax on certain qualifying R&D purchases.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Illinois",
    form: "Schedule 1299-D (corporations), Schedule CR (individuals)",
    entities: "Corporations, Partnerships, Trusts",
    creditType: "Non-refundable",
    percentage: "6.5% of Illinois QREs above 3-year base",
    eligibility: "Must have increased Illinois R&D expenses. Based on IRC §41. Applies to in-state QREs only. Combined groups use a unitary calculation.",
    description: "Illinois mirrors the federal method but offers a flat 6.5% credit on excess QREs. Credit is available through 2027 and carries forward 5 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Indiana",
    form: "IT-20REC (corporate), IT-40 Schedule 6 (individuals)",
    entities: "C-Corps, S-Corps, Partnerships",
    creditType: "Non-refundable",
    percentage: "15% of first $1M excess QREs, 10% above that; or 10% simplified method",
    eligibility: "QREs in Indiana per IRC §41. Two calculation methods allowed per taxpayer per year.",
    description: "Indiana offers flexible calculation with higher rates for smaller companies. Credit is non-refundable and carries forward 10 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Iowa",
    form: "IA 128, IA 128S (if applicable)",
    entities: "C-Corps, Pass-through Entities",
    creditType: "Partially refundable",
    percentage: "6.5% of excess QREs or 4.55% under ASC",
    eligibility: "Available to federal R&D claimants with Iowa QREs. Refundable % phased down over time.",
    description: "Iowa provides one of the most generous state R&D credits. A large portion is refundable, and refunds are common for qualifying manufacturers.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Kansas",
    form: "Form K-53, Form K-260 (if transferred)",
    entities: "All businesses (expanded in 2023)",
    creditType: "Non-refundable (transferable once)",
    percentage: "10% of QREs above base (from 2023)",
    eligibility: "Qualified Kansas-based research; transferable if no tax liability (1-time only).",
    description: "Kansas recently expanded its credit to more businesses and increased the rate. Unused credits can be sold once and carry forward up to 4 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Kentucky",
    form: "Schedule QR",
    entities: "Corporations and Pass-through Entities with income or LLET",
    creditType: "Non-refundable",
    percentage: "5% of facility investment costs (or 15% in economic development areas)",
    eligibility: "Must construct or improve facilities for R&D in Kentucky. Only applies to tangible, depreciable property.",
    description: "Kentucky's credit focuses on physical R&D infrastructure, not operational expenses. Carries forward 10 years and can offset income or LLET.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Louisiana",
    form: "LED Research Credit Application (via FastLane), Form R-6410",
    entities: "All businesses (rates vary by employee count)",
    creditType: "Refundable for small businesses and SBIR recipients; otherwise non-refundable",
    percentage: "30% (<50 employees), 10% (50–99 employees), 5% (100+); 30% for SBIR grants",
    eligibility: "Must apply to LED for certification. Credit based on incremental LA QREs. Certain professional services firms are excluded.",
    description: "Louisiana offers refundable credits for small businesses and SBIR-funded R&D. Requires LED application and approval. Credits vary based on company size and are calculated on incremental QREs.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Maine",
    form: "Form 1040RC or Maine Schedule A-1040RC",
    entities: "All business entities",
    creditType: "Non-refundable",
    percentage: "5% of excess QREs + 7.5% of basic research payments",
    eligibility: "QREs must be in Maine. Must exceed 3-year base. Only corporate excise tax can be offset.",
    description: "Maine provides a modest R&D credit for companies increasing in-state QREs. It includes a bonus for payments to Maine research organizations. Carryforward allowed for 15 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Maryland",
    form: "Application to Maryland Commerce (Sept 15 deadline), Form 500CR",
    entities: "All business entities (refundable for small businesses)",
    creditType: "Partially refundable for small businesses; non-refundable otherwise",
    percentage: "3% of excess QREs (Basic), 10% of increase over prior year (Growth)",
    eligibility: "QREs must be in MD. Application required annually. Credit allocation subject to $12M cap.",
    description: "Maryland offers Basic and Growth R&D credits, with partial refundability for small businesses. The program is capped and requires annual Commerce certification.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Massachusetts",
    form: "Schedule RC (attached to Form 355 or 355S)",
    entities: "C-Corps (S-corps for corporate tax only; pass-throughs excluded)",
    creditType: "Non-refundable",
    percentage: "10% of excess QREs + 15% of basic research payments; 5–7.5% under ASC",
    eligibility: "QREs must be in MA. Applies to corporate excise tax only. ASC election available.",
    description: "MA's R&D credit applies only to corporations and is capped based on excise paid. ASC and regular methods are available. Unused credits carry forward up to 15 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Michigan",
    form: "Form TBD (effective 2025; guidance pending)",
    entities: "All business entities",
    creditType: "Refundable",
    percentage: "Large: 3% base + 10% above base (up to $2M); Small: 3% + 15% (up to $250K); $200K bonus for university collaboration",
    eligibility: "QREs must be in MI. Credit effective 2025. Annual $100M statewide cap; proration if exceeded.",
    description: "Michigan's newly reintroduced R&D credit is fully refundable and includes a bonus for collaboration with MI public universities. Subject to an annual statewide cap of $100M.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Minnesota",
    form: "Schedule RD (attached to Form M4 or M1)",
    entities: "C-Corps, Individuals via pass-throughs",
    creditType: "Non-refundable",
    percentage: "10% of first $2M in MN QREs, 4% above $2M",
    eligibility: "Applies to QREs in Minnesota. No base amount required. All qualifying MN research eligible.",
    description: "Minnesota offers a simple, tiered credit with no base calculation required. Credit applies to both corporate and individual taxpayers. Carryforward allowed for 15 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Missouri",
    form: "Form MO-R&D (application), Form MO-TC (claim)",
    entities: "Corporations and pass-throughs",
    creditType: "Non-refundable (transferable with approval)",
    percentage: "15% of excess QREs; 20% if university partnered",
    eligibility: "Must apply to MO DED after the tax year. QREs must exceed 3-year base. Program capped at $10M per year.",
    description: "Missouri reintroduced its credit in 2023. Includes bonus for university research. Capped and requires approval. Credits may be sold with DED permission.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Nebraska",
    form: "Form 3800N",
    entities: "C-Corps and pass-throughs",
    creditType: "Refundable (C-corps or entity level); non-refundable if passed through",
    percentage: "15% of federal credit tied to NE QREs; 35% if on-campus",
    eligibility: "Must use E-Verify for new hires. Based on share of federal R&D credit attributable to Nebraska research.",
    description: "Nebraska's credit is refundable and tied to the federal calculation. Enhanced for on-campus research. Also allows refunds of sales/use tax and requires E-Verify participation.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "New Hampshire",
    form: "Form DP-165 (application), DP-160 (claim)",
    entities: "All business entities",
    creditType: "Non-refundable",
    percentage: "10% of excess NH QREs",
    eligibility: "Must apply between May 1 and June 30 after tax year. Applied to BPT and BET. Annual cap of $7M statewide.",
    description: "New Hampshire's credit offsets BPT/BET liabilities and must be applied for. Credit is capped and prorated. Carryforward allowed 5 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "New Jersey",
    form: "Form 306 (attached to CBT-100 or BFC-1)",
    entities: "C-Corps (CBT filers only)",
    creditType: "Non-refundable",
    percentage: "10% of excess QREs + 10% of basic research payments",
    eligibility: "Available to C-corps only. Must use same federal method (regular or ASC). Max credit = 50% of CBT due; $10M limit per taxpayer.",
    description: "New Jersey mirrors the federal credit structure and limits use to corporate taxpayers. Credits may be sold under separate NJEDA programs. Carryforward 7 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "New Mexico",
    form: "Form RPD-41385 (application), Form RPD-41290 (claim)",
    entities: "All business entities",
    creditType: "Refundable (for small businesses or via offset to GRT/withholding); otherwise non-refundable",
    percentage: "5% basic (10% in rural areas); +5% additional for payroll growth (10% in rural areas)",
    eligibility: "Must apply within 1 year after tax year ends. R&D must be in NM and meet payroll criteria for additional credit.",
    description: "New Mexico offers a two-tier credit with higher rates in rural areas and for companies increasing payroll. Refundable for small businesses or when applied to GRT/withholding taxes. Carryforward allowed 3 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "New York",
    form: "CT-607 (corporations), IT-607 (individuals), ESD Excelsior Forms",
    entities: "C-Corps and certified Excelsior program participants (some pass-throughs eligible)",
    creditType: "Fully refundable",
    percentage: "50% of federal credit attributable to NY, capped at 6% of NY QREs (8% for green projects)",
    eligibility: "Must be in Excelsior Program and meet job/investment targets. Annual ESD compliance reports required.",
    description: "New York's Excelsior R&D credit is fully refundable and tied to job growth/investment. Available only to approved program participants, with a 6–8% cap on QREs. Claimed over up to 10 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "North Dakota",
    form: "Schedule R&D (with income tax return)",
    entities: "All business entities",
    creditType: "Non-refundable (transferable for new companies)",
    percentage: "25% of first $100K excess QREs, 8% above that (alt method: 17.5%/5.6%)",
    eligibility: "QREs must exceed 3-year base. Special transfer election for post-2016 R&D startups certified by ND Commerce.",
    description: "ND provides a high 25% initial rate with carryback and 15-year carryforward. New research companies can sell up to $100K of unused credit. Taxpayer can elect method annually.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Ohio",
    form: "FIT or Insurance Tax Credit Schedule (formerly Schedule R&D)",
    entities: "Primarily financial institutions or insurers",
    creditType: "Non-refundable",
    percentage: "7% of Ohio QREs exceeding 3-year average",
    eligibility: "Limited to certain taxpayers under FIT or franchise tax. Not applicable to general CAT filers.",
    description: "Ohio's R&D credit applies in narrow contexts (e.g., banks or insurers). Carryforward 7 years. Most Ohio businesses have no usable R&D credit under current tax structure.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Pennsylvania",
    form: "Annual application to PA DOR; credit certificate then claimed on PA return",
    entities: "All businesses (C-Corps, pass-throughs, individuals)",
    creditType: "Non-refundable (transferable/saleable for small businesses)",
    percentage: "10% of QREs above base; 20% for small businesses",
    eligibility: "Annual application required. Must have at least two prior years of PA R&D expenditures.",
    description: "PA's credit is capped and allocated annually. Small businesses may sell unused credits. Carryforward 15 years. Must meet application deadlines for approval.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Rhode Island",
    form: "Schedule 7695E (attached to RI-1120C or RI-1065)",
    entities: "C-Corps and pass-through entities (corporate tax only)",
    creditType: "Non-refundable",
    percentage: "22.5% of first $111,111 in excess QREs, 16.9% thereafter",
    eligibility: "QREs must exceed 3-year base. Applies to corporate tax; limited offset (up to 50% of liability).",
    description: "Rhode Island offers a two-tier credit with one of the highest initial rates. Credits can offset up to 50% of tax due and carry forward 7 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "South Carolina",
    form: "Schedule TC-18 (attached to SC1120 or individual return)",
    entities: "All business entities",
    creditType: "Non-refundable",
    percentage: "5% of all South Carolina QREs",
    eligibility: "No base amount required. Credit limited to 50% of tax liability per year.",
    description: "South Carolina provides a flat 5% credit on in-state research expenditures with no base. Unused credit carries forward 10 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Texas",
    form: "Form 05-178 (with 05-179); AP-234 (for sales tax exemption)",
    entities: "C-Corps, LLCs, and other franchise tax filers",
    creditType: "Non-refundable",
    percentage: "5% of excess over base or 6.25% ASC method",
    eligibility: "Cannot use franchise tax credit and sales tax exemption in same year. QREs must be self-funded.",
    description: "Texas offers a franchise tax R&D credit or a sales tax exemption, but not both. Credit can carry forward 20 years. Common among tech and manufacturing firms.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Utah",
    form: "TC-40A Part 4 (code 12) or Schedule ACT (code 12)",
    entities: "All business entities",
    creditType: "Non-refundable",
    percentage: "5% of excess QREs, 5% of basic university payments, 7.5% flat on current QREs (non-carryforward)",
    eligibility: "Multiple credit components. Flat 7.5% portion cannot carry forward. Others carry 14 years.",
    description: "Utah's credit has incremental and flat-rate components. The flat 7.5% must be used in the year earned. Other portions carry forward 14 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Vermont",
    form: "Form BA-404 (with corporate or individual return)",
    entities: "All business entities",
    creditType: "Non-refundable",
    percentage: "27% of the federal R&D credit attributable to Vermont",
    eligibility: "Must qualify for and claim the federal R&D credit. No VT-specific base or computation.",
    description: "Vermont offers 27% of the federal R&D credit related to VT research. Requires federal credit to be claimed. Carryforward 10 years.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Virginia",
    form: "Form RDC (application), Schedule CR (claim with certification letter)",
    entities: "All business entities (segmented by QREs)",
    creditType: "Refundable for small filers; non-refundable for major filers",
    percentage: "Small: 15% or 20% of first $300K in excess QREs; Major: 10% of excess over 50% of 3-year average",
    eligibility: "Businesses with ≤$5M in VA QREs may claim small credit. >$5M must claim major credit. Annual application required by Sep 1.",
    description: "Virginia offers two tiers of credit based on R&D spending level. Small businesses receive refundable credits up to $60K. Large filers get a 10% credit with 10-year carryforward. Program capped and credits may be prorated.",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Wisconsin",
    form: "Schedule R (Form 4, 5, or 1); Schedule R-1 (optional), R-FA (refund)",
    entities: "C-Corps, S-Corps and partnerships (passed through to owners)",
    creditType: "Non-refundable (partially refundable for certified new businesses)",
    percentage: "5.75% standard; up to 25% for small firms or special designs",
    eligibility: "Must conduct R&D in WI and meet IRC §41. Enhanced rates apply for small employers or energy/engine design. ASC method also available.",
    description: "Wisconsin offers tiered rates based on firm size and type of research. Credits can offset tax or be partially refunded for qualified startups. Standard 15-year carryforward applies (5 years for special design).",
    readMore: "https://creditsgranted.com/blog"
  },
  {
    state: "Alabama",
    note: "No state R&D credit"
  },
  {
    state: "Alaska",
    note: "No state R&D credit (no income tax on most businesses)"
  },
  {
    state: "Mississippi",
    note: "No state R&D credit"
  },
  {
    state: "Montana",
    note: "No current R&D credit (expired in 2010)"
  },
  {
    state: "Nevada",
    note: "No state income tax, thus no R&D credit"
  },
  {
    state: "North Carolina",
    note: "R&D credit expired in 2015, not renewed"
  },
  {
    state: "Oklahoma",
    note: "R&D credit effectively repealed after 2011"
  },
  {
    state: "Oregon",
    note: "R&D credit expired end of 2011"
  },
  {
    state: "South Dakota",
    note: "No income tax, no R&D credit"
  },
  {
    state: "Tennessee",
    note: "No general R&D credit (focus on other incentives)"
  },
  {
    state: "Washington",
    note: "No income tax; prior B&O R&D credit expired"
  },
  {
    state: "West Virginia",
    note: "No current R&D credit (prior credit expired)"
  },
  {
    state: "Wyoming",
    note: "No income tax, no R&D credit"
  },
  {
    state: "District of Columbia",
    note: "This jurisdiction currently does not offer a Research & Development (R&D) tax credit program. While federal R&D tax credits may still be available, there are no additional district-level incentives for R&D activities in the District of Columbia."
  }
];

function StateButton({ code, name, isSelected, onClick }: {
  code: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`px-4 py-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#124C56] ${
        isSelected 
          ? 'bg-[#008080] text-white shadow-lg transform -translate-y-0.5' 
          : 'bg-[#1E293B] text-white hover:bg-[#1E293B]/90'
      }`}
      onClick={onClick}
      role="button"
      aria-label={name}
      aria-pressed={isSelected}
    >
      {code}
    </button>
  );
}

function StateCredits() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleStateClick = (geo: any) => {
    setSelectedState(geo.properties.name);
  };

  const handleStateButtonClick = (stateName: string) => {
    setSelectedState(stateName);
  };

  const getStateData = (stateName: string) => {
    return stateData.find(data => data.state === stateName);
  };

  const hasRDProgram = (stateData: any) => {
    return stateData && !stateData.note;
  };

  const getStateUrl = (stateName: string) => {
    return `/state-rd-tax-credit/${stateName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <Layout>
      <SEO 
        title="State R&D Tax Credits | Credits Granted"
        description="Explore state-specific R&D tax credit opportunities and maximize your tax savings across multiple jurisdictions."
        canonical="https://creditsgranted.com/state-credits"
      />
      
      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-[#124C56] to-[#0A6C74] py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              State R&D Tax Credits
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover state-specific R&D tax incentives by selecting your state below
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="relative" style={{ height: "600px" }}>
                  <ComposableMap
                    projection="geoAlbersUsa"
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
                      {({ geographies }) =>
                        geographies.map((geo) => (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => handleStateClick(geo)}
                            style={{
                              default: {
                                fill: geo.properties.name === selectedState ? '#0A6C74' : '#1E293B',
                                stroke: "#ffffff",
                                strokeWidth: 0.75,
                                outline: "none",
                                cursor: "pointer"
                              },
                              hover: {
                                fill: geo.properties.name === selectedState ? '#0A6C74' : '#1E293B',
                                stroke: "#ffffff",
                                strokeWidth: 1,
                                outline: "none"
                              },
                              pressed: {
                                fill: '#0A6C74',
                                stroke: "#ffffff",
                                strokeWidth: 1,
                                outline: "none"
                              }
                            }}
                            aria-label={`${geo.properties.name} - Click to view R&D credit information`}
                          />
                        ))
                      }
                    </Geographies>
                  </ComposableMap>
                </div>

                <div className="mt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {northeastStates.map((state) => (
                      <StateButton
                        key={state.code}
                        code={state.code}
                        name={state.name}
                        isSelected={selectedState === state.name}
                        onClick={() => handleStateButtonClick(state.name)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-[#124C56] text-white p-6 rounded-2xl shadow h-full">
                {selectedState ? (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      {selectedState} R&D Tax Credit Program
                    </h2>
                    
                    {getStateData(selectedState) ? (
                      hasRDProgram(getStateData(selectedState)) ? (
                        <div>
                          {Object.entries(getStateData(selectedState)!).map(([key, value]) => {
                            if (key === 'state' || key === 'readMore') return null;
                            return (
                              <div key={key} className="mb-6 last:mb-0">
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-1 text-white/90">
                                  {key}
                                </h3>
                                <p className="text-white text-base leading-relaxed">{value}</p>
                              </div>
                            );
                          })}
                          <div className="mt-8 text-center">
                            <Link 
                              to={getStateUrl(selectedState)}
                              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#124C56] rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
                            >
                              Read More About {selectedState}'s Program
                              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <AlertCircle className="w-12 h-12 text-white/90 mx-auto mb-6" />
                          <p className="text-xl text-white/90 mb-6 leading-relaxed">
                            This state currently does not offer a Research & Development (R&D) tax credit program. While federal R&D tax credits may still be available, there are no additional state-level incentives for R&D activities in this jurisdiction.
                          </p>
                          <p className="text-white/70">
                            {getStateData(selectedState).note}
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-xl text-white/90 mb-4">
                          R&D Tax Credit details for {selectedState} coming soon
                        </p>
                        <p className="text-white/70">
                          Contact us to learn more about R&D tax credits in your state
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl font-semibold">
                      Click a state on the map to view specific R&D credit information
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#124C56] text-white p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Maximize Your Federal and State R&D Tax Credits
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start with a free, no-obligation feasibility analysis from Credits Granted.
              Our audit-ready studies help you claim every dollar you deserve — at both federal and state levels.
            </p>
            <button className="bg-white text-[#124C56] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-lg">
              Get My Free Evaluation
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default StateCredits;