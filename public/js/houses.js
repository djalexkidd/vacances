const APICALL = "http://localhost:1337/api/maisons?populate=photo"
// const COMMODITIES = "http://localhost:1337/api/commodities/"

const affichage = document.querySelector('.affichage')
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
    for(let i = 0; i < maison.data.length; i++) {
        const carteHTML = `
        <div class="carte">
            <img src="http://localhost:1337${maison.data[i].attributes.photo.data?.attributes.url}" alt="Image de la maison" class="image">
            <ul class="cont-infos">
                <li><h2>${maison.data[i].attributes.nom}</h2></li>
                <li class="description">${maison.data[i].attributes.description}</li>
                <li class="source">Secteur géographique : ${maison.data[i].attributes.secteur_geo}</li>
                <li><a class="link" href="details.html?${maison.data[i].id}">Voir détails</a></li>
            </ul>
        </div>
        `

        affichage.innerHTML += carteHTML
    }
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