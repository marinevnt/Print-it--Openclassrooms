const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const buttonLeft = document.querySelector(".arrow_left");
buttonLeft.addEventListener("click", function() {click("left")});

const buttonRight = document.querySelector(".arrow_right");
buttonRight.addEventListener("click", function() {click("right")});

const bannerImage = document.querySelector(".banner-img");

const idBannerText = document.getElementById("banner");
const bannerText = idBannerText.getElementsByTagName("p")[0]; //list in which we find <p>

const classDots = document.querySelector(".dots");

const arrayDots = [];  //array in which the dots will be incremented

//inserting "dot" classes in HTML
for (let i = 0; i <slides.length; i++) {
	const divDot = document.createElement("div");
	divDot.classList.add("dot");

	arrayDots.push(divDot); //add in the array
	classDots.appendChild(divDot) //add in the HTML
}
arrayDots[0].classList.add("dot_selected"); //add the "dot_selected" at position 0 of the array

let position = 0;

/*recovering and adding images, recovering and adding text, adding "dot_selected" on position */
function setBannerPosition(position)
{
	const imagePath = "assets/images/slideshow/" + slides[position].image;
	bannerImage.setAttribute("src", imagePath);

	const imageText = slides[position].tagLine;
	bannerText.innerHTML = imageText;

	arrayDots[position].classList.add("dot_selected"); 
}

function clickRight ()
{
	if(position <slides.length-1)
	{
		position++;
	}
	else
	{
		position = 0;
	}
}

function clickLeft ()
{
	if(position > 0)
	{
		position--;
	}
	else
	{
		position = slides.length-1;
	}
	
}

function click (direction) 
{
	arrayDots[position].classList.remove("dot_selected");
	
	if (direction === "right")
	{
		clickRight();
	}
	if (direction ==="left")
	{
		clickLeft();
	}
	setBannerPosition(position);
}


