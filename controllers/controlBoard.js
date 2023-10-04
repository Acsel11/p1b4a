const express = require('express');


function create(req,res,next){
    res.send('controlBoard create');
}

function list(req,res,next){
    res.send('controlBoard list');
}

function index(req,res,next){
    res.send('controlBoard index');
}

function replace(req,res,next){
    res.send('controlBoard replace');
}
function update(req,res,next){
    res.send('controlBoard update');
}

function destroy(req,res,next){
    res.send('controlBoard destroy');
}


module.exports ={
    list,
    index,
    create,
    replace,
    update,
    destroy
};