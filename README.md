# Projet flix

## Stacks
- mongodb
- express
- docker

## Data
Les données des films et des réalisateurs sont chargés par script dans un fichier externe.
Joi pour valider les données

## CRUD
 pour les films, les réalisateurs et les critiques


## Usage
# Démarrage initial
``` bash
docker-compose up -d mongodb        # Lance MongoDB
docker-compose run mongo-import     # Importe les données une fois
# ou
docker-compose up -d                # Lance tout, l'import s'exécute et s'arrête
````

