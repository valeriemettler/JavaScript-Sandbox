var addMults = function(n) {
    total = 0;
    for (var x = 1; x < n; x++) {
        if ((x % 3 == 0) || (x % 5 == 0)) {
            total += x;
        }
    }
    return total;
}
addMults();

console.log("addMults(10) = " + addMults(10));
console.log("addMults(20) = " + addMults(20));
console.log("addMults(300) = " + addMults(300));
console.log("addMults(1000) = " + addMults(1000));
if (addMults(10) == 23 ) { console.log("correct");} else {console.log("incorrect");}
if (addMults(20) == 78 ) { console.log("correct");} else {console.log("incorrect");}
if (addMults(300) == 20850 ) { console.log("correct");} else {console.log("incorrect");}
if (addMults(1000) == 233168 ) { console.log("correct");} else {console.log("incorrect");}

