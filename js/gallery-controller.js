'use strict';

// *************************************************************************************** //
// *********************************** IMG CONTROLLER ************************************ //
// *************************************************************************************** //

// GLOBAL VARIABLES
var gImg;

function initGallery() {
	_createGallery();
	_createKeywords();
}

function renderGallery(filterBy = null) {
	var images = getImgs();
	if (filterBy) {
		images = images.filter((img) => img.keywords.includes(filterBy));
	}
	const strImgsHtmls = images.map((img) => {
		return `<img class="meme" data-imgId="${img.id}" src="${img.url}" alt="meme-#${img.id}" title="Click for edit" onclick="onImgClick(${img.id}, event)"/>`;
	});

	document.querySelector('.main-grid').innerHTML = strImgsHtmls.join('');
}

function onImgClick(id) {
	const imgUrl = getImgById(id).url;
	hideElement('continue-edit');
	showOnlyEditor();
	if (!gImg || gImg.url !== imgUrl) {
		if (gImg) {
			console.log('Discarding last draft.');
			discardChanges();
		}
		createMeme(id);
		resetCanvas(imgUrl);
		clearInputText();
		renderCanvas();
		renderStickers();
		//console.log(`Meme template #${id} is ready to edit.`);
		return;
	}
	onContinueEdit();
}

function onSearch() {
	// console.log('in search');
	const searchKey = document.querySelector('.key-input').value;
	renderGallery(searchKey === 'All' ? '' : searchKey);
}

function setUrl(url) {
	gImg.url = url;
}


// *************************************************************************************** //
// ******************************** SAVED-MEME CONTROLLER ******************************** //
// *************************************************************************************** //

function renderUserMemes(){
	var memes = loadFromStorage(KEY);
	if (memes===[] || memes.length === 0){
		document.querySelector('.user-meme-area').innerHTML = `<h3>There are no saved memes to show</h3>`
	}
	else{
		const strMemesHtmls = memes.map((meme,idx) => {
			return `<section class="saved-meme"> 
						<img class="meme" src="${JSON.parse(meme.url)}"/>
						<button class="btn delete" onclick="onDeleteSavedMeme(${idx})" title="Delete changes"></button>
					</section>`;
		});
		document.querySelector('.user-meme-area').innerHTML = strMemesHtmls.join('');
	}				
}

function onDeleteSavedMeme(memeIdx) {
	if (confirm('Are you sure you want to delete this meme from storage?')){
		deleteMemeFromStorage(memeIdx);
		renderUserMemes();
	}
}
