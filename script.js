
let pause =document.querySelector('#pause')
let tab =document.querySelector('#switch-tab')


pause.addEventListener('click',async () => {


let raw = await fetch("host-adress"+ '/space')
let result = await raw.json()
console.log(result);
})
let tab =document.querySelector('#switch-tab')
tab.addEventListener('click',async () => {

  let raw = await fetch("host-adress"+ '/tab')
  let result = await raw.json()
  console.log(result);
  })
  