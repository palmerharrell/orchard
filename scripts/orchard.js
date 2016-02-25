"use strict";

var interval = null;
var counter = 0;
var outputDiv = document.getElementById("output");

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


interval = setInterval(function () {
  PearTree.grow(2);
  OakTree.grow(3);
  var output = `<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches<br>`;
  output += `Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches</p>`;
  outputDiv.innerHTML += output;
	counter++;
	if (counter >= 30) {
		clearInterval(interval);
		console.log("finished");
	};
}, 200);


// *** TO DO ***


// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method 
// for the pear tree, and a larger value to the method on the oak tree.

// The grow method does nothing but pass an argument to increaseHeight. Is that all it's supposed to do?




