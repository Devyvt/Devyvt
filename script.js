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
   Devyvt
   Part 2
=========================== */

// ---------- Discord Invite API ----------
const SERVER_ID = "1517214801502273597";

async function loadDiscord() {
    try {
        const res = await fetch(
            `https://discord.com/api/guilds/${SERVER_ID}/widget.json`
        );

        const data = await res.json();

        document.getElementById("discordOnline").textContent = data.presence_count;

    } catch (e) {
        console.error(e);
        document.getElementById("discordOnline").textContent = "Offline";
    }
}

loadDiscord();
setInterval(loadDiscord, 30000);
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
