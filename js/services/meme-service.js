'use strict';

//***************************************************************************************/
//*********************************** MEME SERVICES *************************************/
//***************************************************************************************/

//CONST
const KEY = 'userMemesDB';

// GLOBAL VARIABLES
var gSavedMemes = [];
var gMeme;


function createMeme(id) {
	gMeme = {
		selectedImgId: id,
		selectedLineIdx: 0,
		lines: [
			{
				txt: 'Text goes here...',
				size: 30,
				isBold: false,
				align: 'center',
				color: 'white',
			},
		],
	};
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
	return gMeme.selectedLineIdx
}

function setMemeLineIdx(idx) {
	gMeme.selectedLineIdx = idx;
}

function getMemeLines(){
	return gMeme.lines;
}

function getSelectedLine() {
	return gMeme.lines[gMeme.selectedLineIdx];
}

function getNumOfLines(){
	return gMeme.lines.length
}

function switchFocus(){
	var currLine = getMemeLineIdx();
	setMemeLineIdx((getNumOfLines()-1 === currLine) ? 0 : currLine+1);
}

function addNewLine() {
	gMeme.lines.push({
		txt: 'Text goes here...',
		size: 30,
		isBold: false,
		align: 'center',
		color: 'white',
	});
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

function getLineText() {
	return getSelectedLine().txt;
}
function setLineText(text) {
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
