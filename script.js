/* ===========================
   SecretGame Community v2
   Part 1
=========================== */

const cursor = document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";
});

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{
loader.style.opacity="0";
loader.style.visibility="hidden";
},1800);

});

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.staff-card,.stat-card,.game-container").forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

window.addEventListener("scroll",()=>{

const nav=document.getElementById("navbar");

if(window.scrollY>40){

nav.style.background="rgba(10,15,25,.85)";
nav.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

nav.style.background="rgba(10,15,25,.45)";
nav.style.boxShadow="none";

}

});
/* ===========================
   SecretGame Community v2
   Part 2
=========================== */

// ---------- Discord Invite API ----------
async function updateDiscordStats() {
    try {
        const response = await fetch(
            "https://discord.com/api/guilds/1517214801502273597/widget.json"
        );

        if (!response.ok) throw new Error("Discord API error");

        const data = await response.json();

        const members = document.getElementById("memberCount");
        const online = document.getElementById("onlineCount");

if (members)
    members.textContent =
        data.approximate_member_count ?? "--";

if (online)
    online.textContent =
        data.approximate_presence_count ?? "--";

    } catch (err) {
        console.log("Discord stats unavailable.");

        const members = document.getElementById("memberCount");
        const online = document.getElementById("onlineCount");

        if (members) members.textContent = "--";
        if (online) online.textContent = "--";
    }
}

updateDiscordStats();
setInterval(updateDiscordStats,60000);


// ---------- Roblox Thumbnail ----------
async function loadThumbnail(){

try{

const game=document.getElementById("gameThumbnail");

if(game){

game.src="https://tr.rbxcdn.com/180DAY-c4d5fbd0d8f02c7b7f0a6d88d8f82d9b/768/432/Image/Png";

}

}catch(e){}

}

loadThumbnail();


// ---------- Button Glow ----------

document.querySelectorAll(".btn-discord,.btn-game").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-8px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});


// ---------- Smooth Anchor ----------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// ---------- Hero Text Animation ----------

const hero=document.querySelector(".hero h1");

if(hero){

hero.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards"

});

}


// ---------- Console ----------

console.log("%cSecretGame Community",
"color:#5865F2;font-size:26px;font-weight:bold;");

console.log("%cWebsite loaded successfully.",
"color:#00ff88;font-size:14px;");
