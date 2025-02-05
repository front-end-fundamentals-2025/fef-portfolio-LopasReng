/* Event listeners: click & mouseover */

const headingElement = document.getElementById("main-heading");
const paragraphElement = document.getElementById("paragraph");

headingElement.addEventListener("click", changeColor);

function changeColor() {
	headingElement.style.color = "blue";
}

paragraphElement.addEventListener("mouseover", function () {
	this.style.backgroundColor = "lightgrey";
});

paragraphElement.addEventListener("mouseout", function () {
	this.style.backgroundColor = "white";
});
