const APICALL = "http://localhost:1337/api/users/me"

const disconnectButton = document.querySelector(".disconnect")
const savedToken = JSON.parse(window.localStorage.getItem('data'))

const userEmailField = document.querySelector(".user-email")
const firstNameField = document.querySelector(".first-name")
const lastNameField = document.querySelector(".last-name")
const fullName = document.querySelector(".full-name")

const sendButton = document.querySelector(".send-button")

// Création d'une fonction asynchrone
async function callAPI() {
    const reponse = await fetch(APICALL, {
        method: "GET",
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken[0].token}`}
    })
    const data = await reponse.json()
    console.log(data)

    getInfo(data)
}

function getInfo(user) {
    userEmailField.innerText = user.email
    firstNameField.value = user.firstName
    lastNameField.value = user.lastName
    fullName.innerText = user.firstName + " " + user.lastName
}

sendButton.addEventListener('submit', (e) => {
    e.preventDefault()
    sendInfo()
})

async function sendInfo() {
    const reponse = await fetch(APICALL, {
        method: "PUT",
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken[0].token}`},
        body: JSON.stringify({
            "firstName": firstNameField.value,
            "lastName": lastNameField.value
        })
    })
    const data = await reponse.json()
    console.log(data)
}

callAPI()

/* FONCTIONS RÉSERVÉS POUR LA CONNEXION */
// On créé un objet qui va nous permettre d'exploiter des données
let saveData = {
    authData: {
        token : ""
    }
}

// Bouton de déconnexion
disconnectButton.addEventListener('click', (e) => {
    savedToken[0].token = null
    saveObj()
    window.location.href = "index.html"
})

function saveObj() {
    window.localStorage.setItem('data', JSON.stringify(saveData))
}