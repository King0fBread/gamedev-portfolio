window.onload = manageHypertext()

function manageHypertext(){
  let hypertextElements = document.getElementsByClassName("hypertextElement");
  let projectsLink = document.getElementById("projectsLink")
  let contactsLink = document.getElementById("contactsLink")
  projectsLink.onclick = () => {
    swapContainerContent(2)
    highlightCurrentActiveMenu(2)
  }
  contactsLink.onclick = () => {
    swapContainerContent(3)
    highlightCurrentActiveMenu(3)
  }
}
for(let i of hypertextElements){
  i.onmouseenter = () => {
    i.style.cursor = "pointer"
  }
  i.onmouseenter =() => {
    i.style.cursor = "default"
  }
}