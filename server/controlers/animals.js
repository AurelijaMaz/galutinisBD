const mongoose = require('mongoose');
const AnimalModel = require('../models/AnimalModel');

const getAnimals =  async (req, res) => {
res.status(200).json('')
}

const postAnimal =  async (req, res) => {
    res.status(200).json('')
}

const updateAnimal =  async (req, res) => {
    res.status(200).json('')
}

const deleteAnimal =  async (req, res) => {
    res.status(200).json('')
}

module.exports = {

    getAnimals,
    postAnimal,
    updateAnimal,
    deleteAnimal
}