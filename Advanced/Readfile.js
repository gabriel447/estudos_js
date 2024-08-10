const fs = require('fs')

function getData(arquivo) {
    return new Promise((resolve, reject) => {
      fs.readFile(`/Users/fullstackgabe/Documents/htdocs/estudos_js/Advanced/${arquivo}`, 'utf8', (err, data) => {
        if (err) {
          const errorMessage = `Erro ao ler o arquivo "${arquivo}": ${err.message}`
          return reject(errorMessage)
        } else {
          return resolve(data)
        }
      })
    })
  }

getData('dados.txt')
  .then(data => console.log(data))
  .catch(error => {
    console.error(error)
})

  
