async function fetchData(endpoint) {
    try {
      const response = await fetch(`https://hp-api.onrender.com/api/${endpoint}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
    }
  }
  
  fetchData('spells').then(data => {
      data.forEach(item => console.log(item.name))
  })