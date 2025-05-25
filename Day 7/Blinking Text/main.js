const text=document.getElementById('text');

let visible = false;

setInterval(() => {
  visible = !visible;
  text.style.display = visible ? "block" : "none";
}, 500);

