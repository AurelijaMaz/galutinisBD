const  { Router } = require('express');
const {
    getAnimals,
    postAnimal,
    updateAnimal,
    deleteAnimal
} = require('../controlers/animals')

const router = Router();

router.get('/', getAnimals);

router.post('/', postAnimal);

router.patch('/', updateAnimal);

router.delete('/', deleteAnimal);

module.exports = router;