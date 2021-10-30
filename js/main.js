'use strict';

// *************************************************************************************** //
// *********************************** MAIN CONTROLER ************************************ //
// *************************************************************************************** //

function onInit() {
    console.log('Initializing ...');
	initMeme();
	initImgs();
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
	const strListOptionsdHtmls = keywords.map(keyword=>{
		return `<option value="${keyword}">${keyword}</option>`
	}) 
	document.querySelector('#keywords-list').innerHTML = `<option value="All" selected>All</option>` + strListOptionsdHtmls.join('');
	// const strKeywordsHtmls = keywords.map(keyword=>{
	// 	return `<a class="keyword" href="#" title="${keyword}">${keyword}</a>`
	// }) 
	// document.querySelector('.keywords').innerHTML = strKeywordsHtmls.join('');
}

// *************************************************************************************** //
// ************************************* NAVIGATION ************************************** //
// *************************************************************************************** //

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
//
function showOnlyGallery(){
	hideElement('user-meme-area');
	hideElement('edit-meme-modal');
	showElement('search-keys');
	showElement('main-grid');
	if (gImg) showElement('continue-edit');
}

function showOnlyUserMemes(){
	hideElement('main-grid');
	hideElement('edit-meme-modal');
	hideElement('search-keys')
	showElement('user-meme-area');
	if (gImg) showElement('continue-edit');
}

function showOnlyEditor(){
	hideElement('main-grid');
	hideElement('continue-edit')
	hideElement('user-meme-area');
	hideElement('search-keys')
	showElement('edit-meme-modal');
}