window.onload = manageHypertext()

function manageHypertext(){
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