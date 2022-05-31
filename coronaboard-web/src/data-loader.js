const _ =require('lodash'); // 편의 기능 제공하는 라이브러리
const axios = require('axios'); // http 클라이언트
const {subDays} = require('date-fns'); // 날짜
const { format, utcToZonedTime} = require('date-fns-tz'); // 시간 포매팅
const countryInfo = require('../../tools/downloaded/countryInfo.json');

async function getDataSource(){
  //cc를 키값으로 상세정보를 값으로 갖는 맵으로 가공
    const countryByCc = _.keyBy(countryInfo, 'cc');
    const globalStats = await generateGlobalStats();
    return{
      globalStats,
        countryByCc,
    };
}

async function generateGlobalStats() {

    //http 클라이언트 생성
    const apiClient = axios.create({
        baseURL:'http://localhost:8080'
      });

    // GET /global-stats API 호출 -page 210
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

    console.log(createGlobalStatWithPrevField(
      groupedByDate[today],
      groupedByDate[yesterday],
    ))
  
    return createGlobalStatWithPrevField(
      groupedByDate[today],
      groupedByDate[yesterday],
    );
  }

  generateGlobalStats()

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