const APICALL = "http://localhost:1337/api/auth/local/"

const emailField = document.querySelector(".email")
const passwordField = document.querySelector(".password")
const sendForm = document.querySelector(".sendform")
const form = document.querySelector('.user-form')

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
}

// Formulaire pour entrer le nom
form.addEventListener('submit', (e) => {
    e.preventDefault()
    dataUser(emailField.value, passwordField.value)
})