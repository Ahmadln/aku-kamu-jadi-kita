// <!-- script tanggal -->

// Example c: Customizing the date using options


const date = new Date();
const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    };
const date3 = date.toLocaleDateString('en-IN', options);
document.getElementById("formattedDate").innerHTML +=  date3;

async function getType() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayIndex = now.getDay();
    return days[dayIndex];
}


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

// <!-- script gif logic -->


    function getCurrentTime() {
        return new Date().getHours();
    }
    var catgif = document.getElementById('catgif');
            
async function printgif() {
    let currentTime = getCurrentTime();
    const day = await getType();
    switch (day) {
        case 'Monday':
            if (currentTime < 12){
                catgif.src = './Img/kucincouple.gif'
            } else if (currentTime <18 ){
                catgif.src = './Img/neko-evening.gif'
            } else {
                catgif.src = './Img/Sleep.gif'
            }
                break;
            case 'Tuesday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                } else {
                    catgif.src = './Img/Sleep.gif';
                }
                break;
            case 'Wednesday':
                if (currentTime < 12){
                    catgif.src = './Img/makan.gif';
                } else if (currentTime <18 ){
                    catgif.src = './Img/makan.gif';
                } else {
                    catgif.src = './Img/Sleep.gif';
                }
                break;
            case 'Thursday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                } else {
                    catgif.src = './Img/Sleep.gif';
                }
                break;
            case 'Friday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                } else {
                    catgif.src = './Img/Sleep.gif';
                }
                break;
            case 'Saturday':
                if (currentTime < 12){
                    catgif.src = './Img/kucincouple.gif';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                } else {
                    catgif.src = './Img/Sleep.gif';
                }
                break;
            case 'Sunday':
                if (currentTime < 12){
                    catgif.src = './Img/Sleep.gif';
                } else if (currentTime <18 ){
                    catgif.src = './Img/neko-evening.gif';
                } else {
                    catgif.src = './Img/Sleep.gif';
                }
                break;
            default:
                message = "Hello!";
        }

}             
printgif();

var box = document.getElementById("box_motivasi");
var box2 = document.getElementById("box_lokasi");
var box3 = document.getElementById("box_lagu");
var box4 = document.getElementById("box_tujuan");
document.getElementById("btnmotivasi").addEventListener("click", function() {
if (box.style.display === "block") {
    box.style.display = "none";
    } else {
    box.style.display = "block";
    box2.style.display = "none";
    box3.style.display = "none";
    box4.style.display = "none";
    }
});

document.getElementById("btnls").addEventListener("click", function() {
    if (box2.style.display === "block") {
        box2.style.display = "none";
        } else {
        box2.style.display = "block";
        box.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";

        }
    });

document.getElementById("btnlagu").addEventListener("click", function() {
    if (box3.style.display === "block") {
        box3.style.display = "none";
        } else {
        box3.style.display = "block";
        box.style.display = "none";
        box2.style.display = "none";
        box4.style.display = "none";
        }
    });

document.getElementById("btntujuan").addEventListener("click", function() {
    if (box4.style.display === "block") {
        box4.style.display = "none";
        } else {
        box4.style.display = "block";
        box.style.display = "none";
        box2.style.display = "none";
        box3.style.display = "none";
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

// Ambil semua elemen accordion
var accordionItems = document.querySelectorAll('.accordion-item');

// Loop melalui setiap elemen dan tambahkan event listener
accordionItems.forEach(function(item) {
    var btn = item.querySelector('.accordion-btn');
    var panel = item.querySelector('.panel');

    btn.addEventListener('click', function() {
    var isActive = btn.classList.contains('active');

      // Tutup semua panel
    accordionItems.forEach(function(item) {
        var panel = item.querySelector('.panel');
        var btn = item.querySelector('.accordion-btn');

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            btn.classList.remove('active');
        }
    });

    // Toggle kelas active pada tombol untuk mengubah warna latar belakang
    btn.classList.toggle('active');

    // Toggle max-height pada panel untuk menampilkan atau menyembunyikan konten
    if (!isActive) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});




// untuk music
var currentlagu = null;
var musicPlayer = {};


function lagu(laguId) {
    var lagu = document.getElementById(laguId);

}






function toggle(laguId) {
    var lagu = document.getElementById(laguId);

    if (currentlagu && currentlagu !== lagu) {
    currentlagu.style.display = 'none'; // Sembunyikan lagu yang sedang diputar sebelumnya
    currentlagu.pause(); // Jika ada lagu yang sedang diputar dan bukan lagu yang baru akan diputar, hentikan lagu tersebut
    }

    var laguDisplayStyle = window.getComputedStyle(lagu).display;
    if (laguDisplayStyle === 'none') {
    lagu.style.display = 'block';
    lagu.play();
    currentlagu = lagu;
    
    // Tambahkan event listener untuk deteksi lagu selesai diputar
    lagu.addEventListener('ended', function() {
      // Panggil fungsi untuk memainkan lagu berikutnya secara otomatis
        playNextLagu();
    });
    } else {
        lagu.style.display = 'none';
        lagu.pause();
        currentlagu = null;
    }
    
}

// Fungsi untuk memainkan lagu berikutnya
function playNextLagu() {
    // Temukan indeks lagu berikutnya dalam urutan
    var nextIndex = -1;
    if (currentlagu) {
        var laguList = document.getElementsByClassName('lagu');
        for (var i = 0; i < laguList.length; i++) {
        if (laguList[i].id === currentlagu.id) {
            nextIndex = i + 1;
            break;
            }
        }
    } else {
    nextIndex = 0; // Jika tidak ada lagu yang sedang diputar, mulai dengan lagu pertama
    }  
// Mainkan lagu berikutnya jika ada
    if (nextIndex !== -1 && nextIndex < laguList.length) {
        var nextLagu = laguList[nextIndex];
        toggle(nextLagu.id); 
      // Sembunyikan lagu sebelumnya saat memainkan lagu baru
    if (currentlagu && currentlagu !== nextLagu) {
        currentlagu.style.display = 'none';
        } 
    }
}  

var weather = document.getElementById('weather');
var city = document.getElementById('city');
var suhu = document.getElementById('suhu');
const apiKey = 'c67823cdd1bf58ad855b6b652c772b93';
var currentTime = getCurrentTime();

navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperatureKelvin = data.main.temp;
            const temperatureCelsius = temperatureKelvin - 273.15; // Konversi ke Celsius
            const weatherCondition = data.weather[0].main;
            
            if (weatherCondition === 'Clear'){
                //cuaca cerah
                city.innerHTML = `<p>${data.name}</p>`;
                suhu.innerHTML = `<p>Suhu: ${temperatureCelsius.toFixed(1)}°C</p>`;
                
                if (currentTime < 18){
                    weather.src = './Img/clear.png';
                }else{
                    weather.src = './Img/evening.png';
                }
            } else if (weatherCondition === 'Clouds'){
                //cuaca berawan
                city.innerHTML = `<p>${data.name}</p>`;
                suhu.innerHTML = `<p>Suhu: ${temperatureCelsius.toFixed(1)}°C</p>`;
                weather.src = './Img/clouds.png';
            } else if (weatherCondition === 'Rain'){
                //cuaca hujan
                city.innerHTML = `<p>${data.name}</p>`;
                suhu.innerHTML = `<p>Suhu: ${temperatureCelsius.toFixed(1)}°C</p>`;
                weather.src = './Img/rain.png';
            } else {
                //contoh lainnya
                city.innerHTML = `<p>${data.name}</p>`;
                suhu.innerHTML = `<p>Suhu: ${temperatureCelsius.toFixed(1)}°C</p>`;
                weather.src = './Img/morning.png';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weather.innerHTML = '<p>Error fetching weather data</p>';
        });
});
