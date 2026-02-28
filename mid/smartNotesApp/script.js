// notes create data store

createNote.addEventListener('click',()=>{
    let div = document.createElement('div');
    let i = document.createElement('i');
    let img = document.createElement('img');
    div.setAttribute("contenteditable" ,"true");
    div.className="note";
    img.src ="images/delete.png";
    img.alt ="img";
    .appendChild(div).appendChild(i).appendChild(img);
})
