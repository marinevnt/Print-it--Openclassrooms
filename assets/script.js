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
buttonLeft.addEventListener("click", function() {click('left')});

const buttonRight = document.querySelector(".arrow_right");
buttonRight.addEventListener("click", function() {click('right')});

const bannerImage = document.querySelector(".banner-img");

const idBannerText = document.getElementById("banner");
const bannerText = idBannerText.getElementsByTagName("p")[0]; //liste dans laquelle on trouve <p>

const classDots = document.querySelector(".dots");

const arrayDots = [];  //tableau dans lequel vont s'incrémenter les dots

//insertion des classes 'dot' dans le HTML
for (let i = 0; i < slides.length; i++) {
	const divDot = document.createElement('div');
	divDot.classList.add("dot");

	arrayDots.push(divDot); // ajouter dans le tableau
	classDots.appendChild(divDot) // ajouter dans le HTML
}
arrayDots[0].classList.add("dot_selected"); //ajout de'dot_selected' à la positon 0 du tableau

let position = 0;


function setBannerPosition(position)
{
	const imagePath = "assets/images/slideshow/" + slides[position].image;
	bannerImage.setAttribute("src", imagePath);	//récupération et ajout des images

	const imageText = slides[position].tagLine;
	bannerText.innerHTML = imageText; //récupération et ajout du texte

	arrayDots[position].classList.add("dot_selected"); //ajout du 'dot_selected' sur la position
}

function clickRight ()
{
	if(position < slides.length-1)
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


