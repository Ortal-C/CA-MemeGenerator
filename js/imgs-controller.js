'use strict';

// *************************************************************************************** //
// *********************************** IMG CONTROLLER ************************************ //
// *************************************************************************************** //

// GLOBAL VARIABLES
var gImg;


function initImgs() {
	createImgs();
	createKeywords();
}

function renderImgs(filterBy = null) {
	var images = getImgs();
	if (filterBy) {
		images = images.filter((img) => img.keywords.includes(filterBy));
	}
	const strImgsHtmls = images.map((img) => {
		return `<img class="meme" data-imgId="${img.id}" src="${img.url}" alt="meme-#${img.id}" onclick="onImgClick(${img.id}, event)"/>`;
	});

	document.querySelector('.main-grid').innerHTML = strImgsHtmls.join('');
}

function onImgClick(id) {
	showOnlyEditor();
	hideElement('continue-edit');
	var imgUrl = getImgById(id).url;
	if (!gImg || gImg.url !== imgUrl) {
		if (gImg) {
			console.log('Discarding last draft.');
			discardChanges();
		}
		createMeme(id);
		resetCanvas(imgUrl);
		``;
		clearInputText();
		renderCanvas();
		renderStickers();
		console.log(`Meme template #${id} is ready to edit.`);
		return;
	}
	onContinueEdit();
}

function onSearch() {
	console.log('in search');
	const searchKey = document.querySelector('.key-input').value;
	renderImgs(searchKey === 'All' ? '' : searchKey);
}

function setUrl(url) {
	gImg.url = url;
}
