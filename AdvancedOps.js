const LongestString = function (AV) {
    let ResultNumber = AV[0].toString() // sets the first string as longest number
    let ResultValue = AV[0].toString().length // sets the first string length as longest lenght 
    let i = 0
    while (i+1<AV.length) { // checks all numbers one by one and compares the numbers
        if ((ResultValue)<(AV[i+1].toString().length)) { // this if statement replaces the old longest statement with the new longest statement if there is one 
            ResultNumber = AV[i+1].toString()
            ResultValue = AV[i+1].toString().length
        }
        i++
        console.log(ResultValue , ResultNumber);
    }
   console.log("The longest string value in array is : " + ResultValue); // returns the longest numbers length in array
   console.log("The longest number in array is : " + ResultNumber);  // returns the longest number in array as string
   return ResultValue // returns function 
}




let someNum = [1, 12121 ,224234 ,13123213123 , 88888888888];

LongestString(someNum);
