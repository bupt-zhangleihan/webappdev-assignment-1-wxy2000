//正循环
let multiple1 = [];
function multiplePrint1 (num){
    for (let i=1; i<=num; i++) {
        if(i%3 === 0){
            multiple1.push(i)
        }
    }
    console.log(multiple1);
}

multiplePrint1(20);

//反循环
let multiple2 = [];
function multiplePrint2 (num){
    for (let i=num; i>=1; i--) {
        if(i%3 === 0){
            multiple2.push(i)
        }
    }
    console.log(multiple2);
}

multiplePrint2(20);