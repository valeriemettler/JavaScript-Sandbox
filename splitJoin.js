var splitJoin = function(x) {
    return x.split(",").join(";");
}

console.log("splitJoin('valerie, 20, 100') = " + splitJoin('valerie, 20, 100'));
if (splitJoin("valerie, 20, 100") == ("valerie; 20; 100")) {
    console.log("correct");
} else {
    console.log("incorrect");
}