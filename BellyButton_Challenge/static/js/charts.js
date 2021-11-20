function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("static/data/samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("static/data/samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("static/data/samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samplearray=data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplearrayfilter=samplearray.filter(data=>data.id==sample);
    //  5. Create a variable that holds the first sample in the array.
    var firstsample=samplearrayfilter[0];
    console.log(samplearrayfilter);
    console.log(samplearray);
    
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var objectid = firstsample.otu_ids;
    var objectlb = firstsample.otu_labels;
    var objectsv = firstsample.sample_values;
    //console.log(objectid);

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    
    var yticks = objectid.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();
    //console.log(yticks);
    
    // 8. Create the trace for the bar chart. 
    var barData = [{
      x: objectsv.slice(0,10).reverse(),
      text: objectlb.slice(0,10).reverse(),
      y: yticks,
      orientation: 'h',
      type: "bar"
      
    }];
    console.log(barData);
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found"
    };

     // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
     Plotly.newPlot("bar", barData,barLayout); 


     // 1. Create the trace for the bubble chart.
     var bubbleData = [{
      x: objectid.slice(0,10).reverse(),
      y: objectsv.slice(0,10).reverse(),
      mode: "markers",
      marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        size: [objectlb]
      
     }}];
     // 2. Create the layout for the bubble chart.
     var bubbleLayout = {
       title: "Bacteria Cultures Per Sample"
       
     };
 
     // 3. Use Plotly to plot the data with the layout.
     Plotly.newPlot("bubble",bubbleData, bubbleLayout); 

      // 4. Create the trace for the gauge chart.
    var gaugeData = [
     
      {

        domain: { 
          x: [0, 1], 
          y: [0, 1] },
    
        value: 270,
    
        title: { text: "Scrubs per Week" },
    
        type: "indicator",
    
        mode: "gauge+number"
    
      }
    
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      title: "Belly Button Washer Frequency"
     
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge",gaugeData, gaugeLayout);
   });
 }
