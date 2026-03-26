const accessKey ="47wlmeE8m7g8MFMhkCuClv6dZot3buexLgjsT6ay_5Q";
const inputField = document.getElementById('input-field');
const searchBar = document.getElementById('search-bar');
const imageResult = document.getElementById('result');
let keyword ="";
let page =1;
async function searchImg() {
    keyword = inputField.value;
    console.log(keyword);
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
   
    if(page === 1){
        imageResult.innerHTML='';
    }

    const results = data.results;
    results.map((result)=>{
        const image = document.createElement('img');
        image.src= result.urls.small;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target="_blank";
        imagelink.appendChild(image);
        imageResult.appendChild(imagelink);
    })

}

searchBar.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchImg();
})