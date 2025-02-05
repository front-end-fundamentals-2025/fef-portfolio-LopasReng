/* Adding an element */

/* const ulElement = document.getElementById("list");

const liElement = document.createElement("li");
liElement.innerText = "List item";
ulElement.appendChild(liElement); */

/* Adding several elements */

const ulElement = document.getElementById("list");

/* for (let i = 0; i < 3; i++) {
	let liElement = document.createElement("li");
	liElement.innerText = "List item";
	ulElement.appendChild(liElement);
} */

/* Removing several elements */

let liElements = document.getElementsByClassName("list-item");

while (liElements.length > 0) {
	liElements[0].remove();
}
