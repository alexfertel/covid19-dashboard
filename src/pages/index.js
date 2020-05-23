import React from 'react';
import DailySection from '../components/home/DailySection';
import CalendarSection from '../components/home/CalendarSection';
import CaseDistributionSection from '../components/home/CaseDistributionSection';
import MapSection from '../components/home/MapSection';
import MostAffectedSection from '../components/home/MostAffectedSection';
import CasesContext, { getData } from '../global/Provider';
import DailyCasesEvolutionSection from '../components/home/DailyCasesEvolutionSection';

const IndexPage = ({ cases }) => {
  return (
    <CasesContext.Provider value={{ cases }}>
      <div className="w-full min-h-full p-8">
        <div className="flex w-full">
          <DailySection />
          <CalendarSection />
        </div>
        <div className="flex w-full mt-4">
          <CaseDistributionSection />
          <MapSection />
          <MostAffectedSection />
        </div>
        <div className="flex w-full mt-4">
          <DailyCasesEvolutionSection />
        </div>
      </div>
    </CasesContext.Provider>
  );
};

export const getServerSideProps = async () => ({
  props: await getData(),
});

export default IndexPage;
