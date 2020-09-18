// let storyVisible = (document.querySelector(".part1").style.display.value)
// let menuVisible = (document.querySelector(".part2").style.display.value)
// let resVisible = (document.querySelector(".part3").style.display.value)
// let storyHidden = (document.querySelector(".part1").style.display.value)
// let menuHidden = (document.querySelector(".part2").style.display.value)
// let resHidden = (document.querySelector(".part3").style.display.value)

// function makeItHappen() {
//   console.log(document.querySelector(".part1").style.display.value)
// }

// document.getElementByClassName("ourStory").addEventListener("click", makeItHappen)

// document
//   .getElementByClassName("menu")
//   .addEventListener("click", makeItHappen(".part2", ".part1", ".part3"))

// document
//   .getElementByClassName("reservations")
//   .addEventListener("click", makeItHappen(".part3", ".part1", ".part2"))

// const f = document.querySelector(".part1")
// const a = f.style.color
// alert(a)

function makeItHappen(evt, tabname) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }
  document.getElementById(tabname).style.display = "block"
  evt.currentTarget.className += " active"
}
