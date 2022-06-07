# 코로나 보드로 배는 실전 웹 서비스 개발 

**코로나 보드로 배우는 실전 웹 서비스 개발**이라는 책을 통해 크롤러, 서버, 정적 웹사이트, 데이터베이스에 대해 공부

<br><br>

---

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

<br>

### 2. 현재 프론트 단에서 데이터가 나오지 않음
소스 한번 다시 훑어보자

1. gatsby-node.js 에서 데이터는 받아온다.
2. gatsby clean으로 캐시 삭제 후 실행 됨

<br>

### echart.js 파일에서 함수를 불러오지 못함
/Users/pc/Desktop/project/coronaboard/coronaboard-web/src/pages/chart/bar.js

  54:12  error  'Echart' is not defined  react/jsx-no-undef

-> import 할 때 함수명은 Echart 였는데 import {EChart} from '../../components/echart';이렇게 함으로써 에러생겼음
-> 대소문자 구분 잘해야한다.!



---
<br><br>

## mysql
1. mysql 접속
 - 아이디 접속 : mysql -u 아이디 -p 입력 후 비밀번호 입력

2. 데이터 베이스 사용
- use 데이터베이스



---
<br><br>

## 데이터 차트

### 구글 지오 차트
- 구글에서 지도에 데이터를 시각화하여 표현하는 지오차트를 제공
- 지오차트의 기능을 이용해 데이터를 컬러에 매핑해서 시각적인 분석을 도와주는 데이터 시각화 기법 사용 가능

<br>

### 아파치 이차트
- 구글 차트에 비해 더 다양한 차트들을 제공(예제 포함)
- 데이터 줌 기능 제공
> https://echarts.apache.org/examples/en/index.html

---
<br><br>

## 참고
> https://getbootstrap.com/docs/5.2/getting-started/introduction/

> https://react-bootstrap.netlify.app/

> https://developers.google.com/chart/interactive/docs

> https://ko.wikipedia.org/wiki/ISO_3166-2:KR

> https://echarts.apache.org/examples/en/index.html

> https://echarts.apache.org/en/option.html#title

> https://regex101.com/