const express = require('express');


function create(req,res,next){
    res.send('userStory create');
}

function list(req,res,next){
    res.send('userStory list');
}

function index(req,res,next){
    res.send('userStory index');
}

function replace(req,res,next){
    res.send('userStory replace');
}
function update(req,res,next){
    res.send('userStory update');
}

function destroy(req,res,next){
    res.send('userStory destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};