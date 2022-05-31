# 코로나 보드로 배는 실전 웹 서비스 개발 

**코로나 보드로 배우는 실전 웹 서비스 개발**이라는 책을 통해 크롤러, 서버, 정적 웹사이트, 데이터베이스에 대해 공부


## 문제점

### 1.  ERROR #11321  PLUGIN
"gatsby-node.js" threw an error while running the createPages lifecycle:

-> 소스 에러

<br>

Error: connect ECONNREFUSED 127.0.0.1:8080
개츠비 빌드 중 오류 생김

- datda-loader.js에서 빌드 중 오류인거 같음
- const { getDataSource } = require("./src/data-loader"); 주석 처리 시 오류 안남

🚗 결론

소스 코드 전부 살펴보고 몇가지 오류 있어 수정했지만 실행이 되지 않았음

개발 서버(coronaboard-api) 실행 안해서 오류 난거임

-> 개발 서버 실행 후 개츠비 develop 시 오류 안난다.


### 2. 현재 프론트 단에서 데이터가 나오지 않음
소스 한번 다시 훑어보자

1. gatsby-node.js 에서 데이터는 받아온다.
2. gatsby clean으로 캐시 삭제 후 실행 됨




## mysql
1. mysql 접속
 - 아이디 접속 : mysql -u 아이디 -p 입력 후 비밀번호 입력

2. 데이터 베이스 사용
- use 데이터베이스




## 참고
> 부트스트랩
> https://getbootstrap.com/docs/5.2/getting-started/introduction/
> https://react-bootstrap.netlify.app/