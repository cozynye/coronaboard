const express = require('express');
const bodyParser = require('body-parser');
//데이터 베이스 연결해 테이블 생성
const {sequelize} = require('./database');

const globalStatController = require('./controller/global-stat.controller');
const keyValueController = require('./controller/key-value.controller')

async function lanunchServer(){
    const app = express(); //

    app.use(bodyParser.json());

    app.get('/', (req, res)=>{
     res.json(`스타트`)
    }); 

    app.get('/global-stats', globalStatController.getAll);
    app.post('/global-stats', globalStatController.insertOrUpdate);
    app.delete('/global-stats', globalStatController.remove);

    app.get('key-value/:key', keyValueController.get)
    app.post('key-value', keyValueController.insertOrUpdate)
    app.delete('key-value/:key', keyValueController.remove)

    try{
        await sequelize.sync();
        console.log('Database is ready');
    }catch(error){
        console.log('서버에러')
        console.log(`error : ${error}`)
        process.exit(1);
    }


    const port = process.env.PORT || 8080; // 포트값 설정

    app.listen(port, ()=>{
        console.log(`port is ${port}`)
    })
}


lanunchServer();

// 객체 모델과 데이터베이스 동기화 방법
// sequelize.sync() : 동기화하려는 테이블 존재하면 작업 X, 테이블 없을 때 새로 생성
// sequelize.sync({force:true}) : 동기화하려는 테이블 존재하면 삭제하고 새로 생성
// sequelize.sync({alter : true}) : 동기화하려는 테이블의 필드와 자료형을 확인해 객체 모델 정의와 다르다면 같아지도록 변경