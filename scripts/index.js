window.addEventListener('touchmove', (e)=> e.preventDefault());
let containerCollection = document.getElementsByClassName("container");
let navbar = document.getElementById("menu-buttons").querySelectorAll('li');
console.log(containerCollection)
highlightCurrentActiveMenu(0);
 
//listening for mouse events
for(let i = 0; i<navbar.length; i++){
  navbar[i].onclick = () => {
    swapContainerContent(i)
    highlightCurrentActiveMenu(i)
  }
  navbar[i].onmouseenter = () =>{
    highlightMenuOnMouseEnter(i)
  }
  navbar[i].onmouseleave = () =>{
    unhighlightMenuOnMouseLeave(i)
  }
}
function highlightMenuOnMouseEnter(index){
  for(let i = 0; i<navbar.length; i++){
    if(i == index){
      navbar[i].style.color = "darkgrey"
    }
    else{
      navbar[i].style.color = "white"
    }
  }
}
function unhighlightMenuOnMouseLeave(index){
  navbar[index].style.color = "white"
}
function highlightCurrentActiveMenu(index){
  for(let i = 0; i<navbar.length; i++){
    if(i == index){
      navbar[i].style.fontWeight = "600"
    }
    else{
      navbar[i].style.fontWeight = "initial"
    }
  }
}
//swapping the contents of the the container div
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
