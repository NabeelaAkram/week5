
 fetch("https://www.boredapi.com/api/activity") 
 .then(res => res.json()) 
.then(data => change(data))
var one=document.getElementById("one")
var btn=document.getElementById("random")

console.log(data)
function change(data){
   console.log(data)
    let p=data
     one.innerHTML=p.type
 }
// btn.addEventListener('click',function change(data){
//     console.log(p.activity)
//     // one.innerHTML=p.type

// })