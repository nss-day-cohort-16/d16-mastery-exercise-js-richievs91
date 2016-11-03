// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree


var treeHeight = document.getElementById("height");
var treeChar = document.getElementById("character");



// //event listener for enter key and clicking grow tree button
growTreeBtn = document.getElementById("growtree");
growTreeBtn.addEventListener("click", alert);
// console.log("growTreeBtn", growTreeBtn);

function alert (click) {
	if (click.keyCode === 13) {
		if (treeHeight.value === "" || treeChar.value === "") {
		alert("Please enter a value in both fields")
	}
	}

	else {
		var tree = {
			height: treeHeight.value,
			char: treeChar.value
		}
		grow(tree);

}};

function grow (tree) {console.log("grow", tree.height);
	for (var i = 0; i < tree.height; i++) {
			var space = " ";	
			var startTree = (i * 2) + 1;
			var buildTree = (tree.height - 1) - i;
			console.log("Fully Built Tree: " + space.repeat(buildTree) + tree.char.repeat(startTree));
			
}};
































