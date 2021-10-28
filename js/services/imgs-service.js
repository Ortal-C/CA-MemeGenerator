'use strict';

//***************************************************************************************/
//*********************************** IMGS SERVICES *************************************/
//***************************************************************************************/

// GLOBAL VARIABLES
var gIdx = 0;
var gImgs = [];
var gKeywords;

function createImg(id, url, keywords) {
	return {
		id,
		url,
		keywords,
	};
}

function createImgs() {
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['sarcastic', 'dont care', 'funny', 'vintage', 'give no fuck'],
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
		keywords: [
			'baby',
			'kids',
			'infant',
			'animals',
			'dogs',
			'puppy',
			'sleep',
			'bedtime',
			'relax',
		],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: [
			'baby',
			'kids',
			'infant',
			'success',
			'winner',
			'made it',
			'mission complete',
		],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['kitty', 'cat', 'sleep', 'nap', 'bedtime', 'boring', 'keyboard'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['condescending', 'tell me', 'bored', 'wonka'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['baby', 'kids', 'infant', 'scheme', 'bad', 'conspiracy'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['honest', 'what are you going to do'],
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
		keywords: ['third World', 'success', 'kids'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['political', 'Tramp', 'weird'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['happy'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['yoga', 'dogs', 'animals', 'relax'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['political', 'happy', 'laugh', 'obama'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['surprise', 'kiss', 'hug'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['happy', 'cheers', 'dicaprio', 'for you', 'toast'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['Matrix', 'Morpheus', 'what if i tell you', 'fictional'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: [
			'catchphrase',
			'Pop Culture Reference',
			'Snowclone',
			'Lord of the Rings',
			'quote',
		],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['yeah', 'opra', 'happy', 'exciting', 'success', 'get A'],
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
		keywords: [
			'toys',
			'kids',
			'cartoon',
			'funny',
			'everywhere',
			'toy story',
			'woody',
			'baz',
		],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['for your information', 'cartoon', 'kids', 'sarcastic'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: ['grammer', 'please', 'condescending', 'vintage'],
	});
	gImgs.push({
		id: ++gIdx,
		url: `img/meme-imgs/${gIdx}.jpg`,
		keywords: [
			'mayo',
			'mayonnaise',
			'cartoon',
			'kids',
			'stupid',
			'patrick star',
			'patrick',
		],
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

function createKeywords() {
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