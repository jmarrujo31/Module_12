//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//Plotly.newPlot("plotArea", [{y: [5, 10, 15, 18,50,10], x: [10, 20, 30, 40, 50,60]}]);

//var trace = {
   // x: ["burrito", "pizza", "chicken"],
    //y: [10, 18, 5],
    //type: "bar"
//};

//var layout = {
    //title: "Luncheon Survey",
    //xaxis: {title: "Food Option"},
    //yaxis: {title: "Number of Respondents"}
//};
//Plotly.newPlot("plotArea", [trace], layout);

//bar chart
//var trace = {
    //x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //type: "bar"
   //};
   //var data = [trace];
   //var layout = {
    //title: "'Bar' Chart",
    //xaxis: { title: "Drinks"},
    //yaxis: { title: "% of Drinks Ordered"}
   //};
   //Plotly.newPlot("plotArea", data, layout);

//pie chart (below code wont work pie charts do not have x and y axis)
//var trace = {
    //x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       //"ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //type: 'Pie'
  //};
  //var data = [trace];
  //var layout = {
    //title: "'Pie' Chart",
  //};
  //Plotly.newPlot("plotArea", data, layout);

// pie chart (labels & values)
  //var trace = {
    //labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    //"ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //type: 'pie'
   //};
   //var data = [trace];
   //var layout = {
    //title: "'Pie' Chart",
   //};
   //Plotly.newPlot("plotArea", data, layout);

   //line and scatter plot
   //var trace1 = {
   // x: [1, 2, 3, 4],
   // y: [10, 15, 13, 17],
   //mode: 'markers',
    //type: 'scatter'
  //};
  
  //var trace2 = {
    //x: [2, 3, 4, 5],
    //y: [16, 5, 11, 9],
    //mode: 'lines',
    //type: 'scatter'
  //};
  
  //var trace3 = {
    //x: [1, 2, 3, 4],
    //y: [12, 9, 15, 12],
    //mode: 'lines+markers',
    //type: 'scatter'
  //};
  //var data = [trace1, trace2, trace3];
  
  //Plotly.newPlot('plotArea', data);

  //data labels on the plot
  var trace1 = {

    x: [1, 2, 3, 4, 5],
  
    y: [1, 6, 3, 6, 1],
  
    mode: 'markers+text',
  
    type: 'scatter',
  
    name: 'Team A',
  
    text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
  
    textposition: 'top center',
  
    textfont: {
  
      family:  'Raleway, sans-serif'
  
    },
  
    marker: { size: 12 }
  
  };
  
  
  var trace2 = {
  
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
  
    y: [4, 1, 7, 1, 4],
  
    mode: 'markers+text',
  
    type: 'scatter',
  
    name: 'Team B',
  
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
  
    textfont : {
  
      family:'Times New Roman'
  
    },
  
    textposition: 'bottom center',
  
    marker: { size: 12 }
  
  };
  
  
  var data = [ trace1, trace2 ];
  
  
  var layout = {
  
    xaxis: {
  
      range: [ 0.75, 5.25 ]
  
    },
  
    yaxis: {
  
      range: [0, 8]
  
    },
  
    legend: {
  
      y: 0.5,
  
      yref: 'paper',
  
      font: {
  
        family: 'Arial, sans-serif',
  
        size: 20,
  
        color: 'grey',
  
      }
  
    },
  
    title:'Data Labels on the Plot'
  
  };
  
  
  Plotly.newPlot('plotArea', data, layout);

//In the anonymous function inside the map()method, the parameter name num is arbitrary. 
//It could have been named anything else, such as integer or carPrice. For example, 
//the following two examples would be equally valid:

//var doubled = numbers.map(function(integer) {
//return integer * 2;
//});
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

//skill drill 12.2.1
var numbers = [0,2,4,6,8];
var add5 = numbers.map(function(num){
    return num + 5;
});
console.log(add5);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var pop = cities.map(function(population){
    return population.population;
});
console.log(pop);

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var rank = cities.map(function(rank){
    return rank.Rank;
});
console.log(rank);

//filter method 12.2.1
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//skill drill 12.2.1 filter
//var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
//var swords = words.filter(function(num){
    //return num > 's';
//});

//console.log(swords);

var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);
// switch to ascending => a - b
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);

//var familyAge = [3,2,39,37,9];
//var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
//anotherElement);

console.log(sortedAge);