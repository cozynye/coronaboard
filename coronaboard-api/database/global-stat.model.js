const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    return sequelize.define(
        // 매개변수 1 : 모델 이름
        'GlobalStat',
        // 매개변수 2 : 속성 목록
        {
            id : { // ID
                autoIncrement : true, // 값 자동 증가
                type : DataTypes.INTEGER.UNSIGNED, // 양의 정수
                allowNull : false,
                primaryKey : true, // id 속성이 항상 고유한 값이 됨을 보장
            },
            cc : { // 국가 코드
                type : DataTypes.CHAR(2),
                allowNull : false,
            },
            date : { // 날짜
                type : DataTypes.DATEONLY,
                allowNull : false,
            },
            confirmed : { // 확진자 수
                type : DataTypes.INTEGER,
                allowNull : false,
            },
            death : { // 사망자 수
                type : DataTypes.INTEGER,
                allowNull: true,
            },
            released : { // 완치자 수
                type : DataTypes.INTEGER,
                allowNull : true,
            },
            tested : { // 총 검사자  수
                type : DataTypes.INTEGER,
                allowNull : true,
            },
            testing : { // 검사중 수
                type : DataTypes.INTEGER,
                allowNull : true,
            },
            negative : { // 결과 음성 수
                type : DataTypes.INTEGER,
                allowNull : true,
            },
        },
        // 매개변수 3 : 추가 옵션
        {
            sequelize, // 시퀄라이즈 인스턴스
            tableName : 'GlobalStat',
            indexes : [ // 테이블 인덱스
                {
                    name : 'PRIMARY',
                    unique : true,
                    fields : [{name : 'id'}],
                },
                {
                    name : 'ccWithDate',
                    unique : true,
                    fields : [{ name : 'cc'}, { name : 'date'}],
                },
            ],
            timestamps : false, // 타임 스탬프 속성 자동 생성 X
        },
    );
}

// 첫 번째 매개변수는 객체 모델의 이름

// 두 번째 매개변수는 모델의 속성을 정의
// 데이터 베이스 테이블의 컬럼에 매핑

// 세 번째 매개변수에는 sequelize 인스턴스, 데이터베이스의 이름, 테이블의 인덱스, timestamps 설정
// timestamps 값이 true면 시퀄라이즈에서 자동으로 모델에 createAt과 updatedAt 속성을 추가하고
// 데이터 생성 날짜와 갱신 날짜를 채워줌