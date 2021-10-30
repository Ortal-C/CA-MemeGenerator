'use strict';

// GLOBAL VARIABLES
var gElCanvas;
var gCanvasContext;
var gCurrPos;

function initCanvas() {
	gElCanvas = document.getElementById('canvas');
	gCanvasContext = gElCanvas.getContext('2d');
	addMouseListeners();
	addTouchListeners();
}

function addMouseListeners() {
	document.querySelector('.meme-text').addEventListener('keyup', dynamicText);
	document.querySelector('#canvas').addEventListener('mousedown', onDownEvent);
	document.querySelector('#canvas').addEventListener('mousemove', onMoveEvent);
	document.querySelector('#canvas').addEventListener('mouseup', onUpEvent);
}
function addTouchListeners() {
	document.querySelector('.meme-text').addEventListener('keyup', dynamicText);
	document.querySelector('#canvas').addEventListener('touchstart', onDownEvent);
	document.querySelector('#canvas').addEventListener('touchmove', onMoveEvent);
	document.querySelector('#canvas').addEventListener('touchend', onUpEvent);
}

function onDownEvent(ev) {
	if (['mousedown','touchstart'].includes(ev.type)) {
		gCurrPos = { 
			x: ev.offsetX ||ev.targetTouches[0].clientX,
			y: ev.offsetY ||ev.targetTouches[0].clientY
		};
		if (isPressOnElement(getLineStartPos())) {
			setLineDrag(true);
			document.body.style.cursor = 'grabbing';
			console.log(`Start moving line #${getMemeLineIdx() + 1}`);
		}
	}
}

function onMoveEvent(ev) {
	if (['mousemove', 'touchmove'].includes(ev.type) && isSelectedLineDrag()) {
		gCurrPos = { 
			x: ev.offsetX ||ev.targetTouches[0].clientX,
			y: ev.offsetY ||ev.targetTouches[0].clientY
		};
		const currPos = getLineStartPos();
		const dx = gCurrPos.x - currPos.x;
		const dy = gCurrPos.y - currPos.y;
		moveSelectedLine(dx, dy);
		renderCanvas();
	}
}

function onUpEvent(ev) {
	if (['mouseup','touchend'].includes(ev.type)){
		setLineDrag(false);
		document.body.style.cursor = 'auto';
		console.log(`Stop moving line #${getMemeLineIdx() + 1}`);
	}
}

function isPressOnElement(pos) {
	var posEnd = getLineEndPosition();
	var lineSize = getLineSize();
	return isValueInRange(gCurrPos.y, pos.y - lineSize, posEnd.y);
}

function resetCanvas(imgUrl) {
	gImg = new Image();
	gImg.url = gImg.src = imgUrl;
	while (gImg.width > 300 || gImg.height > 300) {
		gImg.width *= 0.75;
		gImg.height *= 0.75;
	}
	gElCanvas.width = gImg.width;
	gElCanvas.height = gImg.height;
}

function dynamicText() {
	var txt = document.querySelector('.meme-text').value;
	setLineText(txt);
	renderCanvas();
}

function drawImg() {
	gCanvasContext.drawImage(gImg, 0, 0, gImg.width, gImg.height);
	gCanvasContext.fillStyle = 'rgba(0, 0, 0, 0)';
	gCanvasContext.fillRect(0, 0, gImg.width, gImg.height);
}

function drawLines() {
	getMemeLines().forEach((line) => {
		if (line.text) {
			const fontType = document.querySelector('.font-type').value;
			gCanvasContext.font = `${line.isBold ? 'bold' : ''} ${line.size}px ${fontType}`;
			gCanvasContext.fillStyle = line.color;
			gCanvasContext.textAlign = line.align;
			gCanvasContext.lineWidth = 2;
			gCanvasContext.strokeStyle = 'black';
			var pos = line.startPos;
			gCanvasContext.fillText(line.text, pos.x, pos.y);
			gCanvasContext.strokeText(line.text, pos.x, pos.y);
		}
		else {
			var sticker = new Image();
			sticker.src = `img/stickers/${line.stickerIdx}.png`;
			gCanvasContext.drawImage(sticker,0,0,60,60);
			gCanvasContext.fillStyle = 'rgba(0, 0, 0, 0)';
			gCanvasContext.fillRect(0, 0, sticker.widt * 0.1, sticker.height * 0.1);
		}
	});
}

function drawText(line) {
	console.log(line);
}

function clearCanvas() {
	gCanvasContext.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function renderCanvas() {
	clearCanvas();
	drawImg();
	drawLines();
}
