const axios = require('axios');
const cheerio = require('cheerio');
const { get } = require('lodash');

async function main(){
    const resp = await axios.get(
        'https://www.naver.com/'
    );
    const $ = cheerio.load(resp.data)
    const elements = $('ul.list_theme').children('li');
    let ulList = [];
    elements.each((idx, el)=>{
        ulList[idx] = {
            category : $(el).find('a.theme_info em').text(),
            title : $(el).find('a.theme_info strong').text(),
            context : $(el).find('a.theme_info p').text()

        }
    });

    console.log(ulList)
}

main();