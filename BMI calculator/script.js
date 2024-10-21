const form = document.querySelector("form");
form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result"); 

    if (isNaN(height) || height <= 0) { 
        result.innerHTML = `Please give a valid height.`;
    }
    else if (isNaN(weight) || weight <= 0) { 
        result.innerHTML = `Please give a valid weight.`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); 
        let category;
        if(bmi<18.6){
            category="Underweight";
        }
        else if(bmi>24.9){
            category="Overweight";
        }
        else if(bmi>18.5 && bmi<24.9){
            category="Normal Weight";
        }
        result.innerHTML = `<br>Your BMI is: <span>${bmi}</span> <br>${category}`;
    }
});