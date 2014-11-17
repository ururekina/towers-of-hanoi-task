var NUM_TOWERS = 3;

var TOWER_WIDTH = 240;
var TOWER_HEIGHT = 280;
var TOWER_XWIDTH = 10;

var DISK_WIDTHS = [ 50, 80, 110, 140, 170, 200, 230 ] ;
var DISK_HEIGHT = 36;

$(function() {
	new Game().init();

	// init game again if startOver btn was clicked


});

function Game() {
	this.numDisks = $("#numDisks").val();
	this.towers = [];
	this.disks = [];
	this.moves = 0;
}

Game.prototype.init = function() {
	this.clean();
	this.createTowers();
	this.createDisks();
	this.initTowers();
	this.initDisks();
	this.positionDisks();
	this.updateDraggableDisks();
};

Game.prototype.clean = function() {
	// clear game and images containers and #moves span


};

Game.prototype.createTowers = function() {
	var tower;
	for (var i = 0; i < NUM_TOWERS; i++) {

		// here we are creating tower obj calling constructor and passing all the parameters
		// pay attention to the context of dropHandler, take a look at handleDrop first
		tower = // ...
		this.towers.push(tower);

		// create tower element and add it to game container

	}
	// create tower image element and add it to images container

};

Game.prototype.initTowers = function() {
	for (var i = 0; i < this.towers.length; i++) {
		this.towers[i].init();
	}
};

Game.prototype.createDisks = function() {
	for (var i = 0; i < this.numDisks; i++) {

		// here we are creating disk obj calling constructor and passing all the parameters
		// pay attention to the context of dragHandler, take a look at handleDrag first
		var disk = //...
		this.disks.push(disk);

		// create disk image element and add it to game container

	}
	for (var j = this.numDisks - 1; j >= 0; j--) {
		this.towers[0].addDisk(this.disks[j]);
		this.disks[j].setTower(this.towers[0]);
	}
};

Game.prototype.initDisks = function() {
	for (var i = 0; i < this.disks.length; i++) {
		this.disks[i].init();
	}
};

Game.prototype.positionDisks = function() {
	for (var i = 0; i < this.disks.length; i++) {
		this.disks[i].position();
	}
};

Game.prototype.updateDraggableDisks = function() {
	for (var i = 0; i < this.towers.length; i++) {
		this.towers[i].updateDraggableDisks();
	}
};

Game.prototype.handleDrag = function(event, ui) {
	// set draggableRevert for dragged element

	this.getDisk("dragged disk").setDraggableRevert(true);
};

Game.prototype.handleDrop = function(event, ui) {
	// pass to getTower and getDisk methods proper params
	var tower = this.getTower("here is tower where disk is dropped");
	var disk = this.getDisk("here should be dragged disk elem");
	if (tower.getNum() != disk.getTower().getNum()) {
		this.moves++;
		// update moves span
		if (tower.canPlaceDisk(disk)) {
			disk.setDraggableRevert(false);
			tower.moveDisk(disk);
			disk.position();
			this.updateDraggableDisks();
			this.checkSolved();
		}
	}
};

Game.prototype.checkSolved = function() {
	for (var i = 1; i < this.towers.length; i++) {
		if (this.towers[i].getDisks().length == this.disks.length) {
			alert("Solved in " + this.moves + " moves.");

			// start the game again

			break;
		}
	}
};

Game.prototype.getTower = function(elem) {
	return this.towers[getNum(elem)];
};

Game.prototype.getDisk = function(elem) {
	return this.disks[getNum(elem)];
};

function getNum(o) {
	return getLast(o.attr("id"));
}

function getLast(s) {
	return s.charAt(s.length - 1);
}
