function Disk(num, width, height, dragHandler) {
	this.num = num;
	this.width = width;
	this.height = height;
	this.dragHandler = dragHandler;
	this.tower = null;
}

Disk.prototype.getNum = function() {
	return this.num;
};

Disk.prototype.getTower = function() {
	return this.tower;
};

Disk.prototype.setTower = function(tower) {
	this.tower = tower;
};

// returns jquery image obj for specific disk, selected by id
Disk.prototype.getImageElement = function() {

};

// creates and returns jquery img obj
// <img id="diskig1" src="img/disk1.gif" width="100" height="18" />
Disk.prototype.createImageElement = function() {

};

Disk.prototype.init = function() {
	this.setDraggable(true);
};

Disk.prototype.setDraggable = function(enabled) {
	var elem = this.getImageElement();

	// if enabled make elem daraggable and attach drag handler
	// else remove the draggable functionality completely if elem is draggable.


};

Disk.prototype.setDraggableRevert = function(enabled) {
	var img = this.getImageElement();

	// enable revert option for img to return it on prev position, if img don't hover a tower

};

Disk.prototype.position = function() {
	var elem = this.getImageElement();
	var top = this.tower.calcDiskTop(this.num, this.height);
	var left = this.tower.calcDiskLeft(this.width);


	// set here absolute position of elem

};