let create = document.querySelector(".create-note");
let notes = document.querySelector(".note");
let notesContainer = document.querySelector(".notes-container");
function getData() {
  localStorage.getItem("notes");
}
function saveData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
create.addEventListener("click", (e) => {
  console.log(notesContainer);
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.src = "images/delete.png";
  img.className = "img";
  p.className = "note";
  p.setAttribute("contenteditable", "true");
  notesContainer.appendChild(p).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    let note = document.querySelectorAll(".note");
    note.forEach((nt) => {
      nt.onkeyup = function () {
        saveData();
      };
    });
  }
});
