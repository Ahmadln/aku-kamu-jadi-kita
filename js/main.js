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
                    catgif.src = './Img/Sleep.gif';
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
var box3 = document.getElementById("box_lagu")
document.getElementById("btnmotivasi").addEventListener("click", function() {
if (box.style.display === "block") {
    box.style.display = "none";
    } else {
    box.style.display = "block";
    box2.style.display = "none";
    box3.style.display = "none";
    }
});

document.getElementById("btnls").addEventListener("click", function() {
    if (box2.style.display === "block") {
        box2.style.display = "none";
        } else {
        box2.style.display = "block";
        box.style.display = "none";
        box3.style.display = "none";

        }
    });

    document.getElementById("btnlagu").addEventListener("click", function() {
        if (box3.style.display === "block") {
            box3.style.display = "none";
            } else {
            box3.style.display = "block";
            box.style.display = "none";
            box2.style.display = "none";
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
  // Temukan lagu berikutnya dalam urutan Anda dan mainkan
  // Di sini Anda dapat menambahkan logika untuk menemukan lagu berikutnya
  // Misalnya, jika Anda memiliki array lagu, Anda dapat meningkatkan indeksnya dan memainkan lagu selanjutnya.
  // Untuk tujuan demonstrasi, saya hanya akan menambahkan kode untuk memainkan lagu berikutnya secara acak.
    var laguList = document.getElementsByClassName('lagu');
    var randomIndex = Math.floor(Math.random() * laguList.length);
    var nextLagu = laguList[randomIndex];

  // Mainkan lagu berikutnya
    if (nextLagu) {
        toggle(nextLagu.id);
    // Menyembunyikan lagu sebelumnya saat memainkan lagu baru
        if (currentlagu && currentlagu !== nextLagu) {
        currentlagu.style.display = 'none';
        }
    }
}
