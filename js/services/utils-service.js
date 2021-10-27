'use strict';


// function getRandomName() {
// 	var names = [
// 		'Alien Of Life',
// 		'Stranger',
// 		'The Nowhere',
// 		'Moon Cowboys',
// 		'Four Eyes Hunters',
// 		'War Everywhere',
// 		'Peace Pirates',
// 		'Earth Legacy',
// 		'Androids 911',
// 		'Fantasy Land',
// 		'Dancing Tigers',
// 		'Beyond Happiness',
// 		'The Programmer',
// 		'Hope Followers',
// 		'J. Destiny',
// 		'Crawling',
// 		'Dawn',
// 		'Broken Wings',
// 		'Violet Hill',
// 		'Hidden By',
// 		'Pachamama',
// 		'Time Travellers',
// 		'Success',
// 		'The End Of The Sun',
// 	];
// 	return names[Math.floor(Math.random() * names.length)];
// }

// function getRandomGenere() {
// 	return gGeneres[Math.floor(Math.random() * gGeneres.length)];
// }

// function makeLorem(size = 100) {
// 	var words = [
// 		'The sky',
// 		'above',
// 		'the port',
// 		'was',
// 		'the color of',
// 		'tuned',
// 		'to',
// 		'a dead channel',
// 		'.',
// 		'All',
// 		'this happened',
// 		'more or less',
// 		'.',
// 		'I',
// 		'had',
// 		'the story',
// 		'bit by bit',
// 		'from various people',
// 		'from specific',
// 		'and',
// 		'as generally',
// 		'happens',
// 		'in such cases',
// 		'each time',
// 		'it',
// 		'was',
// 		'a different story',
// 		'.',
// 		'It',
// 		'was',
// 		'a pleasure',
// 		'to',
//         'meet',
//         'visit',
// 		'burn',
// 	];
// 	var txt = '';
// 	while (size > 0) {
// 		size--;
// 		txt += words[Math.floor(Math.random() * words.length)] + ' ';
// 	}
// 	return txt;
// }

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
