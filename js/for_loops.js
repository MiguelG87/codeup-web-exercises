function showMultiplicationTable(x){
    for (let i = 1; i <= 10; i++){
        var answer = x * i;
        console.log("7 x " + i + " = " + answer);
    }
}
showMultiplicationTable(7);

function oddOrEven(){
    for (let i = 0; i < 10; i++ ){
        var randomNum = Math.floor(Math.random()*180)+20
        if (randomNum % 2 === 0){
            console.log(randomNum + " is even.");
        } else {
            console.log(randomNum + " is odd.");
        }
    }
}
oddOrEven();

function addOne(){
    for (let i = 1; i <= 9; i++) {
    var num = i.toString().repeat(i);
    console.log(num);
    }
}

addOne();

function subtractByFive(){
    for (let i = 100; i >= 5 ; i-= 5) {
        console.log(i);
    }
}
subtractByFive();

