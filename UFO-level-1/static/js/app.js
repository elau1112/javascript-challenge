// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(function(ufo){
    //console.log(ufo);
    var row=tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("td");
        cell.text(value); 
    });  
});


var button = d3.select("#filter-btn");
var input = d3.select("#filters");

button.on("click", runEnter);
input.on("submit", runEnter);


function runEnter(){ 
    d3.event.preventDefault();
    d3.select("tbody").html("");
    // var tb = document.getElementById("ufo-table");
    // while(tb.rows.length >1) {
    //     tb.deleteRow(1);
    // }
    var inputElement = d3.select("#datetime")
    //console.log(inputElement)
    var inputValue = inputElement.property("value")
    //console.log(inputValue)
    var filteredData = tableData.filter(ddata => ddata.datetime === inputValue);
    //console.log(filteredData)

    var tbody = d3.select("tbody");
    filteredData.forEach(function(ufo){      
    //console.log(ufo);
    var row=tbody.append("tr");
    //console.log(row)
    Object.entries(ufo)
        .forEach(function([key, value]) {
        //console.log(key, value); 
        var cell = row.append("td");
        //console.log(cell);
        cell.text(value);
        //console.log(cell);
        })

        
    });
};

