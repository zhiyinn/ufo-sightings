// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function appendData(obj) {
    var row = tbody.append("tr");
    Object.entries(obj).forEach(([key, value]) => {
        row.append("td").text(value); 
    })
};

// append table data
data.forEach(appendData);

var button = d3.select("#filter-btn");

// function runs when filter button is clicked
button.on("click", function() {
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var datetime = dateInput.property("value");
    
    //create empty dict for new filtered inputs
    var filterInputs = {};

    if (datetime !== "") {
        filterInputs.datetime = datetime;
    }

    //function to filter for date input
    var filtered = tableData.filter(obj => {
        var criteria = true;
        Object.entries(filterInputs).forEach(([key, value]) => {
            criteria = criteria && (obj[key] === value);
        });
        return criteria;
    });

    tbody.html("");

    //return new filtered results
    filtered.forEach(appendData);
});
