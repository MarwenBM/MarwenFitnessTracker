const ctx = document.getElementById("progressChart").getContext("2d");

// Example analytics data
const analyticsData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Weight Lifted (kg)",
      data: [200, 220, 240, 260],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

new Chart(ctx, {
  type: "line",
  data: analyticsData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
});
