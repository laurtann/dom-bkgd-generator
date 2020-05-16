var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
// Color inputs match bkgd generated on first page load
color1.onload = setGradient();
color2.onload = setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Create randomize button
var button = document.createElement("button");
button.appendChild(document.createTextNode("randomize!"));
document.body.appendChild(button);

// Function to set color1 and color2 to random values (found on CSS Tricks)
function randomizeColors() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	// Set background to match colors generated
	setGradient()
 };

 // Trigger randomizer!
button.onclick = randomizeColors;
