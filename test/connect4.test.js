let { 
	winnerVertical, 
	winnerHorizontal, 
    winnerDiagonalUp,
} = require('../src/connect4');

var assert = require('assert');

/*
   There's no need to modify the following tests! winnerVertical and winnerDiagonalUp tests all pass, and winnerHorizontal will once the code is written.
   
   Add the additional tests you need to create below.
*/

describe("Test winnerVertical", function () {
	it("Not winner; empty board", function () {
		assert.strictEqual(false, winnerVertical([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 1 win on Column 1", function() {
		assert.strictEqual(true, winnerVertical([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[    1, null, null, null, null, null, null ],
			[    1, null, null, null, null, null, null ],
			[    1, null, null, null, null, null, null ],
			[    1, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 2 win on Column 1", function() {
		assert.strictEqual(true, winnerVertical([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[    2, null, null, null, null, null, null ],
			[    2, null, null, null, null, null, null ],
			[    2, null, null, null, null, null, null ],
			[    2, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 2 win on top of Column 7", function() {
		assert.strictEqual(true, winnerVertical([
			[ null, null, null, null, null, null, 2 ],
			[ null, null, null, null, null, null, 2 ],
			[ null, null, null, null, null, null, 2 ],
			[ null, null, null, null, null, null, 2 ],
			[ null, null, null, null, null, null, 1 ],
			[ null, null, null, null, null, null, 1 ]
		]))
	});

	it("Winner; Player 1 win on middle of Column 3", function() {
		assert.strictEqual(true, winnerVertical([
			[ null, null, null, null, null, null, 2 ],
			[ null, null,    1, null, null, null, 2 ],
			[ null, null,    1, null, null, null, 2 ],
			[ null, null,    1, null, null, null, 2 ],
			[ null, null,    1, null, null, null, 1 ],
			[ null, null, null, null, null, null, 1 ]
		]))
	});

	it("Not Winner; Random board with no winner yet", function() {
		assert.strictEqual(false, winnerVertical([
			[ null, null, null, null, null, null, null ],
			[ null, null,    2, null, null, null, null ],
			[    1, null,    2, null,    2, null, null ],
			[    1, null,    2, null,    1, null, null ],
			[    2,    2,    1,    1,    2, null,    2 ],
			[    2,    1,    2,    1,    1,    2,    1 ]
		]))
	});
});

describe("Test winnerDiagonalUp", function () {
	it("Not winner; empty board", function () {
		assert.strictEqual(false, winnerDiagonalUp([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 1 win from bottom left corner", function() {
		assert.strictEqual(true, winnerDiagonalUp([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null,    1, null, null, null ],
			[ null, null,    1, null, null, null, null ],
			[ null,    1, null, null, null, null, null ],
			[    1, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 2 win from bottom left corner", function() {
		assert.strictEqual(true, winnerDiagonalUp([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null,    2, null, null, null ],
			[ null, null,    2, null, null, null, null ],
			[ null,    2, null, null, null, null, null ],
			[    2, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 2 win in bottom right", function() {
		assert.strictEqual(true, winnerDiagonalUp([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null,    2 ],
			[ null, null, null, null, null,    2, null ],
			[ null, null, null, null,    2, null, null ],
			[ null, null, null,    2, null, null, null ]
		]))
	});

	it("Winner; Player 1 win on top left", function() {
		assert.strictEqual(true, winnerDiagonalUp([
			[ null, null, null,    1, null, null,    2 ],
			[ null, null,    1, null, null, null, null ],
			[ null,    1, null, null, null, null,    2 ],
			[    1, null, null, null, null, null,    2 ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null,    1 ]
		]))
	});

	it("Winner; Player 2 win on top right", function() {
		assert.strictEqual(true, winnerDiagonalUp([
			[ null, null, null, null, null, null,    2 ],
			[ null, null, null, null, null,    2, null ],
			[ null, null, null, null,    2, null,    2 ],
			[ null, null, null,    2, null, null,    2 ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null,    1 ]
		]))
	});

	it("Not Winner; Random board with no winner yet", function() {
		assert.strictEqual(false, winnerDiagonalUp([
			[ null, null, null, null, null, null, null ],
			[ null, null,    2, null, null, null, null ],
			[    1, null,    2, null,    2, null, null ],
			[    1, null,    2, null,    1, null, null ],
			[    2,    2,    1,    1,    2, null,    2 ],
			[    2,    1,    2,    1,    1,    2,    1 ]
		]))
	});
});

describe("Test winnerHorizontal", function () {
	it("Not winner; empty board", function () {
		assert.strictEqual(false, winnerHorizontal([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 1 win on bottom row", function() {
		assert.strictEqual(true, winnerHorizontal([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[    1,    1,    1,    1, null, null, null ]
		]))
	});

	it("Winner; Player 2 win on bottom row", function() {
		assert.strictEqual(true, winnerHorizontal([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[    2,    2,    2,    2, null, null, null ]
		]))
	});

	it("Winner; Player 2 win in middle of row 3", function() {
		assert.strictEqual(true, winnerHorizontal([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null,    2,    2,    2,    2, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ]
		]))
	});

	it("Winner; Player 1 win on middle of top row", function() {
		assert.strictEqual(true, winnerHorizontal([
			[ null, null,    1,    1,    1,    1,    2 ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null,    2 ],
			[ null, null, null, null, null, null,    2 ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null,    1 ]
		]) )
	});

	it("Not Winner; Random board with no winner yet", function() {
		assert.strictEqual(false, winnerHorizontal([
			[ null, null, null, null, null, null, null ],
			[ null, null,    2, null, null, null, null ],
			[    1, null,    2, null,    2, null, null ],
			[    1, null,    2, null,    1, null, null ],
			[    2,    2,    1,    1,    2, null,    2 ],
			[    2,    1,    2,    1,    1,    2,    1 ]
		]))
	});
});
