"use strict";

var pearDiv = document.getElementById("pearTree");
var oakDiv = document.getElementById("oakTree");
var pearInterval;
var oakInterval;
var counter = 0;

function Plant() {};

Plant.prototype.height = 0;

Plant.prototype.increaseHeight = function(growth) {
	for (var i = 0; i < growth; i++) {
		this.height += 1;
		if (this.height%10 === 0) {
			this.branches++;
		};
	};	
};

Plant.prototype.decreaseHeight = function(growth) {
	this.height -= growth;
};


function Tree() {};

Tree.prototype = new Plant();

Tree.prototype.branches = 0;

Tree.prototype.grow = function(amount) {
	this.increaseHeight(amount);
};

Tree.prototype.trim = function(amount) {
	this.decreaseHeight(amount);
	this.branches -= 1;
};

var PearTree = new Tree();

var OakTree = new Tree();


pearInterval = setInterval(function () {
  PearTree.grow(2);
  pearDiv.innerHTML += `<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches.</p>`;
}, 500);

oakInterval = setInterval(function () {
  OakTree.grow(3);
  oakDiv.innerHTML += `<p>Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches.</p>`;
	counter++;
	if (counter >= 30) {
		console.log("finished");
		clearInterval(pearInterval);
		clearInterval(oakInterval);
	};
}, 500);


// *** TO DO ***


// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method 
// for the pear tree, and a larger value to the method on the oak tree.

// The grow method does nothing but pass an argument to increaseHeight. Is that all it's supposed to do?

// Change DOM output to be more like example



