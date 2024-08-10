async function getData(endpoint) {
    try {
        const response = await fetch(`https://hp-api.onrender.com/api/${endpoint}`)
        const data = await response.json()
        return data
    } catch (e) {
        console.error(e)
    }
}
  
getData('characters').then(data => {
    data.forEach(
      element => console.log(element.name)
    )
})