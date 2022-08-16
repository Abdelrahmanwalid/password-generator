let passwords = []
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const password3 = document.getElementById("password3")
const password4 = document.getElementById("password4")
function generatePassword(){
password1.textContent = makePassword(8)
password2.textContent = makePassword(8)
password3.textContent = makePassword(8)
password4.textContent = makePassword(8)
}

function makePassword(length){
  let result = ""
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let characterLength = characters.length
  for (let i = 0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random()*characterLength))
  }
  return result
}
