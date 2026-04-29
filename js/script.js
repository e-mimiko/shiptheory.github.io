// async function get_data(url)
// {
//     try 
//     {
//         const resp = await fetch(url);
//         if (!resp.ok)
//         {
//             throw new Error(`Response: ${resp.status}`)
//         }
//         const data = await resp.text();
//         // console.log(data);
//         return data;
//     }
//     catch (error)
//     {
//         console.log(error.message);
//     }
    
// }

// data = get_data("https://cdn.jsdelivr.net/gh/e-mimiko/shiptheory.github.io/dataset/bl-pairings.csv");
// console.log(data);

function makeChart(players) {
  // players is an array of objects where each object is something like:
  // {
  //   "Name": "Steffi Graf",
  //   "Weeks": "377",
  //   "Gender": "Female"
  // }

  var playerLabels = players.map(function(d) {
    return d.seme_name;
  });
  var weeksData = players.map(function(d) {
    return +d.seme_age;
  });

  var chart = new Chart('chart', {
    type: "horizontalBar",
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    },
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData
        }
      ]
    }
  });
}

// Request data using D3
d3
  .csv("https://cdn.jsdelivr.net/gh/e-mimiko/shiptheory.github.io/dataset/bl-pairings.csv")
  .then(makeChart);
