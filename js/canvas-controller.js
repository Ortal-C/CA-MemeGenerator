'use strict';

// GLOBAL VARIABLES
var gElCanvas;
var gCanvasContext;
var gMousePos;

function resetCanvas(){
	gElCanvas = document.getElementById('canvas');
	gCanvasContext = gElCanvas.getContext('2d');
    addEventListeners();
}

function addEventListeners() {
	document.querySelector('.meme-txt').addEventListener('keyup', dynamicText);
	document.querySelector('#canvas').addEventListener('mousedown', onCanvasMouseEvents);
	document.querySelector('#canvas').addEventListener('mousemove',  onCanvasMouseEvents);
	document.querySelector('#canvas').addEventListener('mouseup',  onCanvasMouseEvents);
}

function onCanvasMouseEvents(ev) {
	switch (ev.type) {
		case 'mousedown':
			gMousePos = {x: ev.offsetX, y:ev.offsetY}
            console.log(gMousePos);
            if (isPressOnElement(getLinePositions())) console.log('yeahhhhhhh');
            else console.log('booooooo');

			console.log('down');
			break;
		case 'mousemove':
			//gMousePos = {x: ev.offsetX, y:ev.offsetY}
			//console.log('move');
			// renderMeme()
			break;
		case 'mouseup':
			console.log('up');

			break;
	
		default:
			break;
	}
}

function isPressOnElement(positions){
    console.log(positions);
    return isValueInRange(gMousePos.y, positions.start.y, positions.end.y)
}



function initCanvas(imgUrl) {
	gImg = new Image();
	gImg.url = gImg.src = imgUrl;
	while (gImg.width > 300 || gImg.height > 300){
		gImg.width *= 0.75;
		gImg.height *= 0.75;
	}
	gElCanvas.width = gImg.width;
	gElCanvas.height = gImg.height;
}

function dynamicText() {
	clearCanvas();
	var txt = document.querySelector('.meme-txt').value;
	setLineText(txt);
	renderMeme();
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
	gCanvasContext.fillStyle = getLineColor();
	gCanvasContext.textAlign = getLineAlign();
	gCanvasContext.lineWidth = 2;
	gCanvasContext.strokeStyle = 'black';
    var offsetY = getLineSize() * 1.2;
    setLineStartPosistion({x:0, y:offsetY-getLineSize()})
    
	if (txt) {
		gCanvasContext.fillText(txt, gElCanvas.width / 2, offsetY);
		gCanvasContext.strokeText(txt, gElCanvas.width / 2, offsetY);
	}
}

function clearCanvas() {
	gCanvasContext.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}