export default {
  isLocationCasesFiltered: state => !!state.filteredLocationNames.length,
  filteredLocationNames: state => state.filteredLocationNames,
  locationCases: state => {
    const { filteredLocationNames, cases } = state;

    if (!filteredLocationNames.length) return cases;

    const filteredCasesData = cases.data
      .filter(caseData =>
        filteredLocationNames.includes(caseData["Country/Region"])
      )
      .reduce(
        (prev, data) => {
          const current_confirmed = +data.dates[data.dates.length - 1]
            .confirmed;
          const current_recovered = +data.dates[data.dates.length - 1]
            .recovered;
          const current_death = +data.dates[data.dates.length - 1].death;

          const _data = {
            ...data,
            confirmed: current_confirmed,
            recovered: current_recovered,
            death: current_death
          };

          return {
            total_confirmed: prev.total_confirmed + current_confirmed,
            total_recovered: prev.total_recovered + current_recovered,
            total_death: prev.total_death + current_death,
            data: [...prev.data, _data]
          };
        },
        {
          total_confirmed: 0,
          total_recovered: 0,
          total_death: 0,
          data: []
        }
      );

    return filteredCasesData;
  },
  locationCasesData: (_, getters) => getters.locationCases.data
};
