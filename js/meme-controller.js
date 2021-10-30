'use strict';
// *************************************************************************************** //
// **********************************  MEME CONTROLLER *********************************** //
// *************************************************************************************** //


// CONST
const NUM_OF_STICKERS = 19;

function initMeme(){
	initCanvas();
	addMouseListeners()
	addTouchListeners();
}

function onContinueEdit(){
	console.log('Continue editing img.');
	showOnlyEditor();
}

function discardChanges(){
	gImg = null;
	clearInputText();
	clearCanvas();
	deleteMeme();
}

function quitEditMeme() {
	discardChanges();
	navigateGallery();
}

function renderStickers(){
	var strHtml=''
	for (let i = 1; i <= NUM_OF_STICKERS; i++) {		
		strHtml+= `<img class="sticker" src="img/stickers/${i}.png" onclick="onAddSticker(${i})"/>`;
	}
	document.querySelector('.stickers-area').innerHTML = strHtml;
}

function clearInputText(){
	document.querySelector('.meme-text').value="";
}

// *************************************************************************************** //
// *********************************** MEME ACTIONS ************************************** //
// *************************************************************************************** //

function onSwitchFocus(){
	switchFocus();
	var focusLine = getMemeLineIdx()+1; 
	document.querySelector('.btn.switch-lines-info span').innerText = focusLine;
	document.querySelector('.meme-text').value= getLineText();
	console.log(`focus on line #${getMemeLineIdx()+1}`);
}

function onAddLine(){
	addNewLine();
	switchFocus();
	renderCanvas();
	console.log(`line added successfully.`);
}

function onAddSticker(stickerId){
	addNewSticker(stickerId);
	switchFocus();
	renderCanvas();
}

function onDeleteLine(){
	deleteSelectedLine();
	switchFocus();
	renderCanvas();
	console.log(`line deleted successfully.`);
}

function onFontSizeChange(operation) {
	var diff = (operation === 'increase' ? 1 : -1) * 2;
	setLineSize(diff);
	renderCanvas();
}

function onSetColor(color) {
	setLineColor(color);
	renderCanvas();
}

function onFontWeightChange() {
	document.querySelector('.btn.font-bold').classList.toggle('active');
	toggleBoldLine();
	renderCanvas();
}

function onCaseChange(){
	document.querySelector('.btn.text-case').classList.toggle('active');
	toggleUpperCaseLine(document.querySelector('.btn.text-case').classList.contains('active'));
	renderCanvas();
}

function onAlignChange(align) {
	document.querySelector(`.align-${getLineAlign()}`).classList.remove('active');
	document.querySelector(`.align-${align}`).classList.add('active');
	setLineAlign(align);
	renderCanvas();
}

function onFontChange() {
	renderCanvas();
}

function onDeleteMeme() {
	if (confirm('Are you sure you want to discard changes?')){
		quitEditMeme()
	}
}

function onDownloadMeme(elLink) {
	var imgContent = gElCanvas.toDataURL('image/jpeg');
	elLink.href = imgContent;
}

function onSaveMeme() {
	if (confirm('Saving meme would prevent you continue editing in future. To continue?')){
		const imgContent = JSON.stringify(gElCanvas.toDataURL('image/png'));
		saveMemeToStorage(imgContent);
		quitEditMeme();
	}
}

function onShareMeme(){
	uploadImg();
}

// *************************************************************************************** //
// ******************************** SAVED-MEME ACTIONS *********************************** //
// *************************************************************************************** //

function renderUserMemes(){
	var memes = loadFromStorage(KEY);
	if (memes.length === 0){
		document.querySelector('.user-meme-area').innerHTML = `<h3>There are no saved memes to show</h4>`
	}
	else{
		const strMemesHtmls = memes.map((meme,idx) => {
			return `<section class="saved-meme"> 
						<img class="meme" src="${JSON.parse(meme.url)}" style="max-width:350px;max-height:350px;"/>
						<button class="btn delete" onclick="onDeleteSavedMeme(${idx})" title="Delete changes"></button>
					</section>`;
		});
		document.querySelector('.user-meme-area').innerHTML = strMemesHtmls.join('');
	}
	//<a class="btn download" onclick="onDownloadSavedMeme(${idx})" download="my-meme.jpg" title="Download meme"></a>
	//<button class="btn share" title="Share meme to Facebook"></button>
				
}

function onDeleteSavedMeme(memeIdx) {
	if (confirm('Are you sure you want to delete this meme from storage?')){
		deleteMemeFromStorage(memeIdx);
		renderUserMemes();
		console.log('Meme deleted from saved-memes successfully.');
	}
}
