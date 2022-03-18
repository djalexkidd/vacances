const disconnectButton = document.querySelector(".disconnect")
const savedToken = JSON.parse(window.localStorage.getItem('data'))

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

/* EASTER EGG */
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];

    if (key == requiredKey) {

      konamiCodePosition++;

      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
});

function activateCheats() {
    window.location.href = "img/easteregg.webm"
}