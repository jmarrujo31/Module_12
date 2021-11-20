console.log(cityGrowths);

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

var sortedCitiespop = cityGrowths.sort((a,b) =>a.population - b.population).reverse();
console.log(sortedCitiespop);

var pop = sortedCitiespop.slice(0,7);
console.log(topFiveCities);

var topFiveCityNames = pop.map(city => city.City);
var topFiveCitypop = pop.map(city => parseInt(city.population));
console.log(topFiveCityNames);
console.log(topFiveCitypop);

var trace = {
    x: topFiveCityNames,
    y: topFiveCitypop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Populated Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  d3.json("samples.json").then(function(data){
    console.log("hello");
});

