export default () => ({
  isDarkTheme: true,
  cases: {
    total_confirmed: 0,
    total_recovered: 0,
    total_death: 0,
    data: []
  },
  fatalityRate: {
    byAge: [],
    bySex: [],
    byComorbidity: []
  },
  showDetailsDialog: false,
  showSearchDialog: false,
  showRepoDialog: false,
  selectedLocation: {},
  filteredLocationNames: []
});
