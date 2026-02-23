let create = document.querySelector(".create-note");
let notes = document.querySelector(".note");
let notesContainer = document.querySelector(".notes-container");


function getData() {
 notesContainer.innerHTML =  localStorage.getItem("notes");
}


function saveData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}
getData();
create.addEventListener("click", (e) => {
  let p = document.createElement("div");
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
  } 
});

notesContainer.addEventListener('click', (e)=>{
if (e.target.tagName === "DIV") {
    let note = document.querySelectorAll(".note");
    note.forEach((nt) => {
      nt.onkeyup = function () {
          console.log(notesContainer.innerHTML);
          saveData();
      };
    });
  }
})

// document.addEventListener('keydown', event =>{
//   if(event.key === "Enter"){
//     document.execCommand("insertLineBreak");
//     event.preventDefault();
//   }
// })