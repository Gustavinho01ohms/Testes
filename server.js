const express =require('express');
const puppeter = require('puppeteer');

const server = express();

function atualiza_dados(){

server.get('/', async (_request, response) => {
    const browser = await puppeter.launch();
    const page = await browser.newPage();
    await page.goto('https://www.placardefutebol.com.br/brasileirao-serie-a');
    const result = await page.evaluate(() =>{
        return{
            resultado: document.querySelector('.content__body').innerHTML,
        }
    });
    console.log(result);
    await browser.close();
    response.send(result.resultado);
});

    // inserir um objeto na página a apontar para o ficheiro
setTimeout( atualiza_dados, 4000 );
}
const port = 3000;
server.listen(port, () => {
console.log('Acesse em http://localhost:3000');
});
atualiza_dados()