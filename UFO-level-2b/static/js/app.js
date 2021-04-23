// from data.js
var tableData = data;

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

var button = d3.select("#filter-btn").on("click", runEnter);
var buttonci = d3.select("#filter-btnci").on("click", runEnter);
var buttonst = d3.select("#filter-btnst").on("click", runEnter);
var buttonco = d3.select("#filter-btnco").on("click", runEnter);
var buttonsh = d3.select("#filter-btnsh").on("click", runEnter);

var input = d3.select("#fbydate").on("submit", runEnter);
var inputci = d3.select("#fbycity").on("submit", runEnter);
var inputst = d3.select("fbystate").on("submit", runEnter);
var inputco = d3.select("fbycountry").on("submit", runEnter);
var inputsh = d3.select("fbyshape").on("submit", runEnter);

function runEnter(){ 
    d3.event.preventDefault();

    var idb = ["#filteritem", "#filteritemci", "#filteritemst", "#filteritemco", "#filteritemsh"]
    for (var i=0; i<5; i++){
        var inputElement = d3.select(idb[i])
        var inputValue = inputElement.property("value")
        if (inputValue.length >1 && i===0) {
            var filteredData = tableData.filter(ddata => ddata.datetime === inputValue);
            //console.log(inputValue)
            break;
        }
        else if (inputValue.length >1 && i===1){
            var filteredData = tableData.filter(ddata => ddata.city === inputValue);
            //console.log(inputValue)
            break;
        }
        else if (inputValue.length >1 && i===2){
            var filteredData = tableData.filter(ddata => ddata.state === inputValue);
            //console.log(inputValue)
            break;
        }
        else if (inputValue.length >1 && i===3){
            var filteredData = tableData.filter(ddata => ddata.country === inputValue);
            //console.log(inputValue)
            break;
        }
        else if (inputValue.length >1 && i===4){
            var filteredData = tableData.filter(ddata => ddata.shape === inputValue);
            //console.log(inputValue)
            break;
        }
        else {
            var filteredData = tableData;
        }
    }; 

    //console.log(filteredData)
    d3.select("tbody").html("");
    //if (filteredData.length>0){
        var tbody = d3.select("tbody");
        filteredData.forEach(function(ufo){      
        row=tbody.append("tr");
        Object.entries(ufo)
            .forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
            })       
        });
    //}

    if (filteredData.length===0){
        var tbody = d3.select("tbody");
        var cellnull=tbody.append("tr").append("td");
        cellnull.text("Your search returned no results.");
    } 

    document.getElementById("FilterSearch").reset();
    document.getElementById("FilterSearchci").reset();
    document.getElementById("FilterSearchst").reset();
    document.getElementById("FilterSearchco").reset();
    document.getElementById("FilterSearchsh").reset();   
};