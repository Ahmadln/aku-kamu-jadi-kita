async function getType() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayIndex = now.getDay();
    return days[dayIndex];
}

function getRandomMessage(messages) {
    const random_index = Math.floor(Math.random() * messages.length);
    return messages[random_index];
}

function typewriter(message, paragraph_id) {
    var p = document.createElement('p');
    p.setAttribute('id', paragraph_id);
    document.getElementById("main-card").appendChild(p);

    var index = 0;
    if (message === '') {
        document.getElementById(paragraph_id).innerHTML += '<br/>';
    }

    function writer() {
        if (index < message.length) {
            document.getElementById(paragraph_id).innerHTML += message.charAt(index);
            index++;
            setTimeout(writer, 100);
        }
    }
    writer();
}

// Example usage:
async function printMessage() {
    const day = await getType();
    let message = '';

    // Choose message based on the day
    switch (day) {
        case 'Sunday':
            message = "Happy Sunday!";
            break;
        case 'Monday':
            message = "Have a great start to the week!";
            break;
        case 'Tuesday':
            message = "Stay productive today!";
            break;
        case 'Wednesday':
            message = "Halfway through the week!";
            break;
        case 'Thursday':
            message = "Keep pushing, weekend is almost here!";
            break;
        case 'Friday':
            message = "Happy Friday! Enjoy your day!";
            break;
        case 'Saturday':
            message = "Happy Saturday Cintaku! Tunggu akuuu ya Cintaku kalau aku blm sampe dan di chat ga balas berarti aku msh dijalan untuk menjemput Bidadariku. I Love you Sarah Salsabila Putri ❤️";
            break;
        default:
            message = "Hello!";
    }

    typewriter(message, "main-card-text");
}

printMessage();

// In this code:

// The getType() function now returns the current day of the week.
// The printMessage() function is introduced, which gets the current day using getType() and then selects the appropriate message based on the day.
// The typewriter function is called with the chosen message to display it in the "main-card" box.
