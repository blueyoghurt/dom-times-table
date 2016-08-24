document.addEventListener('DOMContentLoaded', function(){
document.getElementById('generate').addEventListener('click',submit);
});

function submit(){
  removePrevious();
  createTable();
}

function createTable(){
  var k = document.getElementById('inputNumber').value;
  var mainBody = document.getElementById("MultiplicationTable");
  var tableMain = document.createElement("table");
  tableMain.style.border ="1px solid black";
  for (i=1; i <= k; i++){
    var tableRow = document.createElement("tr");
    if (i%2 == 0){
        tableRow.style.backgroundColor = "#ddd";
    }
    tableMain.appendChild(tableRow);

    for (j=1; j <= k; j++){
      var tableData = document.createElement("td");
      tableData.textContent  = i * j;
      tableData.style.border ="1px solid black";
      tableData.style.textAlign = "center";
      if (j%2 == 0){
          tableData.style.backgroundColor = "#eee";
      }
      tableRow.appendChild(tableData);
    }
  }   mainBody.appendChild(tableMain);
}

function removePrevious() {
  var mainBody = document.getElementById("MultiplicationTable");
  var test123 = document.getElementsByTagName("table");
  if (mainBody.childNodes.length == 2){
    mainBody.removeChild(mainBody.childNodes[1]);
  }
}
