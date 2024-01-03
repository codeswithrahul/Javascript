
var input = '1234surya-name4321&42-age1234&male-gender4321'
output = { name: 'surya', age: '42', gender: 'male' } 

function output(input){
  let obj ={}
  const lawra = input.split('1234').join('').split('4321').join('').split("&")
  for(let val of lawra){
    const ele = val.split("-")
    obj[ele[1]] = ele[0]
    
  }
  console.log(obj)

}

output(input)