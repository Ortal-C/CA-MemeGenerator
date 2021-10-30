'use strict';

// *************************************************************************************** //
// *********************************** UTILS SERVICES ************************************ //
// *************************************************************************************** //

function hideElement(selector) {
	document.querySelector(`.${selector}`).classList.add('hide');
}

function showElement(selector) {
	document.querySelector(`.${selector}`).classList.remove('hide');
}

function isValueInRange(value, lowerBound, upperBound){
	return value >= lowerBound && value <= upperBound;
}

function sortByText(txt1, txt2) {
	var name1 = txt1.toLowerCase();
	var name2 = txt2.toLowerCase();
	if (name1 < name2) return -1;
	if (name1 > name2) return 1;
	return 0;
}