
// const data = [6,4,3];
// //i = 6
// // j = 4
// function dataCheck(){
//     for(let i =0;i<data.length;i++){
//         for(let j=i+1;j<data.length;j++){
//             if(data[i] === data[j]){
//                 return true;
//             } else{
//                 return 'duplicate nahi hai';
//             }
//         }
//     }
// }
// console.log(dataCheck())
// pahla loop chalynge row pe 0 se and dusra loop chalynge column pe 0
//   i
//   0 1 2 3
//j 0 * * * *
//  1 * * * *
//  2 * * * *
//  3 * * * *


// function printStar(n) {
//     // i = 0;
//     // j = 0;
//     // j = 1;

//     // row = row + '*' = "*"
//     // row = '*' + "*" = "* *"
    

//     for (let i = 0; i <= n; i++) {
//         let row = "";
//          for(let j=0; j<=n; j++){
//             row = row + "*"
//          }
//          console.log(row);
         
//     }
// }
// console.log(printStar(2))


// ------------------> row// *
// * *
// * * *
// * * * *
// * * * * *


// * * * * *
// * * * *
// * * *
// * *
// *

function printStar(n) {

    for (let i = 1; i <= n; i++) {
        let temp = ""
        // 2 < = 1
        // 1 < = 2
        for(let j=1; j<=i; j++){
          temp = temp + "* "
        //   temp = "* *"
        }

        // console.log(temp) *
        // * *
    }
}
console.log(printStar(5))











