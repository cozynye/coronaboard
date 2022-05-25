const _ =require('lodash'); // 편의 기능 제공하는 라이브러리
const axios = require('axios'); // http 클라이언트
const {subDays} = require('date-fns'); // 날짜
const { format, utcToZonedTime} = require('date-fns-tz'); // 시간 포매팅
const countryInfo = require('../../tools/downloaded/countryInfo.json');

console.error('여기22')
async function getDataSource(){
    console.error('여기')
    const countryByCc = _.keyBy(countryInfo, 'cc');
    console.error('error')
    console.log(countryByCc.KI)
    const globlalStats = await generateGlobalStats();
    return{
        globlalStats,
        countryByCc,
    };
}

async function generateGlobalStats() {

    //http 클라이언트 생성
    const apiClient = axios.create({
        baseURL: process.env.CB_API_BASE_URL || 'http://localhost:8080',
      });
    // GET /global-stats API 호출
    const response = await apiClient.get('global-stats');

    // 날짜 기준 그룹핑
    const groupedByDate = _.groupBy(response.data.result, 'date');


    const now = new Date('2021-06-05');
    const timeZone = 'Asia/Seoul';
    const today = format(utcToZonedTime(now, timeZone), 'yyyy-MM-dd');
    const yesterday = format(
      utcToZonedTime(subDays(now, 1), timeZone),
      'yyyy-MM-dd',
    );
  
    if (!groupedByDate[today]) {
      throw new Error('Data for today is missing');
    }
  
    return createGlobalStatWithPrevField(
      groupedByDate[today],
      groupedByDate[yesterday],
    );
  }


  //오늘, 어제 데이터를 모두 가진 객체 생성
  function createGlobalStatWithPrevField(todayStats, yesterdayStats) {

    //어제 데이터를 국가 코드 기준으로 변환
    const yesterdayStatsByCc = _.keyBy(yesterdayStats, 'cc');
  
    // 국가별로 오늘데이터와 어제 데이터를 한번에 가질수있도록 변환
    const globalStatWithPrev = todayStats.map((todayStat) => {
      const cc = todayStat.cc;
      const yesterdayStat = yesterdayStatsByCc[cc];
      if (yesterdayStat) {
        return {
          ...todayStat,
          confirmedPrev: yesterdayStat.confirmed || 0,
          deathPrev: yesterdayStat.death || 0,
          negativePrev: yesterdayStat.negative || 0,
          releasedPrev: yesterdayStat.released || 0,
          testedPrev: yesterdayStat.tested || 0,
        };
      }
  
      return todayStat;
    });
  
    return globalStatWithPrev;
  }

module.exports = {
    getDataSource,
}