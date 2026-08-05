const params=new URLSearchParams(window.location.search);

const title=params.get("title") || "";

const date=params.get("date") || "2027-06-11T08:00:00";

document.getElementById("title").innerHTML=title;

const unix=Math.floor(new Date(date).getTime()/1000);

new FlipDown(unix)

.start()

.ifEnded(()=>{

document.querySelector(".wrapper").innerHTML="<h1>🎉 Event Started!</h1>";

});
