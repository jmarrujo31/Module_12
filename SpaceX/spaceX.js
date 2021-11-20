//const url = "https://api.spacexdata.com/v2/launchpads";

//d3.json(url).then(receivedData => console.log(receivedData));


const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json(url).then(data => console.log(data));

//d3.json(url).then(spaceXResults =>
  //console.log(spaceXResults[0].full_name));

  d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));

//skill drill Use map() to print only the latitude and longitude 
//coordinates of each SpaceX launch station.  NEED HELP
