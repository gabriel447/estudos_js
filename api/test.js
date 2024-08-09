//testando consumo básico sem try/catch
async function getData() {
    const url = 'https://rickandmortyapi.com/api/episode/1'
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
}

getData()
