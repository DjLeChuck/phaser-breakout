// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor 1.4.3 (Phaser v2.6.2)

/**
 * GameOver.
 */
function GameOver() {

	Phaser.State.call(this);

}

/** @type Phaser.State */
var GameOver_proto = Object.create(Phaser.State.prototype);
GameOver.prototype = GameOver_proto;
GameOver.prototype.constructor = GameOver;

GameOver.prototype.init = function() {

	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;

};

GameOver.prototype.preload = function() {

	this.load.pack('atlas', 'assets/pack.json');

};

GameOver.prototype.create = function() {
	var _text = this.add.text(352, 64, 'GAME OVER', {
		"font" : "bold 60px Arial",
		"fill" : "#ff0000",
		"stroke" : "#ff8080",
		"strokeThickness" : 3
	});
	_text.anchor.setTo(0.5, 0.5);

	var _btnPlay = new btnPlay(this.game, 288, 192);
	this.add.existing(_btnPlay);

	var _btnQuit = new btnQuit(this.game, 288, 320);
	this.add.existing(_btnQuit);

};

/* --- end generated code --- */
// -- user code here --
