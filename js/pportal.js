var x = document.getElementById("dropdown1").value;
var y = document.getElementById().value;
var z = document.getElementById().value;

function GetSelectedValue(){
    var e = document.getElementById("dropdown1");
    var result = e.options[e.selectedIndex].value;
    
    document.getElementById("box1").innerHTML = box1;
}

function GetSelectedText(){
    var e = document.getElementById("dropdown1");
    var result = e.options[e.selectedIndex].text;
    
    document.getElementById("box1").innerHTML = box1;
}
