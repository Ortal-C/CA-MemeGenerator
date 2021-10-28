'use strict';
const NUM_OF_STICKERS = 23;

function addEventListeners() {
	document.querySelector('.meme-txt').addEventListener('keyup', dynamicText);
}

function canvasClicked(ev) {
	console.log(ev);
}

function onImgClick(id) {
	showOnlyEditor();
	hideElement('continue-edit');
	var imgUrl = getImgById(id).url;
	if (!gImg || gImg.src !== imgUrl) {
		createMeme(id);
		initCanvas(imgUrl);
	}
	renderMeme();
	renderStickers();
	console.log(`Meme template #${id} is ready to edit.`);
}

function initCanvas(imgUrl) {
	gImg = new Image();
	gImg.src = imgUrl;
	if (gImg.width > 300 || gImg.height > 300){
		gImg.width *=0.6;
		gImg.height *=0.6;
	}
	gElCanvas.width = gImg.width;
	gElCanvas.height = gImg.height;
}

function renderStickers(){
	var strHtml=''
	for (let i = 1; i <= NUM_OF_STICKERS; i++) {		
		strHtml+= `<img class="sticker" src="img/stickers/${i}.png"/>`;
	}
	document.querySelector('.stickers-area').innerHTML = strHtml;
}

function dynamicText() {
	clearCanvas();
	var txt = this.value;
	setLineTxt(txt);
	drawImg();
	drawText();
	gCanvasContext.fillText(txt, gImg.width / 2, getLineSize() * 2);
	gCanvasContext.strokeText(txt, gImg.width / 2, getLineSize() * 2);
}

function drawImg() {
	gCanvasContext.drawImage(gImg, 0, 0, gImg.width, gImg.height);
	gCanvasContext.fillStyle = 'rgba(0, 0, 0, 0)';
	gCanvasContext.fillRect(0, 0, gImg.width, gImg.height);
}

function drawText(txt = '') {
	gCanvasContext.font = `${isLineTextBold()} ${getLineSize()}px ${
		document.querySelector('.font-type').value
	}`;
	gCanvasContext.fillStyle = getSelectedLine().color;
	gCanvasContext.textAlign = getLineAlign();
	gCanvasContext.lineWidth = 2;
	gCanvasContext.strokeStyle = 'black';
	if (txt) {
		gCanvasContext.fillText(txt, gElCanvas.width / 2, getLineSize() * 2);
		gCanvasContext.strokeText(txt, gElCanvas.width / 2, getLineSize() * 2);
	}
}

function clearCanvas() {
	gCanvasContext.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}
function renderMeme() {
	clearCanvas();
	drawImg();
	drawText(getLineText());
}

function onDeleteMeme() {
	if (confirm('Are you sure you want to discard changes?')) quitEditMeme();
}
function quitEditMeme() {
	gImg = null;
	document.querySelector('.meme-txt').value="";
	clearCanvas();
	deleteMeme();
	navigateGallery();
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
