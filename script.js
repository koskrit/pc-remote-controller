
let pause =document.querySelector('#pause')
let tab =document.querySelector('#switch-tab')


pause.addEventListener('click',async () => {


let raw = await fetch('http://192.168.1.10:4000/space')
let result = await raw.json()
console.log(result);
})
let tab =document.querySelector('#switch-tab')
tab.addEventListener('click',async () => {

  let raw = await fetch('http://192.168.1.10:4000/tab')
  let result = await raw.json()
  console.log(result);
  })
  