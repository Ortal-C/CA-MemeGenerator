'use strict';

function addEventListeners() {
	document.querySelector('.meme-txt').addEventListener('keyup', dynamicText);
}

function canvasClicked(ev) {
	console.log(ev);
}

function onImgClick(id, ev) {
	document.querySelector('.edit-meme-modal').classList.remove('hide');
	document.querySelector('.main-grid').classList.add('hide');
	if (!gImg){
		createMeme(id);
		initCanvas(getImgById(id).url);
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
	document.querySelector('.meme-txt').addEventListener('keyup', function () {
		clearCanvas();
		var txt = this.value;
		setLineTxt(txt);
		drawImg();
		drawText();
		gCanvasContext.fillText(txt, gImg.width/2, getLineSize()*2);
		gCanvasContext.strokeText(txt, gImg.width/2, getLineSize()*2);
	});
}

function drawImg() {
	gCanvasContext.drawImage(gImg, 0, 0, gImg.width, gImg.height);
	gCanvasContext.fillStyle = 'rgba(0, 0, 0, 0)';
	gCanvasContext.fillRect(0, 0, gImg.width, gImg.height);
}

function drawText(txt = '') {
	gCanvasContext.font = `${isLineTextBold()} ${getLineSize()}px ${document.querySelector('.font-type').value}`;
	gCanvasContext.fillStyle = getSelectedLine().color;
	gCanvasContext.textAlign = getLineAlign();
	gCanvasContext.lineWidth = 2;
	gCanvasContext.strokeStyle = 'black';
	if (txt) {
		gCanvasContext.fillText(txt, gElCanvas.width/2, getLineSize()*2);
		gCanvasContext.strokeText(txt, gElCanvas.width/2, getLineSize()*2);
	}
}

function clearCanvas() {
	gCanvasContext.clearRect(0, 0, gElCanvas.width, gElCanvas.height);

}
function renderMeme(){
	clearCanvas();
	drawImg();
	drawText(getLineText());
}

function onDeleteMeme(){
	if (confirm('Are you sure you want to discard changes?')){
		clearCanvas();
		deleteMeme();
		gImg=null;
		document.querySelector('.edit-meme-modal').classList.add('hide');
		document.querySelector('.main-grid').classList.remove('hide');

	}

}

function onFontSizeChange(operation) {
	var diff = (operation === 'increase' ? 1 : -1)*2;
	setLineSize(diff);
	renderMeme();
}

function onSetColor(color) {
	setLineColor(color);
	renderMeme();
}

function onFontWeightChange(){
	document.querySelector('.btn.font-bold').classList.toggle('active');
	toggleBoldLine();
	renderMeme();
}

function onAlignChange(align){
	document.querySelector(`.align-${getLineAlign()}`).classList.remove('active');
	document.querySelector(`.align-${align}`).classList.add('active');
	setLineAlign(align);
	renderMeme();
}

function onFontChange(value){
	renderMeme();
}