const newNote =document.querySelector('.new-note');
const notesList =document.querySelector('.notes-list');
const deleteImg =document.querySelector('.delete-img');
const notes =document.querySelectorAll('.note');

function getdata(){
    notesList.innerHTML = localStorage.getItem('note');
}
function loaddata(){
    localStorage.setItem('note', notesList.innerHTML);
}
getdata();
newNote.addEventListener('click',()=>{
       let div = document.createElement('div');
       div.className = 'note';
        div.setAttribute('contenteditable',"true");
        let i = document.createElement('i');
        i.textContent='notes';
        let img =document.createElement('img');
        img.src="images/delete.png";
        img.alt = 'img';
        img.className='delete-img';
    notesList.appendChild(div).appendChild(i);
    notesList.appendChild(div).appendChild(img);

    loaddata();
})

notesList.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG')
    {
        e.target.parentElement.remove(); 
        loaddata();
    }
})
