const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bar = document.querySelector(".bar");
const editor = document.querySelector(".editor");
const run = document.querySelector(".btn-run");
const iFrame = document.querySelector(".iframe");
const dark = document.querySelector(".btn-dark");
const light = document.querySelector(".btn-light");

const drag = (e) => {
  e.preventDefault();
  document.selection
    ? document.selection.empty()
    : window.getSelection().removeAllRanges();
  left.style.width = e.pageX - bar.offsetWidth / 3 + "px";
};
bar.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", drag);
});
bar.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", drag);
});
run.addEventListener("click", () => {
  const html = editor.textContent;
  iFrame.src = "data:text/html;charset=utf-8," + encodeURI(html);
});
dark.addEventListener("click", () => {
  editor.style.backgroundColor = "#363836";
  editor.style.color = "#fff";
});
light.addEventListener("click", () => {
  editor.style.backgroundColor = "";
  editor.style.color = "";
});
document.getElementById("live").onclick = function () {
  if (this.checked) {
    editor.addEventListener("keyup", () => {
      const html = editor.textContent;
      iFrame.src = "data:text/html;charset=utf-8," + encodeURI(html);
    });
  }
};
