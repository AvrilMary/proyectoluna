const button = document.querySelector(".logo");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    // console.log(randomIndex);
    const randomImage = images[randomIndex];
    // console.log(randomImage);
    displayImage(randomImage);
}

const displayImage = function (randomImage) {
    const imageAddress = randomImage.download_url;
    img.src = imageAddress;
}

button.addEventListener("click", function () {
    getImage();
});