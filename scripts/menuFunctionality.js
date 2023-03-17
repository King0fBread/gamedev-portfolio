window.addEventListener('touchmove', (e)=> e.preventDefault())
let containerCollection = document.getElementsByClassName("container")
let navbar = document.getElementById("menu-buttons").querySelectorAll('li')
let arrowIcon = document.getElementById("arrow-icon")
highlightCurrentActiveMenu(0);
 
//listening for mouse events
for(let i = 0; i<navbar.length; i++){
  navbar[i].onclick = () => {
    swapContainerContent(i)
    highlightCurrentActiveMenu(i)
  }
  navbar[i].onmouseenter = () =>{
    highlightMenuOnMouseEnter(i)
    navbar[i].style.cursor = "pointer"
  }
  navbar[i].onmouseleave = () =>{
    unhighlightMenuOnMouseLeave(i)
    navbar[i].style.cursor = "default"
  }
}
arrowIcon.onclick = () =>{
  swapContainerContent(1)
  highlightCurrentActiveMenu(1)
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
  controlOverflow(i)
  for(let index = 0; index<containerCollection.length; index++){
    if(index!=i){
      containerCollection[index].style.display = "none"
    }
    else{
      containerCollection[index].style.display = "block"
    }
  }
}
function controlOverflow(pageIndex){
  if(pageIndex == 2){
    document.body.style.overflow = "visible"
  }
  else{
    document.body.style.overflow = "hidden"
  }
}
