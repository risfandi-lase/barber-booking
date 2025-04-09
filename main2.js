const data = localStorage.getItem('appointment-data')/// mengambil data yang telah disimpan (masih dalam bentuk string)
const userInput = JSON.parse(data) //// data yang dari string diubah lagi menjadi objek



const nameDisplay = document.querySelector('.name')
const arrivalDisplay = document.querySelector('.arrival')
const barberDisplay = document.querySelector('.barber')
const priceDisplay = document.querySelector('.price')
let serviceDisplay = document.querySelector('.services')
const total = userInput.price.reduce((sum, num) => sum + Number(num), 0);


nameDisplay.textContent = userInput.name
arrivalDisplay.textContent = userInput.date + ',' + ' ' + userInput.time
barberDisplay.textContent = userInput.barber
priceDisplay.textContent = '$' + total 
serviceDisplay.textContent = userInput.service


console.log(userInput.service)

console.log()