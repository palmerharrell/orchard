"use strict";

function Plant() {
	this.height = 0;
};

Plant.prototype.increaseHeight = function(growth) {
	this.height += growth;
};

Plant.prototype.decreaseHeight = function(growth) {
	this.height -= growth;
};


function Tree() {
	this.branches = 0;
};

Tree.prototype = new Plant();

Tree.prototype.grow = function(amount) {
	this.increaseHeight(amount);
};

Tree.prototype.trim = function(amount) {
	this.decreaseHeight(amount);
};



// Steps 14 through 21