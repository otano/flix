const express = require('express');
const router = express.Router();
const { Director, validateDirector } = require('../models/director');

// Récupérer tous les réalisateurs
router.get('/', async (req, res) => {
    const directors = await Director.find().sort('name');
    res.send(directors);
});

// Créer un nouveau réalisateur
router.post('/', async (req, res) => {
    const { error } = validateDirector(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let director = new Director({
        name: req.body.name,
        birthdate: req.body.birthdate,
        nationality: req.body.nationality
    });
    director = await director.save();
    res.send(director);
});

// Récupérer un réalisateur par ID
router.get('/:id', async (req, res) => {
    const director = await Director.findById(req.params.id);
    if (!director) return res.status(404).send('Le réalisateur avec cet ID n\'a pas été trouvé.');
    res.send(director);
});

// Mettre à jour un réalisateur
router.put('/:id', async (req, res) => {
    const { error } = validateDirector(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const director = await Director.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        birthdate: req.body.birthdate,
        nationality: req.body.nationality
    }, { new: true });

    if (!director) return res.status(404).send('Le réalisateur avec cet ID n\'a pas été trouvé.');

    res.send(director);
});

// Supprimer un réalisateur
router.delete('/:id', async (req, res) => {
    const director = await Director.findByIdAndRemove(req.params.id);

    if (!director) return res.status(404).send('Le réalisateur avec cet ID n\'a pas été trouvé.');

    res.send(director);
});

module.exports = router;
