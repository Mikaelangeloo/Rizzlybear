const buttonYes = document.querySelector(".button"); // Selecting the button with class "button2"
const buttonNo = document.querySelector(".button2");
const questionWindow = document.querySelector('.question_window');



buttonYes.addEventListener("click", function() {
    const audioElement = document.createElement('audio');
    audioElement.src = 'yippee-tbh.mp3';
    audioElement.autoplay = true;
    audioElement.loop = true;

    var gif = document.getElementById('gifImage');
    gif.style.display = 'block';
    startGif.style.display = 'none';

    buttonYes.style.display = 'none';
    buttonNo.style.display = 'none';
    
    questionWindow.innerHTML = '';

    const newText = document.createElement('p');
    newText.textContent = "YIPPEEEEEEEE!";
    newText.style.color = "#27baca";
    newText.style.fontSize = "50px";
    newText.style.textAlign = "center";

    questionWindow.appendChild(newText);
});

const talkTrash = [
    "Why youuuuu try to click no :(",
    "Staaaaaaap",
    "WHY ARE YOU TRYING TO SAY NO SMJ",
    "MAAAAAAAAAAN",
    "WEEEEEEH",
    "You will pay for dis!",
    "She nadziralaaaaaaaaaaaa!",
    "Haaaaa metqiiiiiii!",
    "Tavs mogacham icodeeeee",
    "DAMNNN YOUUUUUU!!",
];

buttonNo.addEventListener("mouseover", function () {
    const top = getRandomNum(window.innerHeight - this.offsetHeight);
    const left = getRandomNum(window.innerWidth - this.offsetWidth);

    console.log("go to top:", top);
    console.log("go to left:", left);

    moveElement(this, "left", left);
    moveElement(this, "top", top);

    const quote = getRandomQuote();
    if (quote) buttonNo.innerHTML = quote;
});

buttonNo.addEventListener("click", function () {
    const top = getRandomNum(window.innerHeight - this.offsetHeight);
    const left = getRandomNum(window.innerWidth - this.offsetWidth);

    console.log("go to top:", top);
    console.log("go to left:", left);

    moveElement(this, "left", left);
    moveElement(this, "top", top);

    const quote = getRandomQuote();
    if (quote) buttonNo.innerHTML = quote;
});

const moveElement = (element, animeType, pixels) => {
    anime({
        targets: element,
        [animeType]: `${pixels}px`, // Fixing template literals
        easing: "easeOutElastic(1, .5)",
    }).play();
};

const getRandomNum = (num) => {
    return Math.floor(Math.random() * num);
};

const getRandomQuote = () => {
    const index = getRandomNum(talkTrash.length);
    return talkTrash[index];
};