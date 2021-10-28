'use strict';

var gElCanvas;
var gCanvasContext;
var gImg;

function onInit() {
    console.log('Initializing ...');
	gElCanvas = document.getElementById('canvas');
	gCanvasContext = gElCanvas.getContext('2d');
	gImg = null;
	addEventListeners();
	renderKeywords();
	renderImgs();
    console.log('App is ready to use.');
}


function toggleMenu() {
	document.body.classList.toggle('menu-open');
	document.body.classList.contains('menu-open')
	? document.querySelector('.btn-menu').innerText = 'X'
	: document.querySelector('.btn-menu').innerText = '☰';
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
        // return`<div class="meme" data-imgId="${img.id}" alt="meme-#${img.id}" onclick="onImgClick(${img.id}, event)"/>`;
	
		return `<img class="meme" data-imgId="${img.id}" src="${img.url}" alt="meme-#${img.id}" onclick="onImgClick(${img.id}, event)"/>`;
	});

	document.querySelector('.main-grid').innerHTML = strImgsHtmls.join('');
}

function renderUserMemes(){
	var memes = loadFromStorage(KEY);
	const strMemesHtmls = memes.map((meme) => {
		return `<img class="meme" src="${JSON.parse(meme.url)}"/>`;
	});

	document.querySelector('.user-meme-area').innerHTML = strMemesHtmls.join('');
}

function navigateGallery() {
	showOnlyGallery();
}

function navigateUserMemes(){
	showOnlyUserMemes();
	renderUserMemes();
}

function navigateAbout(){
	console.log('in about');
}

function showOnlyGallery(){
	hideElement('user-meme-area');
	hideElement('edit-meme-modal');
	showElement('main-grid');
	if (gImg) showElement('continue-edit');
}
function showOnlyUserMemes(){
	hideElement('main-grid');
	hideElement('edit-meme-modal');
	showElement('user-meme-area');
	if (gImg) showElement('continue-edit');
}
function showOnlyEditor(){
	hideElement('main-grid');
	hideElement('continue-edit')
	hideElement('user-meme-area');
	showElement('edit-meme-modal');
}