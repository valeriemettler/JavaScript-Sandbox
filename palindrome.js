//check if a string is a palindrome, return true or false
var palCheck = function(x) {

    var word = x;

    //split("") returns ["a", "n", "n" "a"]
    //join("") returns "anna"

    var n = word.split("").reverse().join("");

    if (n === word) {
        return true;
    }
    if (n !== word) {
        return false;
    }
}
console.log("palCheck(anna) = " + palCheck("anna"));
console.log("palCheck(bob) = " + palCheck("bob"));
console.log("palCheck(mom) = " + palCheck("mom"));
console.log("palCheck(racecar) = " + palCheck("racecar"));
console.log("palCheck(twirl) = " + palCheck("twirl"));
if (palCheck("anna") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palCheck("bob") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palCheck("mom") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palCheck("racecar") == true ) { console.log("correct");} else {console.log("incorrect");}
if (palCheck("twirl") == false ) { console.log("correct");} else {console.log("incorrect");}
