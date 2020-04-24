const reverser = function(str) {
    let strlength = str.length
    let result = "";
    while(strlength>0) {
        result = result + str.charAt(strlength-1);
        strlength--;
    }
    return result
}

const stringinator = function(arr) {
    let i = 0
    result = ""
    while(i<arr.length) {
        result = result + arr[i]
        i++;
    }
    return result
}

const NumCallfromDgt = function (Nums , ArrayIndex ,  Dgt) { //function selects the value from Nums array due to ArrayIndex and calls Number from selected arrayvalue due to Dgt value
 return Number(reverser(Nums[ArrayIndex].toString()).charAt(Dgt));
}

const arrayinator = function(arrayVal) {      //converts string into array results array returns array with numbers 
    console.log(arrayVal);
    let i = 0
    let result = [];
    let arraylength = arrayVal.toString().length;
    while(i<arraylength) {
        result[i] = Number((arrayVal.toString()).charAt(i));
        i=i+1;
    }
    return result
}

const DgtAdd = function(resultAr,NextAr) {   // sums the value in the two arrays from first digit to last digit
    let result = [];
    let i = 0
    while ((resultAr[i]!==undefined)||(NextAr[i]!==undefined)) {
        if (resultAr[i]==undefined) {
            resultAr[i] = 0
            result[i] = (resultAr[i] + NextAr[i])
        } else if (NextAr[i]==undefined) {
            NextAr[i] = 0  
            result[i] = (resultAr[i] + NextAr[i])
        } else if ((NextAr[i]&&resultAr[i])!==undefined) {
            result[i] = (resultAr[i] + NextAr[i]) 
        }
        i=i+1
    }
    return result    
}
    
const proto = function(ar) {     // checks the result 
    let i = 0;
    let result = "";
    console.log("ar lenght"+ar.length)
    let xaxd = ar.length;
    while (i<xaxd) {
        if (i===(xaxd-1)) {
            if (ar[i]>=10) {
                if (i===0)  {
                    ar[-1] = 0
                    if (ar[i-1]>=10) {
                        console.log("a1")
                        result = result + (Number(ar[i])-9).toString();
                        result = result + "1"
                    } else if (ar[i-1]<10) {
                        console.log("b1")
                        result = result + (Number(ar[i])-10).toString()
                        result = result + "1"
                    }
                } else {
                    if (ar[i-1]>=10) {
                        console.log("a2")
                        result = result + (Number(ar[i])-9).toString();
                        result = result + "1"
                    } else if (ar[i-1]<10) {
                        console.log("b2")
                        result = result + (Number(ar[i])-10).toString()
                        result = result + "1"
                    }  
                }
            } else if (ar[i]<10) {
                if (i===0) {
                    ar[-1]=0
                    if (ar[i-1]<10) {
                        console.log("c1")
                        result = result + (Number(ar[i])).toString()
                    } else if (ar[i-1]>=10) {
                        console.log("d1")
                        result = result + (Number(ar[i])+1).toString()
                    }  
                } else {
                    if (ar[i-1]<10) {
                        console.log("c2")
                        result = result + (Number(ar[i])).toString()
                    } else if (ar[i-1]>=10) {
                        console.log("d2")
                        result = result + (Number(ar[i])+1).toString()
                    }     
                }
            }
        } else if ((i !== (xaxd-1))&&(ar[i]>=10)) {
            if (i===0) {  //+
                ar[-1] = 0
                if (ar[i-1]>=10) {
                    console.log("e1")
                        result = result + (Number(ar[i])-9).toString()
                } else if (ar[i-1]<10) {
                    console.log("f1")
                    result = result + (Number(ar[i])-10).toString()
                }
            } else {
                if (ar[i-1]>=10) {
                    console.log("e2")
                        result = result + (Number(ar[i])-9).toString()
                } else if (ar[i-1]<10) {
                    console.log("f2")
                    result = result + (Number(ar[i])-10).toString()
                }
            }
        } else if ((i !== (xaxd-1))&&(ar[i]<10)) {
            if (i === 0) {
                ar[-1] = 0
                if (ar[i-1]>=10) {
                    console.log("g1")
                    result = result + (Number(ar[i])+1).toString()
                } else if (ar[i-1]<10) {
                    console.log("h1")
                    result = result + (Number(ar[i])).toString()
                }
            } else {
                if (ar[i-1]>=10) {
                    console.log("g2")
                    result = result + (Number(ar[i])+1).toString()
                } else if (ar[i-1]<10) {
                    console.log("h2")
                    result = result + (Number(ar[i])).toString()
                } 
            }
        } i=i+1
    } return arrayinator(result);
}

const AdvancedOps = function(arr) {
    let i = 1
    let EndResult = (arrayinator(reverser((arr[0]))));
    console.log("Endres "+EndResult)
    while (i<arr.length) {
        EndResult = proto(DgtAdd(EndResult,(arrayinator(reverser((arr[i]))))));
        console.log(EndResult)
        i++;
    }
    return reverser(stringinator(EndResult))
}

let Nums = ["122","128"]; //write here the nmbers you want to process
console.log("The result is :"+AdvancedOps(Nums));

