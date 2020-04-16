
const LongestString = function (AV) {
    let ResultNumber = AV[0].toString()
    let ResultValue = AV[0].toString().length
    let i = 0
    while (i+1<AV.length) {
        if ((ResultValue)<(AV[i+1].toString().length)) {
            ResultNumber = AV[i+1].toString()
            ResultValue = AV[i+1].toString().length
        }
        i++
        console.log(ResultValue , ResultNumber);
    }
   console.log("The longest string value in array is : " + ResultValue);
   console.log("The longest number in array is : " + ResultNumber);  
   return ResultValue
}


const DigitValue = function (dgtnumber) {

}
 
const AdvancedOps = function () {
    let digitNumberValue = 0
}

let BigNums = [1,2,1,10,123,100000,12345678];

console.log(BigNums);

console.log(LongestString(BigNums));

