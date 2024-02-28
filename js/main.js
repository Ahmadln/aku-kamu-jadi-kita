// <!-- script tanggal -->

        // Example c: Customizing the date using options
const date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };
const date3 = date.toLocaleDateString('en-IN', options);
document.getElementById("formattedDate").innerHTML += "" + date3;


// <!-- darkmode -->
function toggleDarkMode() {
    let isDark = document.body.classList.toggle("darkmode");
    const myImage2 = document.getElementById("catblack");
    let star = document.getElementById("bintang");
    if (isDark) {
        myImage2.style.display = "block";
        star.style.display = "none";
    } else {
        myImage2.style.display = "none";
        star.style.display = "block";
    }
}

async function getType() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayIndex = now.getDay();
    return days[dayIndex];
}

// <!-- script gif logic -->

    var weather = document.getElementById('weather');
    function getCurrentTime() {
        return new Date().getHours();
    }
    var catgif = document.getElementById('catgif');
            
async function printgif() {
    let currentTime = getCurrentTime();
    const day = await getType();
    switch (day) {
        case 'Sunday':
            if (currentTime < 12){
                catgif.src = './Img/kucincouple.gif';
                weather.src = './Img/morning.png';
            } else if (currentTime <18 ){
                catgif.src = './Img/neko-evening.gif';
                weather.src = './Img/afternoon.png';
            } else {
                catgif.src = './Img/Sleep.gif';
            weather.src = './Img/evening.png';
            }
        case 'Monday':
            if (currentTime < 12){
                catgif.src = './Img/kucincouple.gif';
                weather.src = './Img/morning.png';
            } else if (currentTime <18 ){
                catgif.src = './Img/neko-evening.gif';
                weather.src = './Img/afternoon.png';
            } else {
                catgif.src = './Img/Sleep.gif';
            weather.src = './Img/evening.png';
            }
                break;
            case 'Tuesday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                    weather.src = './Img/morning.png';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                    weather.src = './Img/afternoon.png';
                } else {
                    catgif.src = './Img/Sleep.gif';
                weather.src = './Img/evening.png';
                }
                break;
            case 'Wednesday':
                if (currentTime < 12){
                    catgif.src = './Img/makan.gif';
                    weather.src = './Img/morning.png';
                } else if (currentTime <18 ){
                    catgif.src = './Img/makan.gif';
                    weather.src = './Img/afternoon.png';
                } else {
                    catgif.src = './Img/mobil.gif';
                weather.src = './Img/evening.png';
                }
                break;
            case 'Thursday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                    weather.src = './Img/morning.png';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                    weather.src = './Img/afternoon.png';
                } else {
                    catgif.src = './Img/Sleep.gif';
                weather.src = './Img/evening.png';
                }
                break;
            case 'Friday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                    weather.src = './Img/morning.png';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                    weather.src = './Img/afternoon.png';
                } else {
                    catgif.src = './Img/Sleep.gif';
                weather.src = './Img/evening.png';
                }
                break;
            case 'Saturday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                    weather.src = './Img/morning.png';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                    weather.src = './Img/afternoon.png';
                } else {
                    catgif.src = './Img/Sleep.gif';
                weather.src = './Img/evening.png';
                }
                break;
            default:
                message = "Hello!";
        }

}       
    printgif();

var box = document.getElementById("box_motivasi");
var box2 = document.getElementById("box_lokasi");
document.getElementById("btnmotivasi").addEventListener("click", function() {
if (box.style.display === "block") {
    box.style.display = "none";
    } else {
    box.style.display = "block";
    box2.style.display = "none";
    }
});

document.getElementById("btnls").addEventListener("click", function() {
    if (box2.style.display === "block") {
        box2.style.display = "none";
        } else {
        box2.style.display = "block";
        box.style.display = "none";
        }
    });

   function countdown() {
        // Membuat tanggal target (contohnya 29 Februari 2024 pukul 18:00)
        const targetDate = new Date('2024-03-02T14:00:00');
    
        const countdownElement = document.getElementById('countdown');
    
        // Update countdown setiap detik
        const intervalId = setInterval(updateCountdown, 1000);
    
        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;
    
            if (difference <= 0) {
                clearInterval(intervalId);
                countdownElement.textContent = 'Countdown selesai!';
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
    
                countdownElement.textContent = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
            }
        }
    
        // Memastikan countdown diupdate segera setelah halaman dimuat
        updateCountdown();
    }
    
    // Memulai countdown ketika halaman dimuat
    countdown();

