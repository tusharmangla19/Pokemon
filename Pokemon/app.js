
const imgBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const container = document.querySelector('#container')

for (let i = 1; i < 151; i++) {
    const pokemon = document.createElement("div")
    pokemon.classList.add("pokemon")
    const label = document.createElement("span")
    label.innerText = `#${i}`
    const newImg = document.createElement("img")
    newImg.src = `${imgBase}${i}.png`

    container.appendChild(pokemon)
    pokemon.appendChild(label)
    pokemon.appendChild(newImg)

}
