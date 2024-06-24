// console.log(checkTriangleType(3,3,3)) --> equilateral
// console.log(checkTriangleType(3,4,3)) --> isoSceles
// console.log(checkTriangleType(5,8,6)) --> scalane

function checkTriangleType(a, b, c) {
  if (a === b && a === c) {
    console.log("equilateral");
  } else if (a === b || a === c || b === c) {
    console.log("isoSceles");
  } else {
    console.log("scalane");
  }
}

checkTriangleType(5, 3, 4);
