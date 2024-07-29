const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);
}).catch(error => {
    console.error(`Erro ao buscar dados: ${error}`);
});
