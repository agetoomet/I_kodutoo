let h, m, s, weekDay, minuteVal, hourVal, secondVal, dateElement, day, month, year;

h = document.getElementById('hours');
m = document.getElementById('minutes');
s = document.getElementById('seconds');
weekDay = document.getElementById('day');

dateElement = document.getElementById('date');
let monthNames =["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
let weekDaysNames = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];


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
    
    // Tagastab ekraani mõõtmed, et nupp saaks liikuda tervele ekraanile
    function getScreenBounds() {
        return {
            left: 0,
            top: 0,
            right: window.innerWidth - button.offsetWidth,
            bottom: window.innerHeight - button.offsetHeight
        };
    }

    // Arvutab kahe punkti vahelise kauguse
    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    // Kui hiir läheneb nupule, see põgeneb
    document.addEventListener('mousemove', function (e) {
        const buttonRect = button.getBoundingClientRect();
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;

        // Arvutab hiire ja nupu keskkoha vahelise kauguse
        const distance = getDistance(e.clientX, e.clientY, buttonX, buttonY);

        // Kui hiir tuleb alla 150px kaugusele, nupp põgeneb
        if (distance < 150) {
            moveButton();
        }
    });

    // Liigutab nuppu juhuslikule positsioonile ekraanil
    function moveButton() {
        const bounds = getScreenBounds();
        const newX = Math.random() * (bounds.right - bounds.left) + bounds.left;
        const newY = Math.random() * (bounds.bottom - bounds.top) + bounds.top;

        button.style.left = newX + 'px';
        button.style.top = newY + 'px';
    }

    // Seadistab nupu algpositsiooni suvaliselt ekraanile
    function positionButtonRandomly() {
        moveButton();
    }

    // Seadista nupp kohe juhuslikule kohale
    positionButtonRandomly();
});

document.addEventListener('DOMContentLoaded', function () {
    const musicSelect = document.getElementById('music-select');
    const spotifyPlayer = document.getElementById('spotify-player');

    function changeMusic() {
        let selectedSong = musicSelect.value;
        spotifyPlayer.src = selectedSong + "?utm_source=generator";
    }

    musicSelect.addEventListener('change', changeMusic);

    // Seadista vaikimisi esimene lugu
    changeMusic();
}); //ChatGPT prompt: kuidas lisada kellale funktsioon, 
    //kus kasutaja saab muuta lehel taustamuusikat spotify kaudu

document.addEventListener("DOMContentLoaded", function () {
    const clock = document.getElementById("clock");

    clock.addEventListener("click", function () {
        // Genereerib juhusliku värvi
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        clock.style.color = randomColor;
    });
}); //ChatGPT prompt: kellale klõpsates muudab kell värvi

//ideid veel:
// 1. lisa romeo ja juliet'i tsitaat, mis vahetub iga kord kui leht laeb
// 2. lisa romeo ja julieti anime kujud, nupule (mürk *kuri naer*) vajutades nad langevad ehk surevad
// 3. täistunnil juhtub midagi, nt ekraanile tuleb korraks suurelt kiri "tee *täistunniga võrdne arv* korda plaksu"