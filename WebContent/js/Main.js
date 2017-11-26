window.onload = function() {
	var game = new Phaser.Game(800, 600, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Preload", Preload);
	game.state.add("Menu", Menu);
	game.state.add("Level", Level);
	game.state.add("GameOver", GameOver);

	game.state.start("Level");
};
