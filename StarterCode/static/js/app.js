// //from data.js
 var tableData = data;

 
var tbody = d3.select("tbody");

//tabulate data on webpage
function appendData(obj) {
    var row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
        row.append("td").text(value); 
    })
};

// append all tr's and td's
data.forEach(appendData);

//select the web user's input and the filter button
var dateInput = d3.select("#datetime")
var button = d3.select("filter-btn")

function clickSelect(){
    //print input value
    console.log(dateInput.property("value"));
    //show only filtered data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInput.property("value"))
    //display the new table
    appendData(new_table);
}

// event listener to handle change and click
dateInput.on("change", clickSelect)