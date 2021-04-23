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

var input = d3.select("#fbydate").on("submit", runEnter);
var inputci = d3.select("#fbycity").on("submit", runEnter);
var inputst = d3.select("fbystate").on("submit", runEnter);
var inputco = d3.select("fbycountry").on("submit", runEnter);
var inputsh = d3.select("fbyshape").on("submit", runEnter);

function runEnter(){ 
    d3.event.preventDefault();
    //d3.select("tbody").html("");
    var idb = ["#filteritem", "#filteritemci", "#filteritemst", "#filteritemco", "#filteritemsh"]
    
        var inputValue = d3.select(idb[0]).property("value")
        var inputValueci = d3.select(idb[1]).property("value")
        var inputValuest = d3.select(idb[2]).property("value")
        var inputValueco = d3.select(idb[3]).property("value")
        var inputValuesh = d3.select(idb[4]).property("value")

        if (inputValue.length >1){
            var filteredData = tableData.filter(ddata => ddata.datetime === inputValue);
            //console.log(filteredData)
            if (inputValueci.length >1){
                var filteredData = filteredData.filter(ddata => ddata.city === inputValueci);
                if (inputValuest.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.state === inputValuest);
                    if (inputValueco.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);          
                        if (inputValuesh.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }
                    }
                }
                else {
                    if (inputValueco.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);          
                            if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                            }
                    }
                    else {
                        if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }
                    }
                }
            }
            else {
                if (inputValuest.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.state === inputValuest);
                    if (inputValueco.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);          
                        if (inputValuesh.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }
                    }
                    else{
                        if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }                        
                    }
                }
                else {
                    if (inputValueco.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);          
                            if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                            }
                    }
                    else {
                        if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                            }    
                    }               
                }
            }
        }
        else if (inputValueci.length >1){
            var filteredData = tableData.filter(ddata => ddata.city === inputValueci);
            //console.log(filteredData)
                if (inputValuest.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.state === inputValuest);
                    if (inputValueco.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);           
                        if (inputValuesh.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }
                    }
                
                    else {
                        if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                            }
                    }
                }
                else {
                    if (inputValueco.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);           
                            if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                            }
                    }
                    else {
                        if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                            }                       
                    }                    
                }
        }
        else if (inputValuest.length >1){
            var filteredData = tableData.filter(ddata => ddata.state === inputValuest);
            //console.log(filteredData)
                    if (inputValueco.length >1){
                    var filteredData = filteredData.filter(ddata => ddata.country === inputValueco);           
                        if (inputValuesh.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }
                    }
                    else{
                        if (inputValuesh.length >1){
                            var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }   
                    }
        }
        else if (inputValueco.length >1){
            var filteredData = tableData.filter(ddata => ddata.country === inputValueco);
            //console.log(filteredData)
                        if (inputValuesh.length >1){
                        var filteredData = filteredData.filter(ddata => ddata.shape === inputValuesh);
                        }
                        else{
                            var filteredData = filteredData;
                        }
        }
        else if (inputValuesh.length >1){
            var filteredData = tableData.filter(ddata => ddata.shape === inputValuesh);
            //console.log(filteredData)
        }
        else {
            var filteredData = tableData;
        }

    d3.select("tbody").html("");
    if (filteredData.length>0){
        var tbody = d3.select("tbody");
        filteredData.forEach(function(ufo){      
        row=tbody.append("tr");
        Object.entries(ufo)
            .forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
            })
        });
    }  
    
    else if (filteredData.length===0){
        var tbody = d3.select("tbody");
        var cellnull=tbody.append("tr").append("td");
        cellnull.text("Your search returned no results.");
        }    
    
    document.getElementById("FilterSearch").reset();

};