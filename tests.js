describe("Test winnerVertical", function () {
	it("not winner; empty board", function () {
		console.assert(winnerVertical([
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ],
			[ null, null, null, null, null, null, null ]
		]) === false)
	});
});

/*
const testWinnerVertical = function () {
    console.group("Testing winnerVertical:")
    console.assert((winnerVertical([
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ]
    ]) === false), "Empty board")
    console.assert((winnerVertical([
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ],
        [    1, null, null, null, null, null, null ],
        [    1, null, null, null, null, null, null ],
        [    1, null, null, null, null, null, null ],
        [    1, null, null, null, null, null, null ]
    ]) === true), "Player 1 win on Column 1")
    console.assert((winnerVertical([
        [ null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null ],
        [    2, null, null, null, null, null, null ],
        [    2, null, null, null, null, null, null ],
        [    2, null, null, null, null, null, null ],
        [    2, null, null, null, null, null, null ]
    ]) === true), "Player 2 win on Column 1")
    console.assert((winnerVertical([
        [ null, null, null, null, null, null, 2 ],
        [ null, null, null, null, null, null, 2 ],
        [ null, null, null, null, null, null, 2 ],
        [ null, null, null, null, null, null, 2 ],
        [ null, null, null, null, null, null, 1 ],
        [ null, null, null, null, null, null, 1 ]
    ]) === true), "Player 2 win on top of Column 7")
    console.assert((winnerVertical([
        [ null, null, null, null, null, null, 2 ],
        [ null, null,    1, null, null, null, 2 ],
        [ null, null,    1, null, null, null, 2 ],
        [ null, null,    1, null, null, null, 2 ],
        [ null, null,    1, null, null, null, 1 ],
        [ null, null, null, null, null, null, 1 ]
    ]) === true), "Player 1 win on middle of Column 3")
    console.assert((winnerVertical([
        [ null, null, null, null, null, null, null ],
        [ null, null,    2, null, null, null, null ],
        [    1, null,    2, null,    2, null, null ],
        [    1, null,    2, null,    1, null, null ],
        [    2,    2,    1,    1,    2, null,    2 ],
        [    2,    1,    2,    1,    1,    2,    1 ]
    ]) === false), "Random board with no winner yet")
    console.groupEnd("Testing winnerVertical:")
}
testWinnerVertical()
*/