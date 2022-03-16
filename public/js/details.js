const queryString = window.location.search.substring(1);

const APICALL = `http://localhost:1337/api/maisons/${queryString}?populate=photo`

const houseName = document.querySelector(".house-name")
const disconnectButton = document.querySelector(".disconnect")
const savedToken = JSON.parse(window.localStorage.getItem('data'))

// Création d'une fonction asynchrone
async function callAPI() {
    const reponse = await fetch(APICALL, {
        method: "GET",
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken[0].token}`}
    })
    const data = await reponse.json()
    console.log(data)

    creationCarte(data)
}

// Affichage de la carte de la maison
function creationCarte(maison) {
    console.log(`${maison.data.attributes.nom}`)
    houseName.innerText = `${maison.data.attributes.nom}`
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