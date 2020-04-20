// the functions : StringComp , Taking Number From digit , 


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


const NumCallfromDgt = function (Nums , ArrayIndex ,  Dgt) { //function selects the value from Nums array due to ArrayIndex and calls Number from selected arrayvalue due to Dgt value
    let reversed = ""
    let EndpointNumCall = Nums[ArrayIndex].toString().length
    while (EndpointNumCall>0) {
        reversed = reversed + Nums[ArrayIndex].toString().charAt(EndpointNumCall-1);
        EndpointNumCall--;
    }
    return Number(reversed.charAt(Dgt));
}

const DgtSum = function(Nums,Dgt) {
    let dgtSum = 0
    let DgtSumEndP = Nums.length
    while (DgtSumEndP>0) {
        dgtSum = dgtSum + NumCallfromDgt(Nums , DgtSumEndP-1 , Dgt); //the control function will be put here
        DgtSumEndP--;
    }
    return [dgtSum.toString()]
}

const AdvancedOpsRemake = function(Nums) {
    let EndSum = []
    let AdvancedOpsRemakeEndP = LongestString(Nums);
    Num = 0
    while (AdvancedOpsRemakeEndP>0) {
        EndSum[Num] = DgtSum(Nums,AdvancedOpsRemakeEndP-1)[0].toString();
        AdvancedOpsRemakeEndP--;
        Num++;
    }
    return EndSum;
}

const CheckSumVal = function(EndSum) {
    
}

let Nums = [3 , 17 , 100 , 2465];
//          0   1    2     3

console.log(AdvancedOpsRemake(Nums));
console.log(DgtSum(Nums,1)[0])
