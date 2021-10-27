'use strict';

var gElCanvas;
var gCanvasContext;

function onInit() {
	gElCanvas = document.getElementById('canvas');
	gCanvasContext = gElCanvas.getContext('2d');
	console.log(gCanvasContext);
	addEventListeners();
	renderImgs();
}

function addEventListeners() {
	// gElCanvas.addEventListener('', function(){
	//     alert('mouse up ')
	// })
}

function canvasClicked(ev) {
	console.log(ev);
}

function renderImgs() {
	var images = getImages();
	var keywords = getKeywords();
	const strImgsHtmls = images.map((img) => {
		return `<img data-imgId="${img.id}" src="${img.url}" alt="meme-#${img.id}" onclick="onImgClick(${img.id}, event)"/>`;
	});
	document.querySelector('.main-grid').innerHTML = strImgsHtmls.join('');
}

function onImgClick(id) {
	document.querySelector('.main-grid').classList.add('hide');
    //createMeme(id)
    console.log(createMeme(id));
	var imgUrl = getImgById(id).url;
    loadImgToCanvas(imgUrl);
}

function loadImgToCanvas(imgUrl) {
	var selectedImg = new Image();
	selectedImg.src = imgUrl;
	selectedImg.onload = function () {
		gElCanvas.width = selectedImg.width;
		gElCanvas.height = selectedImg.height;
		gCanvasContext.drawImage(selectedImg, 0, 0);
	};
}
