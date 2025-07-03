
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('joi');
const Post = require('../models/Post'); 
// defining joi
const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    category: Joi.string().required()
  });
  
// GET /api/posts - get all posts
router.get('/', async (req, res) => {
  res.send('Get all posts route working');
});

// GET by id
router.get('/post/:id', async (req, res) => {    
    const { error } = postSchema.validate(req.body);
if (error) {
    return res.status(400).send(error.details[0].message);
}
 try{
    const {id} =req.params;
    //validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send('invalid id')
    }
    //check if post exists
    const post = await Post.findById(id);
    if(!post){
        return res.status(400).send('post not found')}
        res.send(post);
    
}catch (error) {
    console.error(error)
    res.status(500).send('server error')
}
})

// post create a new post
router.post('/api/post', async(req, res) => {    
    
    const { error } = postSchema.validate(req.body);
if (error) {
    return res.status(400).send(error.details[0].message);
}
    try{
    const {title, content, category} = req.body
    // validation
    if(!title || !content || !category){
        return res.status(400).send('All fields are required')
    };
    //create post
    const newPost = await Post.create({title, content, category});
    res.status(201).send('post created successfully')
}
catch (error){
    console.error(error)
    res.status(500).send('Internal server error')
};
});

 //PUT /api/posts/:id: Update an existing blog post;
 router.put('/api/posts/:id', async (req, res) =>{    
    const { error } = postSchema.validate(req.body);
 if (error) {
     return res.status(400).send(error.details[0].message);
 }
    try{
    const {postId} = req.params;
    const {title, content , category} = req.body;
    // validation
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400)}
        send('Invalid post id');
     //check if post exists
     if(!title || !content || !category){
        return res.status(400).send('All fields are required')}

        // update post
        const updatedPost = await Post.findByIdAndUpdate(postId, {
            title, content, category}, {new:true})
            if (!updatedPost) {
                return res.status(404).send('Post not found');
              }
          
              res.json({
                message: 'Post updated successfully',
                post: updatedPost
              });
          
            } catch (err) {
              console.error(err);
              res.status(500).send('Server error');
            
          }});
    
          //DELETE /api/posts/:id: Delete a blog post;
router.delete('/api/posts/:id', async(req, res) => {
    try{
        const{id} = req.params;
        //validation
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send('Invalid')
        }
    // check if post exists and delete it
    const deletePost = await Post.findByIdAndDelete(id);
    if(!deletePost) {
        return res.status(404).send('post not found')
    }else {res.json('post deleted successfully')}
    
    }catch (error) { console.error(error)
        res.status(500).send('server error')
    }}
)

module.exports = router;
