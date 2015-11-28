var palindromeCheck = function(x) {
    for (var i = 0; i < x.length; i++) {
        var a = x[i];
        // console.log(a);
        var b = x[x.length - (i + 1)];
        // console.log(b);
        if (a !== b) {
            return false;
        } else {
            continue;
        }
    }
    console.log("true");
    return true;
}
console.log("palindromeCheck(anna) = " + palindromeCheck("anna"));
console.log("palindromeCheck(bob) = " + palindromeCheck("bob"));
console.log("palindromeCheck(mom) = " + palindromeCheck("mom"));
console.log("palindromeCheck(racecar) = " + palindromeCheck("racecar"));
console.log("palindromeCheck(twirl) = " + palindromeCheck("twirl"));
console.log("palindromeCheck(skdjfhkshkwherw) = " + palindromeCheck("skdjfhkshkwherw"));
if (palindromeCheck("anna") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palindromeCheck("bob") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palindromeCheck("mom") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palindromeCheck("racecar") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palindromeCheck("twirl") == false ) { console.log("correct");} else {console.log("incorrect");}
if (palindromeCheck("skdjfhkshkwherw") == false ) { console.log("correct");} else {console.log("incorrect");}
