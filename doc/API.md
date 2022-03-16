# Utilisation de l'API

Pour manipuler les données de l'API j'ai utilisé la fonction ```fetch``` en JavaScript Vanilla.

## Endpoints

Exemple d'utilisation : ```const APICALL = "http://localhost:1337/api/maisons"```

```GET /api/maisons``` Maisons

```GET /api/maisons?populate=photo``` Maisons avec photos

```GET /api/commodities``` Commoditées

```POST /api/auth/local``` Authentification des utilisateurs

## Liste des attributs

### Maisons

```maison.data[i].attributes.nom``` Nom de la maison

```maison.data[i].attributes.description``` Description de la maison

```maison.data[i].attributes.secteur_geo``` Secteur géographique

``` maison.data[i].attributes.photo.data?.attributes.url``` Photo

### Authentification

```data.jwt``` Jeton