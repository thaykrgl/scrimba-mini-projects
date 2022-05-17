const calculate = document.getElementById("calculate");
const valueDOM = document.getElementById("value"); 
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

function conversion(){
    let value = valueDOM.value;
      
    // Length Conversions
    let feet = value * 3.2808;
    feet = feet.toFixed(3);
    let meter = value * 0.3048;
    meter = meter.toFixed(3);
    
    // Volume Conversions
    let gallon = value * 0.2641;
    gallon = gallon.toFixed(3);
    let liter = value * 3.7854;
    liter= liter.toFixed(3);
        
    // Mass Conversions
    let pound = value * 2.204;
    pound = pound.toFixed(3);
    let kilo = value * 0.4535;
    kilo.toFixed(3);
    
    // Length Result
    length.textContent = value +  " meters = " + feet + " feet " +  " | " + value + " feet = " + meter + " meters";
    
    // Volume Result
    volume.textContent = value +  " liters = " + gallon + " gallons " +  " | " + value + " gallons = " + liter + " liters";
    
    // Mass Result
    mass.textContent = value +  " kilos = " + pound + " pounds " +  " | " + value + " pounds = " + kilo + " kilos";
}