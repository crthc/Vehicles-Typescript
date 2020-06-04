"use strict";
var car;
var formWheel = document.getElementById("formWheel");
formWheel.style.visibility = 'hidden';
var formCar = document.getElementById("formCar");
formCar.style.visibility = 'visible';
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
        car = new Car(plateInput, colorInput, brandInput);
        formCar.style.visibility = 'hidden';
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
function createWheels() {
    var acumErrores = 0;
    for (var i = 1; i <= 4; i++) {
        var ruedaBrand = document.getElementById('rueda' + i).value;
        var ruedaDiam = parseFloat(document.getElementById('diametro' + i).value);
        if (ruedaBrand == '') {
            alert("Brand Wheel " + i + " is empty");
            acumErrores++;
        }
        if (isNaN(ruedaDiam)) {
            alert("Diameter Wheel " + i + " is empty");
            acumErrores++;
        }
        else if (ruedaDiam <= 0.4 || ruedaDiam >= 2) {
            alert("Check diameter of wheel " + i);
            acumErrores++;
        }
    }
    if (acumErrores > 0) {
        return false;
    }
    else {
        for (var i = 1; i <= 4; i++) {
            var ruedaBrand = document.getElementById('rueda' + i).value;
            var ruedaDiam = parseFloat(document.getElementById('diametro' + i).value);
            var wheel_generica = new Wheel(ruedaDiam, ruedaBrand);
            car.addWheel(wheel_generica);
        }
        var showWheels = document.getElementById("showWheel");
        showWheels.innerHTML = " WHEELS: " + '<br>';
        var showW1 = document.getElementById("showW1");
        showW1.innerHTML = "Wheel 1 <br>Brand: " + car.wheels[0].brand + " <br>Diameter: " + car.wheels[0].diameter;
        var showW2 = document.getElementById("showW2");
        showW2.innerHTML = "Wheel 2 <br>Brand: " + car.wheels[1].brand + " <br>Diameter: " + car.wheels[1].diameter;
        var showW3 = document.getElementById("showW3");
        showW3.innerHTML = "Wheel 3 <br>Brand: " + car.wheels[2].brand + " <br>Diameter: " + car.wheels[2].diameter;
        var showW4 = document.getElementById("showW4");
        showW4.innerHTML = "Wheel 4 <br>Brand: " + car.wheels[3].brand + " <br>Diameter: " + car.wheels[3].diameter;
    }
}
