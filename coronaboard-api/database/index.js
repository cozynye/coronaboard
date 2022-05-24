const Sequelize = require('sequelize');

//데이터 베이스 연결 정보 설정
const config = {
    host : process.env.CORONABOARD_MYSQL_HOST || '127.0.0.1',
    port : 3306, // mysql 서버는 기본적으로 3306 포트를 사용
    database : 'coronaboard',
    user : 'coronaboard_admin',
    password : process.env.CORONABOARD_MYSQL_PASSWORD || '4364',
};

//데이터베이스 연결 정보를 입력해 시퀄라이즈 인스턴스 생성
const sequelize = new Sequelize(config.database, config.user, config.password, {
    host : config.host,
    dialect : 'mysql',
});

//외부 모듈에서 사용할 수 있도록 내보내기
module.exports = {
    sequelize,
    //데이터 베이스 연결이 완료된 객체 모델 생성
    GlobalStat : require('./global-stat.model')(sequelize),
    // 또다른 객체 모델이 필요하면 똑같은 방식으로 추가
};

// require('./global-stat.model')(sequelize)는 sequelize 인스턴스를 입력으로 건네 global-statusbar.model.js 파일에서
// 익스포트한 화살표 함수를 호출하는 코드
// 이렇게 호출하면 화살표 함수가 데이터베이스 연결까지 완료된 GlobalStat 객체 모델을 생성해 반환