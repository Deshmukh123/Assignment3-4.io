google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Set Data
  const chartData1 = google.visualization.arrayToDataTable([

    ["Contry", "Revenue in $"],
    ["France", 55],
    ["Brazil", 49],
    ["Combodia", 44],
    ["USA", 24],
    ["Italy", 49],
    ["Eritrea", 15],
  ]);

  const chartData2 = google.visualization.arrayToDataTable([
    ["Contry", "Revenue in $"],
    ["Sales and Marketing", 75],
    ["Service plumbing", 39],
    ["Bid work Plumbing", 44],
    ["Maintaince", 39],
    ["HWT replacement", 9],
    ["Service HVAC", 15],
  ]);

  // Set Options
  const options = {
    colors: ['green', 'blue', 'red', 'green', 'black', 'gray']
    
    

  };

  // Draw
  const chart1 = new google.visualization.BarChart(
    document.getElementById("chart1")
  );
  const chart2 = new google.visualization.BarChart(
    document.getElementById("chart2")
  );

  chart1.draw(chartData1, options);
  chart2.draw(chartData2, options);
}
