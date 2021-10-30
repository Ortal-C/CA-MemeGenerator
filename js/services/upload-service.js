'use strict';

function uploadImg() {
	const imgDataUrl = gElCanvas.toDataURL('image/jpeg');
	function onSuccess(uploadedImgUrl) {
		const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
		window.open(
			`https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}`
		);
	}
	doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
	const formData = new FormData();
	formData.append('img', imgDataUrl);

	fetch('//ca-upload.com/here/upload.php', {
		method: 'POST',
		body: formData,
	})
		.then((res) => res.text())
		.then((url) => {
			console.log('User has redirect to Facebook.');
			onSuccess(url);
		})
		.catch((err) => {
			console.error(err);
		});
}
