'use strict';

function addEventListeners() {
	document.querySelector('.meme-txt').addEventListener('keyup', dynamicText);
}

function canvasClicked(ev) {
	console.log(ev);
}

function hideElement(selector) {
	document.querySelector(`.${selector}`).classList.add('hide');
}

function showElement(selector) {
	document.querySelector(`.${selector}`).classList.remove('hide');
}

function onImgClick(id) {
	showElement('edit-meme-modal');
	showElement('btn.go-back');
	hideElement('continue-edit');
	hideElement('main-grid');
	
	var imgUrl = getImgById(id).url;
	if (!gImg || gImg.src !== imgUrl) {
		createMeme(id);
		initCanvas(imgUrl);
	}
	renderMeme();
	console.log(`Meme template #${id} is ready to edit.`);
}

function initCanvas(imgUrl) {
	gImg = new Image();
	gImg.src = imgUrl;
	gElCanvas.width = gImg.width;
	gElCanvas.height = gImg.height;
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
	if (confirm('Are you sure you want to discard changes?')) {
		gImg = null;
		clearCanvas();
		deleteMeme();
		navigateGallery();
	}
}

function navigateGallery() {
	hideElement('edit-meme-modal');
	hideElement('btn.go-back');
	showElement('main-grid');
	if (gImg) showElement('continue-edit');
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

function onAlignChange(align) {
	document.querySelector(`.align-${getLineAlign()}`).classList.remove('active');
	document.querySelector(`.align-${align}`).classList.add('active');
	setLineAlign(align);
	renderMeme();
}

function onFontChange(value) {
	renderMeme();
}
