const addBtn = document.querySelector('.add-btn');
const noteList = document.querySelector('.notes-list');
const colorbtn = document.querySelectorAll('.btn');

// save data 
function savedata(){
    localStorage.setItem('notes', noteList.innerHTML);
}
function getNote(){
    noteList.innerHTML=localStorage.getItem('notes');
}

getNote();
// add note when click

addBtn.addEventListener('click',()=>{
    let div = document.createElement('div');
    div.setAttribute('contenteditable','true');
    div.className ='note';
    let i = document.createElement('i');
    i.innerText = 'notes';
    let img = document.createElement('img');
    img.src = "images/delete.png";
    img.alt ="img";
    img.className='delete';
    let button = document.createElement('button');
    button.innerHTML=  '>';
    button.className='btn';
    div.appendChild(i);
    div.appendChild(img);
    div.appendChild(button);
    noteList.appendChild(div);
    
    savedata();
})

// delete note 
noteList.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete")){
         e.target.closest('.note').remove();
    }
   savedata();
})

// input save

noteList.addEventListener('keyup',()=>{
    savedata();
})


color =["white", "lightblue", "lightgreen","green","red","violet","silver"];
// note background change
noteList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn')){
        let index = Math.floor(Math.random() * color.length);
        e.target.parentElement.style.backgroundColor = color[index];
    }   
    savedata();                      
})

   