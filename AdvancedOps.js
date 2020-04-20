let EndResult = "";

const LongestString = function (ArrayVal) {
    let ResultNumber = ArrayVal[0].toString() // sets the first string as longest number
    let ResultValue = ArrayVal[0].toString().length // sets the first string length as longest length 
    let i = 0
    let times = 1
    while (i+1<ArrayVal.length) { // checks all numbers one by one and compares the numbers
        if ((ResultValue)<(ArrayVal[i+1].toString().length)) { // this if statement replaces the old longest statement with the new longest statement if there is one 
            ResultNumber = ArrayVal[i+1].toString()
            ResultValue = ArrayVal[i+1].toString().length
        }
        i++
        console.log("The process number : " + times+" The result : "+" Longest Number : "+ResultNumber+" The Longest Number Length is : "+ResultValue);
        times++
    }
   return ResultValue // returns function 
}
const ArrayInfo = function(ArrayVal , maxDigitNum) { //Function for receive Info about our vaues in array and maximum number of digit
    console.log("The length of array is : "+ArrayVal.length+" The longest numbers length is : "+maxDigitNum);
}

const ReverseNums = function(ArrayVal , ASNum) {
    let ReversedNum = ""
    let StringedValue = ArrayVal[ASNum].toString()
    let EndpointReverseNums = (StringedValue.length)-1
    while (EndpointReverseNums>=0) {
        ReversedNum = ReversedNum + StringedValue.charAt(EndpointReverseNums);
        EndpointReverseNums--;
    }
    return ReversedNum;
}

const DigitProcessing = function(ArrayValuesResult) {
    let ProcessedDigit = 0
    let EndpointDigitProcessing = ArrayValuesResult.length
    while (EndpointDigitProcessing>0) {
        ProcessedDigit = ProcessedDigit + Number(ArrayValuesResult.charAt(EndpointDigitProcessing-1));
        EndpointDigitProcessing = EndpointDigitProcessing - 1 ;
    }
    return ProcessedDigit

}

const DigitValue = function(ArrayVal , DigitTurn) {
    let CurrentStringArrayIndex = 0
    let CurrentString = "";
    let ArrayValuesResult = ""
    let EndpointDigitValue = ArrayVal.length
    while(EndpointDigitValue>0) {
        CurrentString = ReverseNums(ArrayVal , CurrentStringArrayIndex);
        console.log("("+CurrentString+")"+"Current string = "+CurrentString.charAt(DigitTurn));
        ArrayValuesResult = ArrayValuesResult + CurrentString.charAt(DigitTurn);
        CurrentStringArrayIndex = CurrentStringArrayIndex + 1 ;
        EndpointDigitValue--;
    };
    console.log("Array value result : "+ArrayValuesResult);
    console.log("Array value length result : "+ArrayValuesResult.length);
    console.log(DigitProcessing(ArrayValuesResult))
    return DigitProcessing(ArrayValuesResult);     
}

const AdvancedOps = function(ArrayVal) { //main function
    let DigitTurn = 1
    let maxDigitNum = LongestString(someNum);
    ArrayInfo(ArrayVal , maxDigitNum);  //gives info about our values in array and maximum number of digit.
    while (DigitTurn <= maxDigitNum) { 
        console.log("The processing digit : "+ DigitTurn);
        EndResult = EndResult + DigitValue(ArrayVal , DigitTurn-1) + ","
        DigitTurn++
    }
    return EndResult
}



// 2 döngü olacak ilk döngü sayının hangi basamağının işleneceğini seçecek ikinci döngü işlenecek parantez değerini seçecek


let someNum = [4, 100 ,999];


console.log(AdvancedOps(someNum));




