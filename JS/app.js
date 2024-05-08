let eidAudio = document.getElementById("eidAudio");
eidAudio.volume = 0.3;

let receiver = document.getElementById("receiver");
let sender = document.getElementById("sender");

receiver.innerHTML = new URLSearchParams(location.search).get("receiver");
sender.innerHTML =
  new URLSearchParams(location.search).get("sender") || "Sakib Hassan";
