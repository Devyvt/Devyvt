window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
    }, 1200);
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".staff-card, .stat-card, .game-box").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s ease";
    observer.observe(el);
});

// Discord Widget API
async function updateDiscord() {
    try {
        const res = await fetch("https://discord.com/api/guilds/1388137532407060541/widget.json");

        if (!res.ok) {
            throw new Error("Discord widget not enabled or invalid response");
        }

        const data = await res.json();

        document.getElementById("online").textContent =
            data.presence_count ?? "--";

        if (data.members && Array.isArray(data.members)) {
            document.getElementById("members").textContent =
                data.members.length;
        } else {
            document.getElementById("members").textContent = "Live";
        }

    } catch (e) {
        console.log("Discord error:", e);
        document.getElementById("members").textContent = "--";
        document.getElementById("online").textContent = "--";
    }
}
// Navbar glow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(20,20,35,.85)";
        header.style.boxShadow = "0 0 25px rgba(88,101,242,.3)";
    } else {
        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";
    }
});
