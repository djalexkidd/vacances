const queryString = window.location.search.substring(1);

const APICALL = `http://localhost:1337/api/maisons/${queryString}?populate=photo`
const COMMODITIES = `http://localhost:1337/api/commodities/${queryString}`
const PRICE = `http://localhost:1337/api/prices/${queryString}`

const affichage = document.querySelector(".affichage")
const houseName = document.querySelector(".house-name")
const disconnectButton = document.querySelector(".disconnect")
const savedToken = JSON.parse(window.localStorage.getItem('data'))

const time = new Date()

// Création d'une fonction asynchrone
async function callAPI() {
    const reponse = await fetch(APICALL, {
        method: "GET",
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken[0].token}`}
    })

    const reponse_com = await fetch(COMMODITIES, {
        method: "GET",
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken[0].token}`}
    })

    const reponse_price = await fetch(PRICE, {
        method: "GET",
        headers: {'Content-Type': 'application/json',
        'Authorization': `Bearer ${savedToken[0].token}`}
    })

    const data = await reponse.json()
    const data_com = await reponse_com.json()
    const data_price = await reponse_price.json()

    console.log(data)
    console.log(data_com)
    console.log(data_price)

    creationCarte(data, data_com, data_price)
}

// Affichage de la carte de la maison
function creationCarte(maison, commodity, price) {
    const carteHTML = `
        <img class="house-photo" src="http://localhost:1337${maison.data.attributes.photo.data?.attributes.url}" alt="Image de la maison" />
        <div class="house-data">
            <h1 class="house-name">${maison.data.attributes.nom}</h1>
            <h2 class="house-geo">${maison.data.attributes.secteur_geo}</h2>
            <p class="house-description">${maison.data.attributes.description}</p>
            <p class="house-surface">${maison.data.attributes.surface} m²</p>
            <p class="house-bed">${commodity.data.attributes.chambres} chambres</p>
            <p class="house-soap">${commodity.data.attributes.salleDeBain} salles de bain</p>
            <p class="house-price-low">Basse saison : ${price.data.attributes.basseSaison} €</p>
            <p class="house-price-mid">Moyenne saison : ${price.data.attributes.moyenneSaison} €</p>
            <p class="house-price-high">Haute saison : ${price.data.attributes.hauteSaison} €</p>
        </div>
        `

    affichage.innerHTML += carteHTML

    const basseSaison = document.querySelector(".house-price-low")
    const moyenneSaison = document.querySelector(".house-price-mid")
    const hauteSaison = document.querySelector(".house-price-high")

    hauteSaison.style.display = "none"

    if (time.getMonth() < 5 && time.getMonth() > 0) {
        moyenneSaison.style.display = "none"
    } else if (time.getMonth() < 11 && time.getMonth() > 5) {
        basseSaison.style.display = "none"
    }

    if (time.getMonth() === 6 || time.getMonth() === 7) {
        hauteSaison.style.display = "block"
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