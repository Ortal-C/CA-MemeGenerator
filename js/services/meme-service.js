'use strict';

const NUM_OF_IMGS = 30;

var gKeywords = {
	happy: 1,
	sad: 1,
	laugh: 1,
	sleep: 1,
	sarcastic: 1,
	funny: 1,
	animals: 1,
	akward: 1,
	love: 1,
	drinks: 1,
	kids: 1,
	cute: 1,
};

var gImgs = [];
var gMeme;

_createImgs();

function _createImgs() {
	for (let i = 1; i <= NUM_OF_IMGS; i++) {
		gImgs.push({ id: i, url: `img/meme-imgs/${i}.jpg`, keywords: ['happy'] });
	}
}

function createImg(id, url, keywords) {
	return {
		id,
		url,
		keywords,
	};
}
function getKeywords() {
	return gKeywords;
}

function getImages() {
	return gImgs;
}

function getImgById(id) {
	return gImgs[id - 1];
}

function createMeme(id) {
	gMeme = {
		selectedImgId: id,
		selectedLineIdx: 0,
		lines: [
			{
				txt: 'Text goes here...',
				size: 20,
				isBold: false,
				align: 'left',
				color: 'white',
			},
		],
	};
	return gMeme;
}

function deleteMeme(){
	gMeme=null;
}

function getMeme() {
	return gMeme;
}

function getSelectedLine() {
	return gMeme.lines[gMeme.selectedLineIdx];
}

function setMemeLineIdx(idx) {
	gMeme.selectedLineIdx = idx;
}

function getLineText() {
	return getSelectedLine().txt;
}
function setLineTxt(text) {
	getSelectedLine().txt = text;
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

function isLineTextBold(){
	return getSelectedLine().isBold ? 'bold' : '';
}

function toggleBoldLine(){
	getSelectedLine().isBold = !getSelectedLine().isBold;
}
