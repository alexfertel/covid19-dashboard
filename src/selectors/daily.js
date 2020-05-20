export const getAllAccumulatedCases = cases =>
  cases.reduce(
    (accumulator, current) => {
      const { diagnosed, evacuated, deceased, recovered } = current.day;
      const newDiagnosed = accumulator.diagnosed + diagnosed.length;
      const newEvacuated = accumulator.evacuated + evacuated;
      const newDeceased = accumulator.deceased + deceased;
      const newRecovered = accumulator.recovered + recovered;
      const newActive = newDiagnosed - newEvacuated - newDeceased - newRecovered;
      return {
        diagnosed: newDiagnosed,
        active: newActive,
        deceased: newDeceased,
        recovered: newRecovered,
        evacuated: newEvacuated,
      };
    },
    {
      diagnosed: 0,
      active: 0,
      deceased: 0,
      recovered: 0,
      evacuated: 0,
    }
  );

export const getLatestCases = cases => {
  const latestDay = cases[cases.length - 1].day;
  const { diagnosed, evacuated, deceased, recovered } = latestDay;
  return {
    latestDiagnosed: diagnosed.length,
    latestActive: diagnosed.length - evacuated - deceased - recovered,
    latestDeceased: deceased,
    latestRecovered: recovered,
    latestEvacuated: evacuated,
  };
};
