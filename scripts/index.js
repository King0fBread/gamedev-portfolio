window.addEventListener('touchmove', (e)=> e.preventDefault());
let containerCollection = document.getElementsByClassName("container");
console.log(containerCollection)

let navbar = document
      .getElementById("menu-buttons")
      .querySelectorAll('li');
navbar[1].onclick=()=>{
  swapContainerContent();
}

function swapContainerContent(i){
  for(let index = 0; index<containerCollection.length; index++){
    if(index!=i){
      containerCollection[index].style.display = "none";
    }
    else{
      containerCollection[index].style.display = "block";
    }
  }
}
for(let i = 0; i<navbar.length; i++){
  navbar[i].onclick = () => swapContainerContent(i)
}
