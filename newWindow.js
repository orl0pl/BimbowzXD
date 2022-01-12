var windows = [];
function createWindow(t, inner, m, x, y, h){
  var window = {
    title: t,
    inner: inner,
    minimalize: m,
    position: {x: x, y: y},
    isHolded: h,
  }
  windows.push(window);
  renderWindow(0);
}
function renderWindow(i){
  console.log(windows)
  var window = document.createElement("div");
  var inner = document.createElement("div");
  window.className = "window";
  window.setAttribute('id', i)
  document.body.appendChild(window);
  window.appendChild(inner);
  window.innerText = windows[i].title
  inner.innerHTML = window.inner
  window.onmousedown = down;
}
function down(e){
  e = e || window.event;
  e.preventDefault();
  e.clientX = windows[e.target.getAttribute("id")].position.x;
  e.clientY = windows[e.target.getAttribute("id")].position.y;
  document.onmousemove = move;
  document.onmouseup = up;
}
function move(e){
  e = e || window.event;
  e.preventDefault();
  e.clientX = windows[e.target.getAttribute("id")].position.x;
  e.clientY = windows[e.target.getAttribute("id")].position.y;
  e.target.style.left = e.clientX + "px";
  e.target.style.top = e.clientY + "px";
}
function up(){
  document.onmouseup = null;
  document.onmousemove = null;
}