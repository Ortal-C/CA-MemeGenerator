'use strict';

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
	for (let i = 1; i <= 18; i++) {
		gImgs.push({ id: i, url: `img/meme-imgs/${i}.jpg`, keywords: ['happy'] });
	}
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

function getMeme() {
	return gMeme;
}

function createMeme(id) {
	return {
		selectedImgId: id,
		selectedLineIdx: 0,
		lines: [
			{
				txt: 'Text goes here...',
				size: 20,
				align: 'left',
				color: 'red',
			},
		],
	};
}
