import messages from "./txt/rhlQhcq.js";
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

function getCurrentTime() {
    return new Date().getHours();
}


// Example usage:
async function printMessage() {
    const day = await getType();
    let currentTime = getCurrentTime();
    let message = '';

    // Choose message based on the day
    switch (day) {
        case 'Sunday':
            if (currentTime < 12){
                message = messages.Sunday.morning
            } else if (currentTime <18 ){
                message = messages.Sunday.afternoon
            } else {
                message = messages.Sunday.evening
            }
            break;
        case 'Monday':
            if (currentTime < 12){
                message = messages.Monday.morning
            } else if (currentTime <18 ){
                message = messages.Monday.afternoon
            } else {
                message = messages.Monday.evening
            }
            break;
        case 'Tuesday':
            if (currentTime < 12){
                message = messages.Tuesday.morning
            } else if (currentTime <18 ){
                message = messages.Tuesday.afternoon
            } else {
                message = messages.Tuesday.evening
            }
            break;
        case 'Wednesday':
            if (currentTime < 12){
                message = messages.Wednesday.morning
            } else if (currentTime <18 ){
                message = messages.Wednesday.afternoon
            } else {
                message = messages.Wednesday.evening
            }
            break;
        case 'Thursday':
            if (currentTime < 12){
                message = messages.Thursday.morning
            } else if (currentTime <18 ){
                message = messages.Thursday.afternoon
            } else {
                message = messages.Thursday.evening
            }
            break;
        case 'Friday':
            if (currentTime < 12){
                message = messages.Friday.morning
            } else if (currentTime <18 ){
                message = messages.Friday.afternoon
            } else {
                message = messages.Friday.evening
            }
            break;
        case 'Saturday':
            if (currentTime < 12){
                message = messages.Saturday.morning
            } else if (currentTime <18 ){
                message = messages.Saturday.afternoon
            } else {
                message = messages.Saturday.evening
            }
            break;
        default:
            message = "Hello!";
    }

    typewriter(message, "main-card-text");
}


console.log("Create By Ahmad Maulana")
printMessage();

// In this code:

// The getType() function now returns the current day of the week.
// The printMessage() function is introduced, which gets the current day using getType() and then selects the appropriate message based on the day.
// The typewriter function is called with the chosen message to display it in the "main-card" box.
