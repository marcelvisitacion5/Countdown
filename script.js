// Read URL Parameters

const params=new URLSearchParams(window.location.search);

const title=params.get("title") || "";

const date=params.get("date") || "2027-06-11T08:00:00";

document.getElementById("title").innerHTML=title;

const target=new Date(date).getTime();

function update(){

const now=new Date().getTime();

const diff=target-now;

if(diff<=0){

document.getElementById("countdown").innerHTML="<h2>🎉 Event Started!</h2>";

return;

}

const d=Math.floor(diff/86400000);

const h=Math.floor(diff%86400000/3600000);

const m=Math.floor(diff%3600000/60000);

const s=Math.floor(diff%60000/1000);

document.getElementById("days").innerHTML=String(d).padStart(2,"0");

document.getElementById("hours").innerHTML=String(h).padStart(2,"0");

document.getElementById("minutes").innerHTML=String(m).padStart(2,"0");

document.getElementById("seconds").innerHTML=String(s).padStart(2,"0");

}

update();

setInterval(update,1000);
