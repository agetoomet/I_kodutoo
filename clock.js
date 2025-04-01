let h, m, s, weekDay, minuteVal, hourVal, secondVal, dateElement, day, month, year;

h = document.getElementById('hours');
m = document.getElementById('minutes');
s = document.getElementById('seconds');
weekDay = document.getElementById('day');

dateElement = document.getElementById('date');
let monthNames =[
    "jaanuar", 
    "veebruar", 
    "märts", 
    "aprill", 
    "mai", 
    "juuni", 
    "juuli", 
    "august", 
    "september", 
    "oktoober", 
    "november", 
    "detsember"];
let weekDaysNames = [
    "Pühapäev", 
    "Esmaspäev", 
    "Teisipäev", 
    "Kolmapäev", 
    "Neljapäev", 
    "Reede", 
    "Laupäev"];


function updateClock(){
    let date = new Date();
    hourVal = date.getHours();
    minuteVal = date.getMinutes();
    secondVal = date.getSeconds();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    let dayOfWeek = weekDaysNames[date.getDay()];

    if(hourVal < 10){
        hourVal = "0" + hourVal;
    }

    if(minuteVal < 10){
        minuteVal = "0" + minuteVal;
    }

    if(secondVal < 10){
        secondVal = "0" + secondVal;
    }

    h.innerHTML = hourVal + ":";
    m.innerHTML = minuteVal + ":";
    s.innerHTML = secondVal;
    weekDay.innerHTML = dayOfWeek;
    dateElement.innerHTML = day + " " + monthNames[month] + " " + year;
}

setInterval(updateClock,1000);
updateClock();

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('runaway-btn');

    function getScreenBounds() {
        return {
            left: 0,
            top: 0,
            right: window.innerWidth - button.offsetWidth,
            bottom: window.innerHeight - button.offsetHeight
        };
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    document.addEventListener('mousemove', function (e) {
        const buttonRect = button.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        const distance = getDistance(e.clientX, e.clientY, buttonX, buttonY);

        if (distance < 150) {
            moveButton();
        }
    });

    function moveButton() {
        const bounds = getScreenBounds();
        const newX = Math.random() * (bounds.right - bounds.left) + bounds.left;
        const newY = Math.random() * (bounds.bottom - bounds.top) + bounds.top;

        button.style.left = newX + 'px';
        button.style.top = newY + 'px';
    }

    function positionButtonRandomly() {
        moveButton();
    }


    positionButtonRandomly();
}); //ChatGPT prompt: i want to make a code where a clickable button 
// "runs away" when you move the cursor to click it

document.addEventListener('DOMContentLoaded', function () {
    const musicSelect = document.getElementById('music-select');
    const spotifyPlayer = document.getElementById('spotify-player');

    function changeMusic() {
        let selectedSong = musicSelect.value;
        spotifyPlayer.src = selectedSong + "?utm_source=generator";
    }

    musicSelect.addEventListener('change', changeMusic);
    changeMusic();
}); //ChatGPT prompt: kuidas lisada kellale funktsioon, 
//kus kasutaja saab muuta lehel taustamuusikat spotify kaudu

document.addEventListener("DOMContentLoaded", function () {
    const clock = document.getElementById("clock");

    clock.addEventListener("click", function () {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        clock.style.color = randomColor;
    });
}); //ChatGPT prompt: kellale klõpsates muudab kell värvi

document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.getElementById("quote");

    const quotes = [
        '"O Romeo, Romeo! wherefore art thou Romeo?"',
        '"Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow."',
        '"My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite."',
        '"These violent delights have violent ends..."',
        '"Wisely and slow; they stumble that run fast."'
    ];

    quoteElement.addEventListener("click", function () {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
}); //ChatGPT prompt: kuidas lisada romeo ja julieti tsitaat,
// mis vahetub iga kord kui kasutaja sellele vajutab

document.getElementById("falling-roses-btn").addEventListener("click", function () {
    for (let i = 0; i < 15; i++) { 
        setTimeout(createRose, i * 300); 
    }
}); //ChatGPT prompt: lisa containerist väljaspoole selle
//alla keskele nupp, millele vajutades hakkab alla sadama roosilehti

function createRose() {
    let rose = document.createElement("div");
    rose.classList.add("rose");

    let startPosX = Math.random() * window.innerWidth; 
    let duration = 4 + Math.random() * 3; 

    rose.style.left = startPosX + "px";
    rose.style.animationDuration = duration + "s";

    document.getElementById("rose-container").appendChild(rose);

    setTimeout(() => {
        rose.remove(); 
    }, duration * 1000);
}  //ChatGPT prompt: lisa containerist väljaspoole selle
//alla keskele nupp, millele vajutades hakkab alla sadama roosilehti

document.addEventListener("DOMContentLoaded", function () {
    const fallButton = document.getElementById("fall-button");
    const romeo = document.getElementById("romeo");
    const juliet = document.getElementById("juliet");

    let isFallen = false; 

    fallButton.addEventListener("click", function () {
        if (!isFallen) {
            romeo.style.transform = "rotate(90deg)";
            juliet.style.transform = "rotate(-90deg)";
        } else {
            romeo.style.transform = "rotate(0deg)"; 
            juliet.style.transform = "rotate(0deg)";
        }
        isFallen = !isFallen;
    });
}); //ChatGPT prompt: lisa veebilehe vasakusse alumisse serva pilt romeost 
//ja pilt juliast ning containerisse nupp, millele vajutades 
//kukuvad romeo ja julia pikali