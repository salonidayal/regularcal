function number(num) {
    var result = document.getElementById("screen");
    result.value += num;
}

function result() {
    
    var result = document.getElementById("screen");
    result.value = eval(result.value)
   
}
function clearResult() {
    var result = document.getElementById("screen");
    result.value = "";
}
