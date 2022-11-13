const images = [ "0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); // append는 가장 뒤에 <-> prepend는 가장 앞에 오게 하는거