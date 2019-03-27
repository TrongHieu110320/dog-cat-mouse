function Cat() {
	this.stomach = [];
	console.log('Meow meow');
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse)
};

module.exports = Cat;