export default () => ({
  isDarkTheme: true,
  cases: {
    total_confirmed: 0,
    total_recovered: 0,
    total_death: 0,
    data: []
  },
  casesFetching: true,
  fatalityRate: {
    byAge: [],
    bySex: [],
    byComorbidity: []
  },
  showDetailsDialog: false,
  showSearchDialog: false,
  showRepoDialog: false,
  selectedLocation: {},
  filteredLocationNames: [],
  filteredLocationIndexes: [],
  defaultLocationNames: []
});
