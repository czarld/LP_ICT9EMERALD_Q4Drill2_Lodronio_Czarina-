
function toggleInstructions() {
    let instr = document.getElementById("instructions");

    if (instr.style.display === "none") {
        instr.style.display = "block";
    } else {
        instr.style.display = "none";
    }
}


function calculateHeatIndex() {


    let temperature = parseFloat(document.getElementById("temp").value);
    let humidity = parseFloat(document.getElementById("humidity").value);


    let heatIndex = temperature + (0.33 * humidity) - 4;

    document.getElementById("result").innerHTML = 
        "Heat Index: " + heatIndex.toFixed(2) + " °C";

    let status = "";

    if (heatIndex <= 27) {
        status = "Comfortable / Cool";
    } 
    else if (heatIndex >= 28 && heatIndex <= 32) {
        status = "Warm";
    } 
    else if (heatIndex >= 33 && heatIndex <= 37) {
        status = "Hot";
    } 
    else if (heatIndex >= 38 && heatIndex <= 41) {
        status = "Very Hot / Caution";
    } 
    else if (heatIndex >= 42) {
        status = "Extreme Heat / Danger";
    } 
    else {
        status = "Out of range";
    }

    document.getElementById("status").innerHTML = status;

    alert("Heat Index is " + heatIndex.toFixed(2) + " °C (" + status + ")");
}
