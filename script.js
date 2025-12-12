/* script.js - complete working version
   - checkName(): allow only if BOTH 'moni' and 'hemu' appear in input
   - Typewriter: startTyping() writes the message into element with id="typeText"
   - playMusic(): tries to autoplay music, falls back to user interaction
   - toggleMusic(): play/pause control for a music button
   - reveal(): example function to call from your "Reveal" button on letter page
*/

/* ---------- Name check (index.html) ---------- */
function checkName() {
  const input = document.getElementById("nameInput");
  if (!input) return;
  const name = input.value.trim().toLowerCase();

  const msgEl = document.getElementById("msg");
  // require both names to be present
  if (name.includes("moni") && name.includes("hemu")) {
    // success — redirect to gallery / photos page
    window.location.href = "photos.html";
  } else {
    // failure message (single message)
    if (msgEl) msgEl.textContent = "This surprise is only for Moni ❤️ — try again or close the page.";
    // optionally, you could add a shake animation to the input here
    if (input) {
      input.classList.add("input-error");
      setTimeout(()=> input.classList.remove("input-error"), 600);
    }
  }
}

/* ---------- The birthday message (template literal) ---------- */
let message = `Moni… today is your birthday, and I want to speak to you in the softest and most honest way I can — not as the world sees you, but as I see you. As the girl who came into my life quietly, but somehow filled every empty corner without even trying.

You are the kind of person whose presence changes the room, whose smile can steady someone’s entire day, and whose heart feels emotions in their purest form — without filters, without pretending, without fear of being real. And that’s one of the many reasons I am grateful for you. You don’t love halfway. You don’t feel halfway. You don’t care halfway. Everything you give is genuine. Everything you express comes from a place that is deep and rare.

I love your softness, Moni. I love the way you get emotional, the way you cry when something hurts you, the way you shout when you’re overwhelmed, and the way you calm down again because your heart cannot hold onto anger for long. Your emotions don’t make you weak — they make you beautifully human. They show how much you care, how deeply you feel, and how sincerely you love.

I love the little things too — your long beautiful hair, your pretty eyes, the way you look when you’re lost in a book, the way you talk about the people you love, the tiny extra affection you have for your dad, the way you get jealous when you feel protective, the way you call me Hemu with a tone only you can use. Even the small dislikes or comforts — like avoiding brinjal, enjoying masala dosa and biryani, losing yourself in a story — are part of you, and I adore each one.

Moni, I want you to know something clearly: you are loved, you are valued, you are seen, and you matter more than you realise. Your presence in my life has brought a peace I didn’t know I needed. You are the person I want to tell first when something good happens, and the one I look for when something isn’t right. There is something about you — something gentle, steady, quietly powerful — that makes me feel at home.

I love the way your heart reacts around me. I love your honesty with your feelings. I love that you get overwhelmed but still try, that you love the people close to you fiercely, that you keep giving even when it’s hard. More than anything, I love that you chose me — that you let me into your world, your vulnerabilities, your dreams, and your heart.

Thank you for being the soft place and the storm, the laughter and the quiet, my comfort and my wild. Thank you for staying, for trusting, for sharing pieces of yourself with me that are fragile and true. On your birthday I celebrate you — every part of who you are and everything you will become.

Moni… you are my pretty girl, my calm, my happiness, my safe place. I don’t know every chapter ahead, but I know this: in every version of my life, I want you there. 

Happy Birthday, Moni🩷💞💕. 

You are my heart’s favorite place, today and always.

— Your Hemu`;

/* ---------- Typewriter logic ---------- */
let typeIndex = 0;
// Delay in ms per character. ~65ms gives ~4 minutes for ~600 words (tune as needed)
const TYPING_DELAY_MS = 65;

function startTyping() {
  const out = document.getElementById("typeText");
  if (!out) return; // nothing to type into
  // Reset if called again
  out.innerHTML = "";
  typeIndex = 0;
  // start
  typeChar();
}

function typeChar() {
  const out = document.getElementById("typeText");
  if (!out) return;
  if (typeIndex < message.length) {
    const ch = message.charAt(typeIndex);
    // Preserve line breaks as <br>
    if (ch === '\n') {
      out.innerHTML += '<br>';
    } else {
      // Escape HTML-angle-brackets just in case (very basic)
      if (ch === '<') out.innerHTML += '&lt;';
      else if (ch === '>') out.innerHTML += '&gt;';
      else out.innerHTML += ch;
    }
    typeIndex++;
    setTimeout(typeChar, TYPING_DELAY_MS);
  } else {
    // finished typing - you may add a small flourish here
    // e.g., show a small heart or enable a download/share button
  }
}

/* ---------- Music control ---------- */
const musicId = "bgMusic"; // id of <audio> element in your letter.html

function playMusic() {
  const music = document.getElementById(musicId);
  if (!music) return;
  music.volume = 0.45;
  const p = music.play();
  if (p !== undefined) {
    p.catch(() => {
      // Autoplay blocked — play on first user interaction
      const startOnInteraction = () => {
        music.play().catch(()=>{/*no-op*/});
        window.removeEventListener("click", startOnInteraction);
        window.removeEventListener("touchstart", startOnInteraction);
      };
      window.addEventListener("click", startOnInteraction, { once: true });
      window.addEventListener("touchstart", startOnInteraction, { once: true });
    });
  }
}

function toggleMusic(btnId) {
  const music = document.getElementById(musicId);
  if (!music) return;
  const btn = btnId ? document.getElementById(btnId) : null;
  if (music.paused) {
    music.play().catch(()=>{/*ignored*/});
    if (btn) btn.textContent = "🔊";
  } else {
    music.pause();
    if (btn) btn.textContent = "🔈";
  }
}

/* ---------- Reveal helper (call from your Reveal button) ---------- */
/* 
   If your letter page has a "Reveal Letter" button that calls reveal(),
   this function will hide the cover, show the content, start typing and play music.
*/
function reveal() {
  const cover = document.getElementById("cover");
  const content = document.getElementById("content");
  if (cover) {
    cover.style.opacity = "0";
    setTimeout(()=> {
      if (cover) cover.style.display = "none";
      if (content) {
        content.style.display = "block";
        // start typing and music after content is visible
        startTyping();
        playMusic();
      }
    }, 700);
  } else {
    // fallback: if no cover, just start
    if (content) content.style.display = "block";
    startTyping();
    playMusic();
  }
}

/* ---------- Auto-run helpers for letter page ---------- */
/* 
   We don't auto-start typing/music on load to avoid autoplay blocks.
   Use reveal() (recommended) or uncomment startTyping/playMusic below for immediate start.
*/

// Example: if you want to auto-start when typeText exists (not recommended on mobile)
document.addEventListener("DOMContentLoaded", () => {
  // leaving empty intentionally
});

/* ---------- Export functions to window so HTML onclicks can use them ---------- */
window.checkName = checkName;
window.startTyping = startTyping;
window.playMusic = playMusic;
window.toggleMusic = toggleMusic;
window.reveal = reveal;
