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

// <!-- script gif logic -->

    var weather = document.getElementById('weather');
    function getCurrentTime() {
        return new Date().getHours();
    }
    var catgif = document.getElementById('catgif');
            
    async function printgif() {
        let currentTime = getCurrentTime();
                
        if (currentTime < 12){
            catgif.src = './Img/kucincouple.gif';
            weather.src = './Img/morning.png';
        } 
        else if (currentTime < 18){
            catgif.src = './Img/peach-goma.gif';
            weather.src = './Img/afternoon.png';
        }   
        else{
            catgif.src = './Img/Sleep.gif';
            weather.src = './Img/evening.png';

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



