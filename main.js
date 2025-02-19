const headerText = document.querySelectorAll("header h1");

// When you hover the h1 text, it turns black
headerText.forEach((element) => {
    element.addEventListener("mouseover", function () {
    this.style.color = "black";
});

// When you move don't hover the text anymore, it returns to white
element.addEventListener("mouseout", function () {
    this.style.color = "white";
});
});