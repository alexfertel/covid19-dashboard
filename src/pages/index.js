import React from 'react';
import DailySection from '../components/home/DailySection';
import CalendarSection from '../components/home/CalendarSection';
import CaseDistributionSection from '../components/home/CaseDistributionSection';
import MapSection from '../components/home/MapSection';
import MostAffectedSection from '../components/home/MostAffectedSection';
import CasesContext, { getData } from '../global/Provider';
import DailyCasesEvolutionSection from '../components/home/DailyCasesEvolutionSection';
import TestsRelationSection from '../components/home/TestsRelationSection';
import AgeRangeDistributionSection from '../components/home/AgeRangeDistributionSection';

const IndexPage = ({ cases }) => {
  return (
    <CasesContext.Provider value={{ cases }}>
      <div className="flex flex-col justify-between w-full min-h-full p-8">
        <div className="flex justify-between w-full">
          <DailySection />
          <CalendarSection />
        </div>
        <div className="flex justify-between w-full">
          <CaseDistributionSection />
          <MapSection />
          <MostAffectedSection />
        </div>
        <div className="flex justify-between w-full">
          <DailyCasesEvolutionSection />
          <TestsRelationSection />
          <AgeRangeDistributionSection />
        </div>
      </div>
    </CasesContext.Provider>
  );
};

export const getServerSideProps = async () => ({
  props: await getData(),
});

export default IndexPage;
