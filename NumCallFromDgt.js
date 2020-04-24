const NumCallfromDgt = function (Nums , ArrayIndex ,  Dgt) { //function selects the value from Nums array due to ArrayIndex and calls Number from selected arrayvalue due to Dgt value
    return Number(reverser(Nums[ArrayIndex].toString()).charAt(Dgt));
}