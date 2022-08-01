// BMI Calculator

// BMI = weight(kg) / height ^2 (m^2);
function BMI(weight, height){
    return Math.round(weight / Math.pow(height,2));
}

var myBMI = BMI(98,1.84);
console.log(myBMI);
