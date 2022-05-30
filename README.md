# 코로나 보드로 배는 실전 웹 서비스 개발 

**코로나 보드로 배우는 실전 웹 서비스 개발**이라는 책을 통해 웹사이트를 전반적으로 다루는 기술을 배웁니다


### 문제점

1.  ERROR #11321  PLUGIN
"gatsby-node.js" threw an error while running the createPages lifecycle:

Error: connect ECONNREFUSED 127.0.0.1:8080
개츠비 빌드 중 오류 생김

- datda-loader.js에서 빌드 중 오류인거 같음
- const { getDataSource } = require("./src/data-loader"); 주석 처리 시 오류 안남


#### 결론

소스 코드 전부 살펴보고 몇가지 오류 있어 수정했지만 실행이 되지 않았음

백엔드 서버 실행 안해서 오류 난거임

-> 백엔드 서버 실행 후 개츠비 develop 시 오류 안난다.


2. 현재 프론트 단에서 데이터가 나오지 않음
소스 한번 다시 훑어보자


