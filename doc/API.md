# Utilisation de l'API

Pour manipuler les données de l'API j'ai utilisé la fonction ```fetch``` en JavaScript Vanilla.

## Endpoints

Exemple d'utilisation : ```const APICALL = "http://localhost:1337/api/maisons"```

```GET /api/maisons``` Maisons

```GET /api/maisons?populate=photo``` Maisons avec photos

```GET /api/commodities``` Commoditées

``` GET /api/prices``` Prix

```POST /api/auth/local``` Authentification des utilisateurs

```GET /api/users/me``` Informations sur l'utilisateur actuel

## Liste des attributs

### Maisons

```maison.data.attributes.nom``` Nom de la maison

```maison.data.attributes.description``` Description de la maison

```maison.data.attributes.secteur_geo``` Secteur géographique

``` maison.data.attributes.photo.data.attributes.url``` Photo

```maison.data.id``` Indentifiant de la maison

### Commoditées

```commodity.data.attributes.chambres``` Nombre de chambres

```commodity.data.attributes.salleDeBain``` Nombre de salles de bain

### Prix

```price.data.attributes.basseSaison``` Basse saison

```price.data.attributes.moyenneSaison``` Moyenne saison

```price.data.attributes.hauteSaison``` Haute saison

### Authentification

```data.jwt``` Jeton

### Profil de l'utilisateur

```user.firstName``` Prénom

```user.lastName``` Nom de famille