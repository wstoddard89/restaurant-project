const appetizerMenu = fetch(
  "https://obscure-tundra-54269.herokuapp.com/fine-dining"
)
  .then((resp) => resp.json())
  .then((menu) => {
    const appTab = menu.appetizers
      .map(function (i) {
        return `<div class="flex-thing2">
      
      <div class="menuItems">
          <p class="itemName">${i.name}</p>
          <p class="itemDescription">${i.description}</p>
      </div>
      <div class="itemPrice">
          <p>${i.price}</p>
      </div>
      </div>`
      })
      .join("")
    document.querySelector("#appsTab").innerHTML = appTab
  })

const entreeMenu = fetch(
  "https://obscure-tundra-54269.herokuapp.com/fine-dining"
)
  .then((resp) => resp.json())
  .then((menu) => {
    const entreeTab = menu.entrees
      .map(function (i) {
        return `<div class="flex-thing2">
        <div class="menuItems">
            <p class="itemName">${i.name}</p>
            <p class="itemDescription">${i.description}</p>
        </div>
        <div class="itemPrice">
            <p>${i.price}</p>
        </div>
        </div>`
      })
      .join("")
    document.querySelector("#entreesTab").innerHTML = entreeTab
  })

const dessertMenu = fetch(
  "https://obscure-tundra-54269.herokuapp.com/fine-dining"
)
  .then((resp) => resp.json())
  .then((menu) => {
    const dessertTab = menu.desserts
      .map(function (i) {
        return `<div class="flex-thing2">
        <div class="menuItems">
            <p class="itemName">${i.name}</p>
            <p class="itemDescription">${i.description}</p>
        </div>
        <div class="itemPrice">
            <p>${i.price}</p>
        </div>
        </div>`
      })
      .join("")
    document.querySelector("#dessertTab").innerHTML = dessertTab
  })