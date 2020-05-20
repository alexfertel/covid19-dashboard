import React, { useContext } from 'react';
import SEO from '../components/Seo';
import DailySection from '../components/home/DailySection';
import CalendarSection from '../components/home/CalendarSection';
import CaseDistributionSection from '../components/home/CaseDistributionSection';
import MapSection from '../components/home/MapSection';
import { storageContext } from '../global/Provider';

const IndexPage = () => {
  const { cases } = useContext(storageContext);
  return (
    <>
      <SEO title="Dashboard | Home" />
      <div className="w-full min-h-full p-8">
        <div className="flex w-full">
          <DailySection cases={cases} />
          <CalendarSection />
        </div>
        <div className="flex w-full">
          <CaseDistributionSection />
          <MapSection />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
