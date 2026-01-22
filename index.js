require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const directors = require('./routes/directors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Configuration MongoDB
const mongoUser = process.env.MONGO_ROOT_USERNAME;
const mongoPass = process.env.MONGO_ROOT_PASSWORD;
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const dbName = process.env.MONGO_DB_NAME || 'media_library';

const mongoUri = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/${dbName}?authSource=admin`;

// Connexion à MongoDB
mongoose.connect(mongoUri)
    .then(() => console.log('Connecté à MongoDB'))
    .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Route de base
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API EP Flix');
});

con//routes
app.use('/api/directors', directors)

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});