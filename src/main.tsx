import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import BlogPage from './Blog.tsx';
import Misconceptions from './blog/posts/Misconceptions.tsx';
import FourPartTest from './blog/posts/FourPartTest.tsx';
import QualifiedResearchExpenses from './blog/posts/QualifiedResearchExpenses.tsx';
import StateTaxLaws from './blog/posts/StateTaxLaws.tsx';
import Section174 from './blog/posts/Section174.tsx';
import Manufacturing from './blog/posts/Manufacturing.tsx';
import Software from './blog/posts/Software.tsx';
import Biotech from './blog/posts/Biotech.tsx';
import Agriculture from './blog/posts/Agriculture.tsx';
import Chemical from './blog/posts/Chemical.tsx';
import Construction from './blog/posts/Construction.tsx';
import Energy from './blog/posts/Energy.tsx';
import Medical from './blog/posts/Medical.tsx';
import Aerospace from './blog/posts/Aerospace.tsx';
import CaseStudySoftware from './blog/posts/CaseStudySoftware.tsx';
import CaseStudyConstruction from './blog/posts/CaseStudyConstruction.tsx';
import CaseStudyManufacturing from './blog/posts/CaseStudyManufacturing.tsx';
import CaseStudyCPA from './blog/posts/CaseStudyCPA.tsx';
import Partnerships from './Partnerships.tsx';
import Privacy from './Privacy.tsx';
import Calculator from './Calculator.tsx';
import StateCredits from './StateCredits.tsx';

// Import state landing pages
import Arizona from './pages/states/Arizona.tsx';
import Arkansas from './pages/states/Arkansas.tsx';
import California from './pages/states/California.tsx';
import Colorado from './pages/states/Colorado.tsx';
import Connecticut from './pages/states/Connecticut.tsx';
import Delaware from './pages/states/Delaware.tsx';
import Florida from './pages/states/Florida.tsx';
import Georgia from './pages/states/Georgia.tsx';
import Hawaii from './pages/states/Hawaii.tsx';
import Idaho from './pages/states/Idaho.tsx';
import Illinois from './pages/states/Illinois.tsx';
import Indiana from './pages/states/Indiana.tsx';
import Iowa from './pages/states/Iowa.tsx';
import Kansas from './pages/states/Kansas.tsx';
import Kentucky from './pages/states/Kentucky.tsx';
import Louisiana from './pages/states/Louisiana.tsx';
import Maine from './pages/states/Maine.tsx';
import Maryland from './pages/states/Maryland.tsx';
import Massachusetts from './pages/states/Massachusetts.tsx';
import Michigan from './pages/states/Michigan.tsx';
import Minnesota from './pages/states/Minnesota.tsx';
import Missouri from './pages/states/Missouri.tsx';
import Nebraska from './pages/states/Nebraska.tsx';
import NewHampshire from './pages/states/NewHampshire.tsx';
import NewJersey from './pages/states/NewJersey.tsx';
import NewMexico from './pages/states/NewMexico.tsx';
import NewYork from './pages/states/NewYork.tsx';
import NorthDakota from './pages/states/NorthDakota.tsx';
import Ohio from './pages/states/Ohio.tsx';
import Pennsylvania from './pages/states/Pennsylvania.tsx';
import RhodeIsland from './pages/states/RhodeIsland.tsx';
import SouthCarolina from './pages/states/SouthCarolina.tsx';
import Texas from './pages/states/Texas.tsx';
import Utah from './pages/states/Utah.tsx';
import Vermont from './pages/states/Vermont.tsx';
import Virginia from './pages/states/Virginia.tsx';
import Wisconsin from './pages/states/Wisconsin.tsx';

// Import landing pages
import AerospaceLanding from './pages/industries/AerospaceLanding.tsx';
import ManufacturingLanding from './pages/industries/ManufacturingLanding.tsx';
import SoftwareLanding from './pages/industries/SoftwareLanding.tsx';
import BiotechLanding from './pages/industries/BiotechLanding.tsx';
import AgricultureLanding from './pages/industries/AgricultureLanding.tsx';
import ChemicalLanding from './pages/industries/ChemicalLanding.tsx';
import ConstructionLanding from './pages/industries/ConstructionLanding.tsx';
import EnergyLanding from './pages/industries/EnergyLanding.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/insights",
    element: <BlogPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/state-credits",
    element: <StateCredits />,
  },
  // State Landing Pages
  {
    path: "/state-rd-tax-credit/arizona",
    element: <Arizona />,
  },
  {
    path: "/state-rd-tax-credit/arkansas",
    element: <Arkansas />,
  },
  {
    path: "/state-rd-tax-credit/california",
    element: <California />,
  },
  {
    path: "/state-rd-tax-credit/colorado",
    element: <Colorado />,
  },
  {
    path: "/state-rd-tax-credit/connecticut",
    element: <Connecticut />,
  },
  {
    path: "/state-rd-tax-credit/delaware",
    element: <Delaware />,
  },
  {
    path: "/state-rd-tax-credit/florida",
    element: <Florida />,
  },
  {
    path: "/state-rd-tax-credit/georgia",
    element: <Georgia />,
  },
  {
    path: "/state-rd-tax-credit/hawaii",
    element: <Hawaii />,
  },
  {
    path: "/state-rd-tax-credit/idaho",
    element: <Idaho />,
  },
  {
    path: "/state-rd-tax-credit/illinois",
    element: <Illinois />,
  },
  {
    path: "/state-rd-tax-credit/indiana",
    element: <Indiana />,
  },
  {
    path: "/state-rd-tax-credit/iowa",
    element: <Iowa />,
  },
  {
    path: "/state-rd-tax-credit/kansas",
    element: <Kansas />,
  },
  {
    path: "/state-rd-tax-credit/kentucky",
    element: <Kentucky />,
  },
  {
    path: "/state-rd-tax-credit/louisiana",
    element: <Louisiana />,
  },
  {
    path: "/state-rd-tax-credit/maine",
    element: <Maine />,
  },
  {
    path: "/state-rd-tax-credit/maryland",
    element: <Maryland />,
  },
  {
    path: "/state-rd-tax-credit/massachusetts",
    element: <Massachusetts />,
  },
  {
    path: "/state-rd-tax-credit/michigan",
    element: <Michigan />,
  },
  {
    path: "/state-rd-tax-credit/minnesota",
    element: <Minnesota />,
  },
  {
    path: "/state-rd-tax-credit/missouri",
    element: <Missouri />,
  },
  {
    path: "/state-rd-tax-credit/nebraska",
    element: <Nebraska />,
  },
  {
    path: "/state-rd-tax-credit/new-hampshire",
    element: <NewHampshire />,
  },
  {
    path: "/state-rd-tax-credit/new-jersey",
    element: <NewJersey />,
  },
  {
    path: "/state-rd-tax-credit/new-mexico",
    element: <NewMexico />,
  },
  {
    path: "/state-rd-tax-credit/new-york",
    element: <NewYork />,
  },
  {
    path: "/state-rd-tax-credit/north-dakota",
    element: <NorthDakota />,
  },
  {
    path: "/state-rd-tax-credit/ohio",
    element: <Ohio />,
  },
  {
    path: "/state-rd-tax-credit/pennsylvania", 
    element: <Pennsylvania />,
  },
  {
    path: "/state-rd-tax-credit/rhode-island",
    element: <RhodeIsland />,
  },
  {
    path: "/state-rd-tax-credit/south-carolina",
    element: <SouthCarolina />,
  },
  {
    path: "/state-rd-tax-credit/texas",
    element: <Texas />,
  },
  {
    path: "/state-rd-tax-credit/utah",
    element: <Utah />,
  },
  {
    path: "/state-rd-tax-credit/vermont",
    element: <Vermont />,
  },
  {
    path: "/state-rd-tax-credit/virginia",
    element: <Virginia />,
  },
  {
    path: "/state-rd-tax-credit/wisconsin",
    element: <Wisconsin />,
  },
  // Landing Pages
  {
    path: "/rd-tax-credit/aerospace",
    element: <AerospaceLanding />,
  },
  {
    path: "/rd-tax-credit/manufacturing",
    element: <ManufacturingLanding />,
  },
  {
    path: "/rd-tax-credit/software",
    element: <SoftwareLanding />,
  },
  {
    path: "/rd-tax-credit/biotechnology",
    element: <BiotechLanding />,
  },
  {
    path: "/rd-tax-credit/agriculture",
    element: <AgricultureLanding />,
  },
  {
    path: "/rd-tax-credit/chemicals",
    element: <ChemicalLanding />,
  },
  {
    path: "/rd-tax-credit/construction",
    element: <ConstructionLanding />,
  },
  {
    path: "/rd-tax-credit/energy",
    element: <EnergyLanding />,
  },
  // Blog Posts
  {
    path: "/blog/common-misconceptions-about-rd-tax-credits",
    element: <Misconceptions />,
  },
  {
    path: "/blog/rd-tax-credit-4-part-test",
    element: <FourPartTest />,
  },
  {
    path: "/blog/qualified-research-expenses-basics",
    element: <QualifiedResearchExpenses />,
  },
  {
    path: "/blog/state-tax-laws-california-rd-credits",
    element: <StateTaxLaws />,
  },
  {
    path: "/blog/section-174-amortization-challenges",
    element: <Section174 />,
  },
  {
    path: "/blog/manufacturing-rd-credits",
    element: <Manufacturing />,
  },
  {
    path: "/blog/software-rd-credits",
    element: <Software />,
  },
  {
    path: "/blog/biotech-rd-credits",
    element: <Biotech />,
  },
  {
    path: "/blog/agriculture-rd-credits",
    element: <Agriculture />,
  },
  {
    path: "/blog/chemical-rd-credits",
    element: <Chemical />,
  },
  {
    path: "/blog/construction-rd-credits",
    element: <Construction />,
  },
  {
    path: "/blog/energy-rd-credits",
    element: <Energy />,
  },
  {
    path: "/blog/medical-rd-credits",
    element: <Medical />,
  },
  {
    path: "/blog/aerospace-rd-credits",
    element: <Aerospace />,
  },
  {
    path: "/blog/case-study-software-development",
    element: <CaseStudySoftware />,
  },
  {
    path: "/blog/case-study-construction",
    element: <CaseStudyConstruction />,
  },
  {
    path: "/blog/case-study-manufacturing",
    element: <CaseStudyManufacturing />,
  },
  {
    path: "/blog/case-study-small-cpa-firm",
    element: <CaseStudyCPA />,
  },
  {
    path: "/partnerships",
    element: <Partnerships />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);