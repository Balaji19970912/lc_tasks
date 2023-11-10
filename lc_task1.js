let str = "abbcccaa"

let ar = ['']

let temp = ''

let flag = 0

for(let i=0; i<str.length; i++) {
  if(str[i] == str[i+1]) {
   let len = ar.length-1
    if(ar.includes(str[i], len)) {
      let val = ar.at(len)
      let res = val + str[i]
      ar.splice(len, 1, res)
    } else {
      ar.push(str[i])
    }
  } else if(str[i+1] == null) {
    let len = ar.length-1
    if(ar[len].includes(str[i])) {
      let val = ar.at(len)
      let res = val + str[i]
      ar.splice(len, 1, res)
    } else {
      ar.push(str[i])
    }
  }
  else {
    let len = ar.length-1
    if(ar[len].includes(str[i])) {
      let val = ar.at(len)
      let res = val + str[i]
      ar.splice(len, 1, res)
    } else {
      ar.push(str[i])
    }
  }
}
// console.log(ar.slice(1))
let finalArray = ar.slice(1)
console.log(finalArray)







