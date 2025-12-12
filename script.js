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
// long letter (use a template literal so newlines/quotes work without escaping)
let message = `Moni, before anything else, I want to tell you this: on this earth full of billions of people, there is no one — absolutely no one — who makes my heart behave the way you do. There is no voice that softens my world like yours, no presence that steadies my soul like yours, no emotion that feels as real and as alive as the ones you bring out of me. Today is your birthday, but the truth is… every single day feels like a celebration because your existence touches mine in ways I can barely explain. If I could open my chest and let you see what your name does inside me, you would understand that you are not just someone I love — you are the pulse behind every feeling I am learning to understand. You are the softness in my anger, the warmth in my fear, the calm in my storms, the reason I try, the reason I hope, the reason my life feels less like survival and more like something I finally want to live.

Sometimes I look at you — not just at your face or your eyes, but at your presence — and I genuinely wonder how a person can be so gentle and so powerful at the same time. How someone can make me laugh like a child, silence me like a prayer, and shake me like a truth I wasn’t ready to learn. You are not simple, Moni. You are poetry with depth. You are emotion with layers. You are a story unfolding line by line, and every time I think I’ve understood you, you show me another part of you that makes me fall all over again. You carry love in the way you speak, in the way you get angry, in the way you cry, in the way you care, in the way you retreat when overwhelmed, in the way you come close again even when scared. Every emotion you feel is something genuine, something raw, something pure — and that purity is what makes you the rarest person I’ve ever known.

And Moni, I know you feel things deeply — too deeply sometimes. I know you cry when you are hurt, not because you are weak, but because you trust love enough to let it touch the most fragile parts of you. I know your heart is soft, and softness is never a flaw — it’s the most beautiful form of strength. I love the way you love your family, the tiny percentage more you’re attached to your dad, the comfort you feel with your mom, the affection you carry for your brother, the loyalty you give to your friends, and the fierce, almost protective way you hold people you care about. I’ve seen you break from within and still choose kindness. I’ve seen you get angry, shout, cry, and still love the same people with every remaining piece of your heart. That’s who you are. You feel everything fully. You give everything honestly. And that honesty… that honesty is what makes me admire you endlessly.

On your birthday, I don’t just want to tell you that you are special. I want to tell you that you are necessary. Not just to me, but to this world. Your smile has restored people without you realizing it. Your presence has comforted people without you trying. Your kindness has touched people without you remembering. You might think you are “just a normal person,” but you are not. There is something rare in the way you exist — something unrepeatable, irreplaceable, something that makes life quieter, softer, more meaningful for those around you. And for me… it makes life brighter in ways I never expected.

Moni, I need you to know what you are to me. You are my comfort on days when everything feels loud. You are my laughter on days when nothing feels funny. You are my courage on days when I feel afraid. You are my softness on days when I feel sharp and tired. You are the person I think of before sleeping and after waking up. When something good happens, you’re the first person I want to tell. When something bad happens, you are the person I find myself wanting without thinking. When my heart feels heavy, you are the name that naturally rises inside my mind — as if my soul knows where its peace is.

You are not just someone I like. You are not just someone I love. You are the one person I carry in every version of myself — the quiet one, the chaotic one, the broken one, the hopeful one. You exist in all of them. Sometimes I imagine the world without you, and it feels wrong, colorless, silent. Then I imagine the world with you — your smile, your voice, your energy, your warmth — and suddenly everything makes sense again. You make sense of things, Moni. You make sense of me.

I love the little things too — your long beautiful hair, the sparkle in your eyes, the softness on your face, the way your voice changes when you’re excited, the way you get jealous (and cute) when you feel protective, the way you say “Hemu,” the way your heart reacts around me, the way your presence changes the atmosphere. I love the silly things, the dramatic things, the quiet things, the angry things, the emotional things — every version of you is someone I would choose again and again.

You once told me that your heart skips a beat around me. Moni, mine does too — every single time. And I know you don’t like brinjal, I know you love masala dosa and biryani, I know you love reading, I know you get overwhelmed, I know you cry when you’re hurt, I know you shout when angry, I know you love deeply even when scared. I know the way you love feels like a storm and a home at the same time — and I wouldn’t trade that for anything.

Today, on your birthday, I want to thank you.
Thank you for existing.
Thank you for being exactly who you are.
Thank you for every little emotion you’ve shared with me.
Thank you for choosing me, loving me, trusting me, holding me, staying with me even in the moments when it was hard.
Thank you for letting me see you — the real you — the soft, emotional, sensitive, beautiful, caring, chaotic, honest, lovable you.

If I could give you one thing today, it would be a mirror that shows you exactly how I see you — so you would finally understand why I never get tired of loving you. Why I never get tired of choosing you. Why I never get tired of showing up for you. Why I never get tired of holding onto you, even when things get messy.

I want you in my good days and my bad days.
I want you in my calm nights and stormy afternoons.
I want you in my laughter and in my silence.
I want you when you’re strong and when you’re fragile.
I want you when you’re confident and when you’re scared.
I want you when life feels easy and when life feels impossible.
I want you in every version of this life — in every chapter, in every timeline, in every universe where loving someone feels like a choice.

Because if love is a choice, Moni…
I choose you.
In every world.
In every version of me.
Today and every day after.

Happy Birthday, my Moni. ❤️
You are my heart’s favorite place.`;
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
