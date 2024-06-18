document.addEventListener('DOMContentLoaded', function () {
	var imageContainer = document.getElementById('image-container');
	var totalImages = 14; // Update this with the total number of images you have
	var imageFolder = './maskshop/landscape/'; // Update this with the path to your images folder
	var imageExtension = 'jpeg'; // Update this with the correct image extension if necessary

	for (let i = 1; i <= totalImages; i++) {
		const img = document.createElement('img');
		img.src = `${imageFolder}image${i}.${imageExtension}`;
		img.alt = `Image ${i}`;
		imageContainer.appendChild(img);
	}

	var imageContainer = document.getElementById('image-container2');
	var totalImages = 34; // Update this with the total number of images you have
	var imageFolder = './maskshop/portrait/'; // Update this with the path to your images folder
	var imageExtension = 'jpeg'; // Update this with the correct image extension if necessary

	for (let i = 1; i <= totalImages; i++) {
		const img = document.createElement('img');
		img.src = `${imageFolder}image${i}.${imageExtension}`;
		img.alt = `Image ${i}`;
		imageContainer.appendChild(img);
	}

	var imageContainer = document.getElementById('image-container3');
	var totalImages = 25; // Update this with the total number of images you have
	var imageFolder = './maskshop/'; // Update this with the path to your images folder
	var imageExtension = 'jpeg'; // Update this with the correct image extension if necessary

	for (let i = 1; i <= totalImages; i++) {
		const img = document.createElement('img');
		img.src = `${imageFolder}image${i}.${imageExtension}`;
		img.alt = `Image ${i}`;
		imageContainer.appendChild(img);
	}
});
