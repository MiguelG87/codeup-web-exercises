//let i = 1
//while (i < 65536){
//    i *= 2;
//    console.log(i);
//}
var allCones = Math.floor(Math.random() * 50) + 50;
console.log('Cones to sell: ' + allCones)
do {
    conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold > allCones){
        console.log('Not enough cones!!');
        continue;
    }
    allCones -= conesSold;
    console.log('Cones sold: ' + conesSold)
} while (allCones > 0){
    console.log('Congrats, you sold all your cones!!');

}