import React, { useState, useEffect } from 'react';
import Loader from './Loader';

export const storageContext = React.createContext();

const Provider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({ cases: [] });

  useEffect(() => {
    fetch(`https://covid19cubadata.github.io/data/covid19-cuba.json?_=1589141816122`)
      .then(response => response.json())
      .then(resultData => {
        setFetchedData(resultData);
      });
  }, []);

  useEffect(() => {
    const createDay = (day, diagnosed, date, riskSubjects) => ({
      day,
      diagnosed,
      date,
      riskSubjects,
    });

    const createCase = (id, day) => ({ id, day: createDay(id, day.diagnosticados, day.fecha, day.sujetos_riesgo) });

    const getCases = (apiData = {}) => Object.keys(apiData.dias).map(key => createCase(key, apiData.dias[key]));

    if (fetchedData) {
      setData({ cases: getCases(fetchedData.casos) });
    }
  }, [fetchedData]);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return isLoading ? <Loader /> : <storageContext.Provider value={data}>{children}</storageContext.Provider>;
};

export default ({ element }) => <Provider>{element}</Provider>;
