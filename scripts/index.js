window.addEventListener('touchmove', (e)=> e.preventDefault());
let containerCollection = document.getElementsByClassName("container");
let navbar = document.getElementById("menu-buttons").querySelectorAll('li');
highlightCurrentActiveMenu(0);
 
//listening for mouse events
for(let i = 0; i<navbar.length; i++){
  navbar[i].onclick = () => {
    swapContainerContent(i)
    highlightCurrentActiveMenu(i)
  }
  // navbar[i].onmouseover = () =>{
  //   highlightMenuOnMouseOver(i)
  // }
}
function highlightMenuOnMouseOver(index){
  for(let i = 0; i<navbar.length; i++){
    if(i == chosenIndex){
      navbar[i].style.color = "grey"
    }
    else{
      navbar[i].style.color = "white"
    }
  }
}
function highlightCurrentActiveMenu(index){
  for(let i = 0; i<navbar.length; i++){
    if(i == chosenIndex){
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
