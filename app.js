const sum=(a,b)=>{
    return a+b
}
console.log(sum(10,10))


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen =function(valueToYen){
    let valueInYen=valueToYen *1.2
    return valueInYen
}


const fromYenToPound=function(fromYenPound){
    let valueInPunds=fromYenPound *1.2
       return valueInPunds
}
module.exports={fromEuroToDollar,sum,fromDollarToYen,fromYenToPound}
