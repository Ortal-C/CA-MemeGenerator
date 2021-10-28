'use strict';
//***************************************************************************************/
//********************************** MEME CONTROLLER ************************************/
//***************************************************************************************/

// CONST
const NUM_OF_STICKERS = 23;


//***************************************************************************************/

function initMeme(){
	resetCanvas();
	addEventListeners()
}

function onContinueEdit(){
	console.log('Continue editing img.');
	showOnlyEditor();
}

function discardChanges(){
	gImg = null;
	clearText();
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
		strHtml+= `<img class="sticker" src="img/stickers/${i}.png"/>`;
	}
	document.querySelector('.stickers-area').innerHTML = strHtml;
}

function clearText(){
	document.querySelector('.meme-txt').value="";
}

function renderMeme() {
	clearCanvas();
	drawImg();
	drawText(getLineText());
}

function onSwitchFocus(){
	switchFocus();
}

function onAddLine(){
	addNewLine();
}

function onFontSizeChange(operation) {
	var diff = (operation === 'increase' ? 1 : -1) * 2;
	setLineSize(diff);
	renderMeme();
}

function onSetColor(color) {
	setLineColor(color);
	renderMeme();
}

function onFontWeightChange() {
	document.querySelector('.btn.font-bold').classList.toggle('active');
	toggleBoldLine();
	renderMeme();
}

function onCaseChange(){
	document.querySelector('.btn.text-case').classList.toggle('active');
	toggleUpperCaseLine(document.querySelector('.btn.text-case').classList.contains('active'));
	renderMeme();
}

function onAlignChange(align) {
	document.querySelector(`.align-${getLineAlign()}`).classList.remove('active');
	document.querySelector(`.align-${align}`).classList.add('active');
	setLineAlign(align);
	renderMeme();
}

function onFontChange(value) {
	renderMeme();
}


function onDeleteMeme() {
	if (confirm('Are you sure you want to discard changes?')) quitEditMeme();
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
