//testando consumo básico sem try/catch
async function getData(endpoint) {
    const url = `https://rickandmortyapi.com/api/${endpoint}`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
}

getData('character')
