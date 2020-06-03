"use strict";
var car;
var formWheel = document.getElementById("formWheel");
formWheel.style.visibility = 'hidden';
function createCar() {
    var acumErrores = 0;
    var plateInput = document.getElementById("plate").value;
    var brandInput = document.getElementById("brand").value;
    var colorInput = document.getElementById("clor").value;
    var plateValidation = /^[0-9]{4}[a-zA-Z]{3}$/;
    if (plateInput == "") {
        alert("Plate seems to be empty!");
        acumErrores++;
    }
    if (!plateValidation.test(plateInput)) {
        alert("Plate seems to be wrongly typed!");
        acumErrores++;
    }
    if (brandInput == "") {
        alert("Brand seems to be empty!");
        acumErrores++;
    }
    if (colorInput == "") {
        alert("Color seems to be empty!");
        acumErrores++;
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        var car_1 = new Car(plateInput, colorInput, brandInput);
        formWheel.style.visibility = 'visible';
        var showCar = document.getElementById("showCar");
        showCar.innerHTML = "CAR: <br><br>";
        var showPlate = document.getElementById("showPlate");
        showPlate.innerHTML = "PLATE: " + plateInput;
        var showBrand = document.getElementById("showBrand");
        showBrand.innerHTML = " BRAND: " + brandInput;
        var showColor = document.getElementById("showColor");
        showColor.innerHTML = " COLOR: " + colorInput;
    }
}
function createWheels(plate, brand, color) {
    var car = new Car(plate, color, brand);
    var rueda1 = document.getElementById("rueda1").value;
    var rueda1Diam = parseFloat(document.getElementById("diametro1").value);
    var rueda2 = document.getElementById("rueda2").value;
    var rueda2Diam = parseFloat(document.getElementById("diametro2").value);
    var rueda3 = document.getElementById("rueda3").value;
    var rueda3Diam = parseFloat(document.getElementById("diametro3").value);
    var rueda4 = document.getElementById("rueda4").value;
    var rueda4Diam = parseFloat(document.getElementById("diametro4").value);
    if (rueda1Diam <= 0.4 || rueda1Diam >= 2) {
        alert('Check diameter wheel 1.');
    }
    else if (rueda2Diam <= 0.4 || rueda2Diam >= 2) {
        alert('Check diameter wheel 2.');
    }
    else if (rueda3Diam <= 0.4 || rueda3Diam >= 2) {
        alert('Check diameter wheel 3.');
    }
    else if (rueda4Diam <= 0.4 || rueda4Diam >= 2) {
        alert('Check diameter wheel 4.');
    }
    else {
        var showWheels = document.getElementById("showWheel");
        showWheels.innerHTML = " WHEELS: " + '<br>';
        car.addWheel(new Wheel(rueda1Diam, rueda1));
        var showW1 = document.getElementById("showW1");
        showW1.innerHTML = "Wheel 1 <br>Brand: " + car.wheels[0].brand + " <br>Diameter: " + car.wheels[0].diameter;
        car.addWheel(new Wheel(rueda2Diam, rueda2));
        var showW2 = document.getElementById("showW2");
        showW2.innerHTML = "Wheel 2 <br>Brand: " + car.wheels[1].brand + " <br>Diameter: " + car.wheels[1].diameter;
        car.addWheel(new Wheel(rueda3Diam, rueda3));
        var showW3 = document.getElementById("showW3");
        showW3.innerHTML = "Wheel 3 <br>Brand: " + car.wheels[2].brand + " <br>Diameter: " + car.wheels[2].diameter;
        car.addWheel(new Wheel(rueda4Diam, rueda4));
        var showW4 = document.getElementById("showW4");
        showW4.innerHTML = "Wheel 4 <br>Brand: " + car.wheels[3].brand + " <br>Diameter: " + car.wheels[3].diameter;
    }
}
/*
if (acumErrores > 0){
        return false;
    }else{
        return true;
    }
*/
/*

function createWheels(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);

    let rueda1 = (document.getElementById("rueda1") as HTMLInputElement).value;
    let rueda1Diam = parseFloat((document.getElementById("diametro1") as HTMLInputElement).value);
    let rueda2 = (document.getElementById("rueda2") as HTMLInputElement).value;
    let rueda2Diam = parseFloat((document.getElementById("diametro2") as HTMLInputElement).value);
    let rueda3 = (document.getElementById("rueda3") as HTMLInputElement).value;
    let rueda3Diam = parseFloat((document.getElementById("diametro3") as HTMLInputElement).value);
    let rueda4 = (document.getElementById("rueda4") as HTMLInputElement).value;
    let rueda4Diam = parseFloat((document.getElementById("diametro4") as HTMLInputElement).value);

    if(rueda1Diam <= 0.4 || rueda1Diam >= 2){
        alert('Check Front-Left wheel diameter.');
    }else if(rueda2Diam <= 0.4 || rueda2Diam >= 2){
        alert('Check Front-Right wheel diameter.');
    }else if(rueda3Diam <= 0.4 || rueda3Diam >= 2){
        alert('Check Back-Left wheel diameter.');
    }else if(rueda4Diam <= 0.4 || rueda4Diam >= 2){
        alert('Check Back-Right wheel diameter.');
    }else{
        let showWheels = document.getElementById("showWheel") as HTMLParagraphElement;
        showWheels.innerHTML= " WHEELS: " + '<br>';

        car.addWheel(new Wheel(rueda1Diam,rueda1));
            
        let showW1 = document.getElementById("showW1") as HTMLParagraphElement;
        showW1.innerHTML= `Wheel 1 <br>Brand: ${car.wheels[0].brand} <br>Diameter: ${car.wheels[0].diameter}`;

        car.addWheel(new Wheel(rueda2Diam,rueda2));

        let showW2 = document.getElementById("showW2") as HTMLParagraphElement;
        showW2.innerHTML= `Wheel 2 <br>Brand: ${car.wheels[1].brand} <br>Diameter: ${car.wheels[1].diameter}`;

        car.addWheel(new Wheel(rueda3Diam,rueda3));

        let showW3 = document.getElementById("showW3") as HTMLParagraphElement;
        showW3.innerHTML= `Wheel 3 <br>Brand: ${car.wheels[2].brand} <br>Diameter: ${car.wheels[2].diameter}`;

        car.addWheel(new Wheel(rueda4Diam,rueda4));

        let showW4 = document.getElementById("showW4") as HTMLParagraphElement;
        showW4.innerHTML= `Wheel 4 <br>Brand: ${car.wheels[3].brand} <br>Diameter: ${car.wheels[3].diameter}`;
    }
}
*/ 
