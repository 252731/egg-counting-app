let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)

let count = 0 
function increment () {
 
    count += 1
   countEl.textContent= count
}

function save () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

console.log(count)
}
save()

let welcomeEl= document.getElementById ("welcome-el")
console.log(welcomeEl)
let name = "Barandyk"
let greeting = " welcome back "

welcomeEl.innerText = name + greeting
welcomeEl.innerText += " 👋"
console.log(welcomeEl)


