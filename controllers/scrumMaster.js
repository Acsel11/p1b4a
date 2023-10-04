const express = require('express');


function create(req,res,next){
    res.send('scrum master create');
}

function list(req,res,next){
    res.send('scrum master list');
}

function index(req,res,next){
    res.send('scrum master index');
}

function replace(req,res,next){
    res.send('scrum master replace');
}
function update(req,res,next){
    res.send('scrum master update');
}

function destroy(req,res,next){
    res.send('scrum master destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};