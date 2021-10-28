'use strict';

//***************************************************************************************/
//*********************************** IMG CONTROLLER ************************************/
//***************************************************************************************/

// GLOBAL VARIABLES
var gImg;

//***************************************************************************************/

function initImgs() {
	createImgs();
	createKeywords();
}

function onImgClick(id) {
	showOnlyEditor();
	hideElement('continue-edit');
	var imgUrl = getImgById(id).url;
	if (!gImg || gImg.url !== imgUrl) {
		if (gImg){
            console.log('Discarding last draft.');
            discardChanges()
        } 
		createMeme(id);
		initCanvas(imgUrl);
		clearText();
		renderMeme();
		renderStickers();
		console.log(`Meme template #${id} is ready to edit.`);
		return;
	}
	onContinueEdit();
}

function onSearch() {
	const searchKey = document.querySelector('.key-input').value;
}

function setUrl(url){
    gImg.url = url;
}