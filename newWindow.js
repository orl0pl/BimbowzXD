var windows = [];
function createDialog(title, message, type){
  var window = document.createElement("div");
  var header = document.createElement("div");
  var inner = document.createElement("div");
  var input = document.createElement("input");
  var button = document.createElement("button");
  var value;
  //
  document.body.appendChild(window);
  window.appendChild(header);
  window.appendChild(inner);
  inner.appendChild(input);
  inner.appendChild(button);
  //
  window.className = "window"
  header.className = "bar"
  inner.className = "inner"
  //
  header.innerText = title;
  inner.innerText = message;
  button.innerText = "ok"
  //
  window.style.left = "50vw"
  window.style.top = "50vh"
  //
  input.type = type;
  button.onclick = function() {
    input.value;
  }
  return value;
}
function deleteDialog(){

}
function error(title, message){
  var window = document.createElement("div");
  var header = document.createElement("div");
  var inner = document.createElement("div");
  var close = document.createElement("a");
  //
  document.body.appendChild(window);
  window.appendChild(header);
  window.appendChild(inner);
  header.appendChild(close);
  //
  window.className = "window"
  header.className = "bar"
  inner.className = "inner"
  //
  header.innerText = title;
  inner.innerText = message;
  close.innerText = "X";
  //
  window.style.left = "50vw"
  window.style.top = "50vh"
  //
  header.style.backgroundColor = "red"
  //
  close.onclick = window.remove();
  //
  dragElement(window)
}
function createWindow(t, inner, m, x, y, h){
  var window = {
    title: t,
    inner: inner,
    minimalize: m,
    position: {x: x, y: y},
    isHolded: h,
  }
  windows.push(window);
  renderWindow(windows.length-1);
}
function renderWindow(i){
  console.log(windows)
  var window = document.createElement("div");
  var header = document.createElement("div")
  var inner = document.createElement("div");
  window.className = "window";
  header.className = "bar";
  inner.className = "inner"
  window.setAttribute('id', `window${i}`)
  header.setAttribute('id', `window${i}header`)
  document.body.appendChild(window);
  window.appendChild(header);
  window.appendChild(inner);
  header.innerHTML = windows[i].title+` <a style="color: red;font-style: italic;" onclick="closeWindow(${i})">❌</a>`
  inner.innerHTML = windows[i].inner
  dragElement(window);
  window.onclick = function(e) {
    e.target.style.zIndex++;
  }
}

function closeWindow(i){
  document.getElementById(`window${i}`).remove();
  windows.splice(i, i)
  console.log(windows)
}
function minimalize(i){
  document.getElementById(`window${i}`).style.display = 'none'
}
function show(i){
  document.getElementById(`window${i}`).style.display = 'block'
}