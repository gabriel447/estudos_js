async function getData(endpoint) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}`)
        const json = await response.json()
        return json
    } catch (e) {
        console.error(e)
    }
}

getData('character').then(json => {
    json.results.forEach(character => {
        console.log(character.name)
    })
})
