const sum = (a,b) => {
    return a + b
}

const fromDollarToYen = (dollar) => {
    let currentYenConversion = 144.37; 
    return dollars * currentYenConversion;
}
const fromEuroToDollar = (euro) => {
    let currentDollarConversion = 1.2; 
    return (euro * currentDollarConversion);
}
const fromYenToPound = (yen) => {
    let currentPoundConversion = 0.0055; 
    return yen * currentPoundConversion;
}



module.exports = { 
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
 };