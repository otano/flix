

# "Part d'une image de base qui contient déjà Node.js (version 20) alpine ainsi 
# que l'environnement d'exécution de ton application à l'intérieur du conteneur.

FROM node:20-alpine

# À l'intérieur du conteneur, crée un dossier /usr/src/app et place-toi dedans.
#Toutes les commandes suivantes s'exécuteront à partir de là."
WORKDIR /usr/src/app


#Prends les fichiers package.json et package-lock.json de mon projet local et 
#copie-les dans le répertoire de travail (/usr/src/app) du conteneur."
COPY package*.json ./

#install npm
RUN npm install

COPY . .
# ici c'est de l'info parce que ces infos sont pris en charge par docker compose
EXPOSE 3000

CMD ["npm", "start"]