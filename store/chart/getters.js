export default {
  dailyReport(state, getters, rootState, rootGetters) {
    const { locationCasesData } = rootGetters;
    const datesCombined = locationCasesData.map(i => i.dates).flat(1);
    const uniqueDates = [...new Set(datesCombined.map(i => i.date))];
    const categories = uniqueDates.slice(Math.max(uniqueDates.length - 10, 1));

    const chartOptions = {
      chart: {
        id: "daily-report",
        type: "area",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories
      },
      tooltip: {
        theme: rootState.isDarkTheme ? "dark" : "light"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      markers: {
        size: 5,
        strokeColor: "#fff",
        strokeWidth: 2
      },
      colors: ["#00897B", "#f00"],
      title: {
        text: "Total Confirmed Cases and Deaths Daily",
        align: "left"
      }
    };

    const series = [
      {
        name: "Total Cases",
        data: Array(categories.length).fill(0)
      },
      {
        name: "Total Deaths",
        data: Array(categories.length).fill(0)
      }
    ];

    datesCombined.forEach(item => {
      const categoryIdx = categories.indexOf(item.date);
      series[0].data[categoryIdx] += item.confirmed;
      series[1].data[categoryIdx] += item.death;
    });

    return {
      chartOptions,
      series
    };
  },
  recovered(state, getters, rootState, rootGetters) {
    const { locationCasesData } = rootGetters;
    const datesCombined = locationCasesData.map(i => i.dates).flat(1);
    const uniqueDates = [...new Set(datesCombined.map(i => i.date))];
    const categories = uniqueDates.slice(Math.max(uniqueDates.length - 10, 1));

    const chartOptions = {
      chart: {
        id: "daily-report",
        type: "radar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories
      },
      tooltip: {
        theme: rootState.isDarkTheme ? "dark" : "light"
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#00897B"],
      title: {
        text: "Total Recovered Cases Daily",
        align: "left"
      }
    };

    const series = [
      {
        name: "Recovered",
        data: Array(categories.length).fill(0)
      }
    ];

    datesCombined.forEach(item => {
      const categoryIdx = categories.indexOf(item.date);
      series[0].data[categoryIdx] += item.recovered;
    });

    return {
      chartOptions,
      series
    };
  }
};
