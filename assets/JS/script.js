const passwordBox = document.getElementById("password")
const length = 16
let body = document.querySelector("body")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()_+|}{?></-="
const allChars = upperCase + lowerCase + number + symbol

function createPass() {

    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password
    document.getElementById('success_msg').classList.add('d-none')
}

function copyPass() {
    passwordBox.select();
    document.execCommand("copy");
    
    let successMsg = document.getElementById("success_msg")
    successMsg.classList.toggle("d-none")
    
    passwordBox.value = ""
}