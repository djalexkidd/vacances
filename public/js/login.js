const APICALL = "http://localhost:1337/api/auth/local/"

const emailField = document.querySelector(".email")
const passwordField = document.querySelector(".password")
const sendForm = document.querySelector(".sendform")
const form = document.querySelector('.user-form')
const loginFailed = document.querySelector('.failed')

const savedToken = JSON.parse(window.localStorage.getItem('data'))

// On créé un objet qui va nous permettre d'exploiter des données
let saveData = {
    authData: {
        token : ""
    }
}

// Création d'une fonction asynchrone
async function dataUser(utilisateur, motDePasse) {
    const reponse = await fetch(APICALL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "identifier": utilisateur,
            "password": motDePasse
        })
    })
    const data = await reponse.json()
    console.log(data)

    if (data.jwt != null) {
        saveData[0] = {
            token : data.jwt
        }
        saveObj()
        window.location.href = "index.html"
    } else {
        loginFailed.style.display = "block"
    }
}

// Formulaire pour entrer le nom
form.addEventListener('submit', (e) => {
    e.preventDefault()
    dataUser(emailField.value, passwordField.value)
})

function saveObj() {
    window.localStorage.setItem('data', JSON.stringify(saveData))
}

if (savedToken[0].token != null) {
    window.location.href = "index.html"
}