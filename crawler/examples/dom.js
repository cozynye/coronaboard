const axios = require('axios');
const cheerio = require('cheerio');
const { get } = require('lodash');

async function main(){
    const resp = await axios.get(
        'https://yjiq150.github.io/coronaboard-crawling-sample/dom'
    );
    const $ = cheerio.load(resp.data)
    const elements = $('.slide p')
console.log($)
    elements.each((idx, el)=>{
        // text() 메서드를 사용하기 위해 node 객체인 el을 $로 감싸 cheerio 객체로 변환
        console.log($(el).text())
    });
}

main();