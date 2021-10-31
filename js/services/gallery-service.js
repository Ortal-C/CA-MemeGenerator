'use strict';

// *************************************************************************************** //
// *********************************** IMGS SERVICES ************************************* //
// *************************************************************************************** //

// GLOBAL VARIABLES
var gIdx = 0;
var gImgs = [];
var gKeywords;

function _createImg(id, url, keywords) {
	return {
		id,
		url,
		keywords,
	};
}

function _createGallery() {
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['sarcastic', 'dont care', 'funny', 'vintage', 'give no fuck', 'Sounf of music'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['political', 'Tramp', 'mad', 'ridiculous', 'sure'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['animals', 'dogs', 'puppy', 'cute', 'love', 'kiss'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['baby','kids','infant','animals','dogs','puppy','sleep','bedtime','relax', ],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['baby','kids','infant','success','winner','made it','mission complete',],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['kitty', 'cat', 'sleep', 'nap', 'bedtime', 'boring', 'keyboard'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['condescending', 'tell me', 'bored', 'wonka', 'kids', 'vintage'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['baby', 'kids', 'infant', 'scheme', 'bad', 'conspiracy'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['honest', 'what are you going to do', 'Israeli', 'Tv show', 'Chaim Hecht'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['WTF'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['Ancient Aliens', 'History channel', 'theory', 'conspiracy'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['Mr evil', 'evil', 'bad', 'sarcastic'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['third World', 'success', 'kids', 'happy', 'smile'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['political', 'Tramp', 'weird'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['happy', 'smile', 'baby'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['yoga', 'dogs', 'animals', 'relax'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['political', 'happy', 'laugh','smile', 'obama'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['surprise', 'kiss', 'hug', 'sports'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['happy', 'cheers', 'dicaprio', 'for you', 'toast'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['Matrix', 'Morpheus', 'what if i tell you', 'fictional', 'legend'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['one does not','Pop Culture Reference','Snowclone','Lord of the Rings','quote',],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['yeah', 'opra', 'happy', 'smile', 'exciting', 'success', 'get A'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['funny', 'happy', 'laugh'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['political', 'putin', 'political'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['toys','kids','cartoon','funny','everywhere','toy story','woody','baz',],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['for your information', 'cartoon', 'kids', 'sarcastic'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['grammer', 'please', 'condescending', 'vintage', 'smile', 'sarcastic'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['mayo','mayonnaise','cartoon','kids','stupid','patrick star','patrick',],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['who am i', 'cartoon', 'funny'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['sloth', 'happy', 'laugh', 'smile', 'office', 'work'],
	});
}

function _createKeywords() {
	gKeywords = {};
	gImgs.forEach((img) => {
		img.keywords.forEach((keyword) => {
			gKeywords[keyword] = !gKeywords[keyword] ? 1 : gKeywords[keyword] + 1;
		});
	});
}

function getKeywords() {
	return gKeywords;
}

function getImgs() {
	return gImgs;
}

function getImgById(id) {
	return gImgs[id - 1];
}
