
function Tower(num, width, height, xwidth, dropHandler) {
	this.num = num;
	this.width = width;
	this.height = height;
	this.xwidth = xwidth;
	this.dropHandler = dropHandler;
	this.disks = [];
}

Tower.prototype.getNum = function() {
	return this.num;
};

Tower.prototype.getDisks = function() {
	return this.disks;
};

// returns jquery obj, containing canvas selected by id
Tower.prototype.getElement = function() {

};

// returns jquery obj, containing image of specific tower selected by id
Tower.prototype.getImageElement = function() {

};

// creates and returns jquery obj, containing canvas elem
// for ex. <canvas class="tower" id="tower1" width="100" height="18" />
Tower.prototype.createElement = function() {

};

// creates and returns jquery obj containing image of a tower
// <img id="towerimg1" src="img/tower.gif" />
Tower.prototype.createImageElement = function() {

};

Tower.prototype.init = function() {
	this.draw();
	this.setDroppable();
};

Tower.prototype.draw = function() {
	this.getImageElement().load($.proxy(this.loadImage, this));
};

Tower.prototype.loadImage = function(event) {
	var elem = this.getElement();
	var ctx = elem.get(0).getContext("2d");
	var img = // assign loaded image jquery obj
	ctx.drawImage(img.get(0), (this.width - this.xwidth) / 2, 0, this.xwidth, this.height - this.xwidth);
	ctx.strokeRect((this.width - this.xwidth) / 2, 0, this.xwidth - 1, this.height - this.xwidth - 1);
};

Tower.prototype.setDroppable = function() {
	var img = this.getElement();

	// make elem droppable and attach drop handler

};

Tower.prototype.addDisk = function(disk) {
	this.disks.push(disk);
};

Tower.prototype.removeDisk = function(disk) {
	this.disks.splice(this.disks.indexOf(disk), 1);
};

Tower.prototype.canPlaceDisk = function(disk) {
	var result = true;
	if (this.disks.length > 0) {
		var topDisk = this.disks[this.disks.length - 1];
		if (topDisk.getNum() < disk.getNum()) {
			result = false;
		}
	}
	return result;
};

Tower.prototype.moveDisk = function(disk) {
	var oldTower = disk.getTower();
	oldTower.removeDisk(disk);
	this.addDisk(disk);
	disk.setTower(this);
};

Tower.prototype.updateDraggableDisks = function() {
	for (var i = 0; i < this.disks.length; i++) {
		this.disks[i].setDraggable(i == this.disks.length - 1);
	}
};

Tower.prototype.calcDiskTop = function(num, height) {
	var result = this.height - this.xwidth;
	for (var i = 0; i < this.disks.length; i++) {
		result -= height;
		if (num == this.disks[i].getNum()) {
			break;
		}
	}
	return result;
};

Tower.prototype.calcDiskLeft = function(width) {
	return this.width * this.num + (this.width - width) / 2;
};