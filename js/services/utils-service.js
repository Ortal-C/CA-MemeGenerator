'use strict';

function hideElement(selector) {
	document.querySelector(`.${selector}`).classList.add('hide');
}

function showElement(selector) {
	document.querySelector(`.${selector}`).classList.remove('hide');
}

function sortByText(txt1, txt2) {
	var name1 = txt1.toLowerCase();
	var name2 = txt2.toLowerCase();
	if (name1 < name2) return -1;
	if (name1 > name2) return 1;
	return 0;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
