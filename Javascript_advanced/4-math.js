//

function divideBy(firstNumber){
    return (secondNumber)=>{
        const dividedNum = secondNumber/firstNumber;
        return dividedNum;
    };

};
function addBy(firstNumber){
    return (secondNumber)=>{
        const addedNum = firstNumber+secondNumber;
        return addedNum;
    };
};

const addBy100 = addBy(100)
const addBy1000 = addBy(1000)
const divideBy10 = divideBy(10)
const divideBy100 = divideBy(100)

//executing the code
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));