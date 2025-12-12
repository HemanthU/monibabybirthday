// Name Checking
function checkName() {
    let name = document.getElementById("nameInput").value.toLowerCase();
    if (name === "moni" || name === "monisha" || name === "❤️") {
        window.location.href = "photos.html";
    } else {
        document.getElementById("msg").innerText = "This page is only for Moni ❤️";
    }
}

// Typewriter Effect
let message = "Happy Birthday Moni ❤️ Every moment with you feels like magic. \
You are my calm, my happiness, and my favorite person. Thank you for being you. \
I love you more than words can hold.";

let i = 0;
function startTyping() {
    if (i < message.length) {
        document.getElementById("typeText").innerHTML += message.charAt(i);
        i++;
        setTimeout(startTyping, 40);
    }
}

// Music Autoplay (Mobile-safe)
function playMusic() {
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play().catch(() => {
        // will play after user taps
        document.body.addEventListener("click", () => music.play(), { once: true });
    });
}
