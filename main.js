const generateBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const image = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .author");

const updateDetail = (url, title, author) => {
  image.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `created by ${author}`;
};

// fetch api
const memeData = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      updateDetail(data.url, data.title, data.author);
    });
};

generateBtn.addEventListener("click", memeData);
memeData();

// Simulate loading time
setTimeout(() => {
  // Remove the loader and display the content
  document.querySelector(".loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 3000); // Change 3000 to the actual loading time in milliseconds
