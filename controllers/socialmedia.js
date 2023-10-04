const express = require('express');


function create(req,res,next){
    res.send('socialmedia create');
}

function list(req,res,next){
    res.send('socialmedia list');
}

function index(req,res,next){
    res.send('socialmedia index');
}

function replace(req,res,next){
    res.send('socialmedia replace');
}
function update(req,res,next){
    res.send('socialmedia update');
}

function destroy(req,res,next){
    res.send('socialmedia destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};