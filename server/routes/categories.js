const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

//GET /api/categories: Get all categories


router.get('/', async (req, res) => {
    try{
        const categories = await Category.find()
        if(!categories) {
            return res.status(404).send('category not found')
        }
    }catch(error) {
        console.error(error)
        res.status(400).send('server error')
    }
});


// POST /api/categories - create a new category
router.post('/', async (req, res) => {
    const { name } = req.body;
  
    if (!name) return res.status(400).send('Category name is required');
  
    try {
      const newCategory = await Category.create({ name });
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
  
  module.exports = router;
  