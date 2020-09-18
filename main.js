const appetizerMenu = fetch("https://obscure-tundra-54269.herokuapp.com/fine-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    const appTab = menu.appetizers.map(function (i) {
      return `<p>${i.name}</p>
              <p>${i.price}</p>`
              
    })
    .join("")
    document.querySelector("#appMenuTab").innerHTML = appTab
  })

  const entreeMenu = fetch("https://obscure-tundra-54269.herokuapp.com/fine-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    const entreeTab = menu.entrees.map(function (i) {
      return `<p>${i.name}</p>
              <p>${i.price}</p>`
              
    })
    .join("")
    document.querySelector("#entreeMenuTab").innerHTML = entreeTab
  })

  const dessertMenu = fetch("https://obscure-tundra-54269.herokuapp.com/fine-dining")
  .then((resp) => resp.json())
  .then((menu) => {
    const dessertTab = menu.desserts.map(function (i) {
      return `<p>${i.name}</p>
              <p>${i.price}</p>`
              
    })
    .join("")
    document.querySelector("#dessertMenuTab").innerHTML = dessertTab
  })