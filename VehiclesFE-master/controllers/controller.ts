let car: Car;
let formWheel = document.getElementById("formWheel") as HTMLInputElement;
formWheel.style.visibility = 'hidden';

let formCar = document.getElementById("formCar") as HTMLInputElement;
formCar.style.visibility = 'visible';
function createCar(){
    let acumErrores = 0;

    let plateInput = (document.getElementById("plate") as HTMLInputElement).value;
    let brandInput = (document.getElementById("brand") as HTMLInputElement).value;
    let colorInput = (document.getElementById("clor") as HTMLInputElement).value;

    let plateValidation = /^[0-9]{4}[a-zA-Z]{3}$/;

    if(plateInput == ""){
        alert("Plate seems to be empty!");
        acumErrores++;
    }
    
    if (!plateValidation.test(plateInput)) {
        alert("Plate seems to be wrongly typed!");
        acumErrores++;
    }
    
    if(brandInput == "") {
		alert("Brand seems to be empty!");
        acumErrores++;
	}
    
    if(colorInput == "") {
		alert("Color seems to be empty!");
        acumErrores++;
    }
    
    if (acumErrores > 0){
        return false;
    }else{
        car=new Car(plateInput,colorInput,brandInput);
        formCar.style.visibility = 'hidden';
        formWheel.style.visibility = 'visible';
        let showCar = document.getElementById("showCar") as HTMLParagraphElement; 
        showCar.innerHTML= "CAR: <br><br>";

        let showPlate = document.getElementById("showPlate") as HTMLParagraphElement; 
        showPlate.innerHTML= "PLATE: " + plateInput;

        let showBrand = document.getElementById("showBrand") as HTMLParagraphElement; 
        showBrand.innerHTML= " BRAND: " + brandInput;

        let showColor = document.getElementById("showColor") as HTMLParagraphElement; 
        showColor.innerHTML= " COLOR: " + colorInput;  
	}

}


function createWheels(){
    let acumErrores = 0;

    for (let i = 1; i <= 4; i++){
        let ruedaBrand = (document.getElementById('rueda'+i) as HTMLInputElement).value;
        let ruedaDiam = parseFloat((document.getElementById('diametro'+i) as HTMLInputElement).value);
        if(ruedaBrand == ''){
            alert(`Brand Wheel ${i} is empty`);
            acumErrores++;
        }
        
        if(isNaN(ruedaDiam)){
            alert(`Diameter Wheel ${i} is empty`);
            acumErrores++;
        }else if(ruedaDiam<= 0.4 || ruedaDiam >= 2){
            alert(`Check diameter of wheel ${i}`);
            acumErrores++;
        }
       
    }
    
    if (acumErrores > 0){
    return false;
    }else{
        for (let i = 1; i<= 4; i++){
            let ruedaBrand = (document.getElementById('rueda'+i) as HTMLInputElement).value;
            let ruedaDiam = parseFloat((document.getElementById('diametro'+i) as HTMLInputElement).value);
            let wheel_generica = new Wheel(ruedaDiam,ruedaBrand); 
            car.addWheel(wheel_generica);
        }

        let showWheels = document.getElementById("showWheel") as HTMLParagraphElement; 
        showWheels.innerHTML= " WHEELS: " + '<br>'; 

        let showW1 = document.getElementById("showW1") as HTMLParagraphElement; 
        showW1.innerHTML= `Wheel 1 <br>Brand: ${car.wheels[0].brand} <br>Diameter: ${car.wheels[0].diameter}`; 

        let showW2 = document.getElementById("showW2") as HTMLParagraphElement; 
        showW2.innerHTML= `Wheel 2 <br>Brand: ${car.wheels[1].brand} <br>Diameter: ${car.wheels[1].diameter}`;

        let showW3 = document.getElementById("showW3") as HTMLParagraphElement; 
        showW3.innerHTML= `Wheel 3 <br>Brand: ${car.wheels[2].brand} <br>Diameter: ${car.wheels[2].diameter}`;

        let showW4 = document.getElementById("showW4") as HTMLParagraphElement; 
        showW4.innerHTML= `Wheel 4 <br>Brand: ${car.wheels[3].brand} <br>Diameter: ${car.wheels[3].diameter}`;
        
    } 


}    
        
