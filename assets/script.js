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
buttonLeft.addEventListener("click", clickLeft);

const buttonRight = document.querySelector(".arrow_right");
buttonRight.addEventListener("click", clickRight);

const bannerImage = document.querySelector(".banner-img");

const idBannerText = document.getElementById("banner");
const bannerText = idBannerText.getElementsByTagName("p")[0];

const classDots = document.querySelector(".dots");

let arrayDots = [];

for (let i = 0; i < slides.length; i++) {
	const divDot = document.createElement('div');
	divDot.classList.add("dot");

	arrayDots.push(divDot); // ajouter dans le tableau
	classDots.appendChild(divDot) // ajouter dans le HTML
}
arrayDots[0].classList.add("dot_selected");

let position = 0;


function setBannerPosition(position)
{
	let imagePath = "assets/images/slideshow/" + slides[position].image;
	bannerImage.setAttribute("src", imagePath);	

	let imageText = slides[position].tagLine;
	bannerText.innerHTML = imageText;

	arrayDots[position].classList.add("dot_selected");
}

function clickRight ()
{
	arrayDots[position].classList.remove("dot_selected");
	
	if(position < slides.length-1)
	{
		position++;
	}
	else
	{
		position = 0;
	}

	setBannerPosition(position);
}

function clickLeft ()
{
	arrayDots[position].classList.remove("dot_selected");
	if(position > 0)
	{
		position--;
	}
	else
	{
		position = slides.length-1;
	}

	setBannerPosition(position);
	
}

