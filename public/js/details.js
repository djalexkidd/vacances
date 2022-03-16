const queryString = window.location.search.substring(1);

const APICALL = `http://localhost:1337/api/maisons/${queryString}?populate=photo`

const affichage = document.querySelector(".affichage")
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
    const carteHTML = `
        <img class="house-photo" src="http://localhost:1337${maison.data.attributes.photo.data?.attributes.url}" alt="Image de la maison" />
        <div class="house-data">
            <h1 class="house-name">${maison.data.attributes.nom}</h1>
            <h2 class="house-geo">${maison.data.attributes.secteur_geo}</h2>
            <p class="house-description">${maison.data.attributes.description}</p>
        </div>
        `

    affichage.innerHTML += carteHTML
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