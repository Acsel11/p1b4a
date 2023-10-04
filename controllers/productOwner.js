const express = require('express');


function create(req,res,next){
    res.send('product owner create');
}

function list(req,res,next){
    res.send('recproduct ownerord list');
}

function index(req,res,next){
    res.send('product owner index');
}

function replace(req,res,next){
    res.send('product owner replace');
}
function update(req,res,next){
    res.send('product owner update');
}

function destroy(req,res,next){
    res.send('product owner destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};