'use strict';

//***************************************************************************************/
//*********************************** MEME SERVICES *************************************/
//***************************************************************************************/

//CONST
const KEY = 'userMemesDB';
const DEFAULT_TEXT = 'Text goes here...';
const DEFAULT_SIZE = 30; //in pixels..
const DEFAULT_ALIGN = 'center';
const DEFAULT_COLOR = 'white';

// GLOBAL VARIABLES
var gSavedMemes = [];
var gMeme;

function createMeme(id) {
	gMeme = {
		selectedImgId: id,
		selectedLineIdx: 0,
		lines: [],
	};
	addNewLine();
	return gMeme;
}

function deleteMeme() {
	gMeme = null;
}

function getMeme() {
	return gMeme;
}

function getMemeImgId() {
	return gMeme.selectedImgId;
}

function getMemeLineIdx() {
	return gMeme.selectedLineIdx;
}

function setMemeLineIdx(idx) {
	gMeme.selectedLineIdx = idx;
}

function getMemeLines() {
	return gMeme.lines;
}

function getSelectedLine() {
	return getLineByIdx(gMeme.selectedLineIdx);
}

function getNumOfLines() {
	return gMeme.lines.length;
}

function switchFocus() {
	var idx = gMeme.selectedLineIdx;
	setMemeLineIdx(getNumOfLines() - 1 === idx ? 0 : idx + 1);
}

function addNewLine(txt) {
	var offsetX = gElCanvas.width / 2
	var offsetY;
	switch (getNumOfLines()) {
		case 0:
			offsetY = DEFAULT_SIZE;
			break;
		case 1:
			offsetY = gElCanvas.height - DEFAULT_SIZE;
			break;
		default:
			offsetY = gElCanvas.height / 2;
			break;
	}
	var newLine = {
		text: (txt)? txt : DEFAULT_TEXT,
		size: DEFAULT_SIZE,
		align: DEFAULT_ALIGN,
		color: DEFAULT_COLOR,
		isBold: false,
		isDrag: false,
		startPos: { x: offsetX, y: offsetY},
	};
	gMeme.lines.push(newLine);
	return newLine;
}
function addNewSticker(stickerIdx) {
	var offsetX = gElCanvas.width / 2
	var offsetY = gElCanvas.height / 2;
	var newLine = {
		text: null,
		stickerIdx,
		size: DEFAULT_SIZE,
		isDrag: false,
		startPos: { x: offsetX, y: offsetY},
	};
	gMeme.lines.push(newLine);
	return newLine;
}
function deleteSelectedLine() {
	gMeme.lines.splice(gMeme.selectedLineIdx, 1);
	var linesCount = getNumOfLines()-1;
	gMeme.selectedLineIdx = linesCount > 0 ? linesCount : 0;
}

function saveMemeToStorage(memeContent) {
	gSavedMemes.push({ meme: gMeme, url: memeContent });
	saveToStorage(KEY, gSavedMemes);
	console.log(`${KEY} has updated and saved to storage.`);
	gMeme = null;
}

//***************************************************************************************/
//**************************** MEME SELECTED LINE SERVICES ******************************/
//***************************************************************************************/

function getLineByIdx(idx) {
	return gMeme.lines[idx];
}

function getLineText() {
	return getSelectedLine().text;
}
function setLineText(text) {
	getSelectedLine().text = text;
}

function getLineSize() {
	return getSelectedLine().size;
}
function setLineSize(diff) {
	getSelectedLine().size += diff;
}

function getLineAlign() {
	return getSelectedLine().align;
}
function setLineAlign(align) {
	getSelectedLine().align = align;
}

function getLineColor() {
	return getSelectedLine().color;
}
function setLineColor(color) {
	getSelectedLine().color = color;
}

function isLineTextBold() {
	return getSelectedLine().isBold ? 'bold' : '';
}
function toggleBoldLine() {
	getSelectedLine().isBold = !getSelectedLine().isBold;
}

function toggleUpperCaseLine(isUpper) {
	var txt = getLineText();
	txt = isUpper ? txt.toUpperCase() : txt.toLowerCase();
	setLineText(txt);
}

function getLineStartPos() {
	return getSelectedLine().startPos;
}

function getLineEndPosition() {
	var pos = getLineStartPos();
	var lineSize = getLineSize();
	return { x: gElCanvas.width, y: pos.y + lineSize };
}

function setLinePosistion(pos) {
	getSelectedLine().pos = pos;
}

function setLineDrag(isDrag) {
	getSelectedLine().isDrag = isDrag;
}

function isSelectedLineDrag() {
	return getSelectedLine().isDrag;
}

function moveSelectedLine(dx, dy) {
	var pos = getLineStartPos();
	pos.x += dx;
	pos.y += dy;
	setLinePosistion(pos);
}
