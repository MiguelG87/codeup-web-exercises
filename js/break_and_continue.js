let number;
let notValid;
do {
    number = Number(prompt("Enter an odd Number between 1 - 50..."));
    if ((number < 1 || number > 50) || (number % 2 === 0)) {
       let notValid = true;
    } else {
        break;
    }
}while (notValid);
console.log("Number to skip is: " + number);
for (let i = 1; i < 50 ; i+= 2) {
    if (i === number){
        console.log("Yikes! Skipping this number: " + i);
        continue;
    }
    console.log("Here is an odd number " + i);
}