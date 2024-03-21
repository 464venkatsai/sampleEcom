let users = ["admin"];
let passwords = ["admin"];

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let flag = false;

    for (let index = 0; index < users.length; index++) {
        if (username === users[index] && password === passwords[index]) {
            window.location.href = "./home.html";
            flag = true;
            break;
        }
    }

    if (!flag) {
        document.querySelector(".warning").innerHTML = "Invalid Credentials";
    }
}
let naruto = ["naruto.jpg","itachi.jpg","minato.jpg"]
let luffy = ["luffy.jpg","zory.jpg","sanji.jpg"]
let goku = ["goku.jpg","vigita.jpg","krillan.jpg"]

function renderPage(charcter){
    window.location.assign(`${charcter}.html`)
}
function playSound(name) {
    var audio = new Audio(`./static/sounds/${name}.mp3`);
    
    // Add an event listener to detect when the audio playback ends
    audio.addEventListener('ended', function() {
        console.log('Audio playback ended.');
    });
    audio.play();
}

playSound();
