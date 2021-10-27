'use strict';

function addEventListeners() {
	document.querySelector('.meme-txt').addEventListener('keyup', dynamicText);
}

function canvasClicked(ev) {
	console.log(ev);
}


function onImgClick(id, ev) {
	document.querySelector('.main-grid').classList.add('hide');
	var gCurrMeme = createMeme(id);
	if (!gImg) initCanvas(getImgById(id).url);
	drawImg();
	drawText(document.querySelector('.meme-txt').placeholder);
}

function initCanvas(imgUrl) {
	gImg = new Image();
	gImg.src = imgUrl;
	gElCanvas.width = gImg.width;
	gElCanvas.height = gImg.height;
}

function dynamicText() {
	document.querySelector('.meme-txt').addEventListener('keyup', function () {
		gCanvasContext.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
		var txt = this.value;
		setLineTxt(txt);
		drawImg();
		drawText();
		gCanvasContext.fillText(txt, 50, 50);
		gCanvasContext.strokeText(txt, 50, 50);
	});
}

function drawImg() {
	gCanvasContext.drawImage(gImg, 0, 0, gImg.width, gImg.height);
	gCanvasContext.fillStyle = 'rgba(0, 0, 0, 0)';
	gCanvasContext.fillRect(0, 0, gImg.width, gImg.height);
}

function drawText(txt = '') {
	gCanvasContext.font = `bold ${getLineSize()}px Impact`;
	gCanvasContext.fillStyle = getSelectedLine().color;
	gCanvasContext.lineWidth = 2;
	gCanvasContext.strokeStyle = 'black';
	if (txt) {
		gCanvasContext.fillText(txt, 50, 50);
		gCanvasContext.strokeText(txt, 50, 50);
	}
}


function onSetColor(color){
	setLineColor(color);
	drawText(getLineText());
}