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

function tree (treeObject) {
	console.log("treeObject", treeObject);

	if (treeHeight === "" || treeChar === "") {
		alert("Please enter a value in both fields")
	}

	else {
		for (var i = 0; i < treeHeight; i++) {
			
			var builtTree = " ".repeat(treeHeight - i);
			builtTree += treeChar.repeat((2*i) + 1);
			console.log(treeContents);

}

// //object with two key/values
// var object = {Heightkey: document.getElementById(height), 
// 	          Characterkey: document.getElementById(character)};





//event listener for enter key and clicking grow tree button
document.getElementById("growtree").addEventListener("click", tree);



treeHeight.addEventListener("keypress", function() {
	if (event.keyCode === 13) {
		submit.click();
	}}


treeChar.addEventListener("keypress", function() {
	if (event.keyCode === 13) {
		submit.click();
	}
































