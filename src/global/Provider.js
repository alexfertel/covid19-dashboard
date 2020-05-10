import React, { useState, useEffect } from 'react';

export const myContext = React.createContext();

const Provider = ({ children }) => {
  const [sharedState, setSharedState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://covid19cubadata.github.io/data/covid19-cuba.json`)
      .then(response => response.json())
      .then(resultData => {
        setSharedState(resultData);
      });
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [sharedState]);

  return isLoading ? <div>Loading</div> : <myContext.Provider value={{ sharedState }}>{children}</myContext.Provider>;
};

export default ({ element }) => <Provider>{element}</Provider>;
