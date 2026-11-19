console.log("JS 已经跑起来了喵");

const avatar = document.querySelector(".avatar");
console.log(avatar);

avatar.addEventListener("click", () => {
    alert("你点到我了喵！");
});
const likeBtn = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");

let count = Number(localStorage.getItem("likeCount")) || 0;
likeCount.textContent = count;

if (count >= 10) {
    likeBtn.textContent = "🎉 解锁彩蛋！";
    likeBtn.classList.add("unlocked");
}

likeBtn.addEventListener("click", () => {
    count = count + 1;
    likeCount.textContent = count; 
    localStorage.setItem("likeCount", count);

    if (count === 10) {
        likeBtn.textContent = "🎉 解锁彩蛋！";
        likeBtn.classList.add("unlocked");
    }
});

const card = document.querySelector(".card")
const themeBtn = document.querySelector(".theme-btn");
let themeIndex = 0;
themeBtn.addEventListener("click", () => {
    themeIndex = themeIndex + 1;
    
    card.classList.remove("theme-blue","theme-pink")
        if (themeIndex % 3 === 1) {
            card.classList.add("theme-pink")
        }
        if (themeIndex % 3 === 2) {
            card.classList.add("theme-blue")
        }

});

