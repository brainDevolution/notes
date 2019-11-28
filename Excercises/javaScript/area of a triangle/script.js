var side1 = 5;
var side2 = 6;
var side3 = 7;

var constant = ((side1 + side2 + side3)/2);
var area = Math.sqrt((constant*(constant-side1)*(constant-side2)*(constant-side3)));

console.log(area);