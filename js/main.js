'use strict';

var gElCanvas;
var gCanvasContext;
var gImg;

function onInit() {
	gElCanvas = document.getElementById('canvas');
	gCanvasContext = gElCanvas.getContext('2d');
	gImg = null;
	addEventListeners();
	renderKeywords();
	renderImgs();
}

function renderKeywords() {
	var keywords = Object.keys(getKeywords());
	keywords.sort((k1,k2)=> sortByText(k1, k2));
    const strKeywordsHtmls = keywords.map(keyword=>{
        return `<a class="keyword" href="#">${keyword}</a>`
    }) 
	const strListOptionsdHtmls = keywords.map(keyword=>{
		return `<option value="${keyword}">${keyword}</option>`
	}) 
	document.querySelector('.keywords').innerHTML = strKeywordsHtmls.join('');
	document.querySelector('#keywords-list').innerHTML = strListOptionsdHtmls.join('');
}

function renderImgs() {
	var images = getImages();
	const strImgsHtmls = images.map((img) => {
		return `<img data-imgId="${img.id}" src="${img.url}" alt="meme-#${img.id}" onclick="onImgClick(${img.id}, event)"/>`;
	});

	document.querySelector('.main-grid').innerHTML = strImgsHtmls.join('');
}
