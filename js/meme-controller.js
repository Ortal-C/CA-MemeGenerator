'use strict';
//***************************************************************************************/
//********************************** MEME CONTROLLER ************************************/
//***************************************************************************************/

// CONST
const NUM_OF_STICKERS = 23;


//***************************************************************************************/

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
		strHtml+= `<img class="sticker" src="img/stickers/${i}.png"/>`;
	}
	document.querySelector('.stickers-area').innerHTML = strHtml;
}

function clearInputText(){
	document.querySelector('.meme-text').value="";
}


function onSwitchFocus(){
	switchFocus();
	document.querySelector('.meme-text').value= getLineText();
	console.log(`focus on line #${getMemeLineIdx()+1}`);
}

function onAddLine(){
	addNewLine();
	switchFocus();
	renderCanvas();
	console.log(`line added successfully.`);
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
