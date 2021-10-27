'use strict';

function onInit(){
    renderImgs();
}

function renderImgs(){
    var images = getImages();
    var keywords = getKeywords();
    const strImgsHtmls = images.map((img)=> {
        return `<img data-imgId="${img.id}" src="${img.url}" alt="meme-#${img.id}" onclick="onImgClick(${img.id})"/>`
    })
    document.querySelector('.main-grid').innerHTML = strImgsHtmls.join('');
}

function onImgClick(idx){
    document.querySelector('.main-grid').classList.add('hide');
    console.log(idx);
    console.log(gImgs[idx-1]); 
}