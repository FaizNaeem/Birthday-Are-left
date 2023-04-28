let date = new Date()
let arr =["jan","feb","mar","Apr",]
document.write(arr[date.getMonth()])
var birthday= new Date()
 birthday.setDate(+prompt("Enter Your Birthday Date"))
birthday.setMonth(+prompt("Enter Your BirthDay Month"))
birthday.setFullYear(2023)
birthday.setHours(0)
birthday.setMinutes(0)
// console.log(birthday);
let current = new Date()
let get=  birthday.getTime()- current.getTime()
document.write("My BirthDay Left only "+(get/(1000*60*60*24)).toFixed(0)+" Day")