책 서평

장점
1. 프론트부터 백엔드까지 책만 자세하게 읽는다면 혼자서 웹 어플리케이션 제작 가능하게 만들어 준다
2. 아무래도 기본적인 지식이 있는 상태로 읽어야 이해가 되며 아무것도 모르는 사람이 읽게 된다면 이해하기 힘들 수 있다.


1. 개발자 도구 설명
2. 기본적인 웹 지식 설명


# CSS 셀렉터 문법

CSS에서는 스타일을 적용할 대상을 선택하기 위해서 선택자(selector)를 사용하며 대표적으로 id 선택자, 태그 선택자, 클래스 선택자가 있다.



## 예제를 통해 살펴보자

아래의 html을 대상으로 셀렉터에 대해 알아보자.

```html
<div class="container">
        <h1>CSS 셀렉터 문법</h1>
        <p>셀렉터 문법에 대해서 알아보자</p>
        <div class = "article">
            <h2 id="tag">태그로 찾기</h2>
            <p>getElementsByTagName()</p>
        </div>
        <div class = "article">
            <h2>클래스 속성값으로 찾기</h2>
            <p>getElementsByClassName()</p>
        </div>
        <div class = "article">
            <h2>id 값으로 찾기</h2>
            <p id='test'>getElementsById()</p>
            <input class="form-control" type="text" value="입력">
            <input type="password" value="1234" id="password">
        </div>
</div>
```

<br>

html 문서에서 요소(element)를 찾는 방법은 여러가지가 있다.

```js
// article 클래스 속성값을 가진 요소의 내부 안에 있는 p태그 내용 출력
    const articleClasses = document.getElementsByClassName('article');
        for(const articleElement of articleClasses){
            const paragraphElements = articleElement.getElementsByTagName('p');
            for(const pElements of paragraphElements){
                console.log(pElements.textContent)
            }
        }
```

```js
// article 클래스 속성값을 가진 요소의 내부 안에 있는 p태그 내용 출력
    const paragraphElements = document.querySelectorAll('.article p')
        for(const paragraphElement of paragraphElements){
            console.log(paragraphElement.textContent)
        }
```

위의 예제와 같이 getElementsByTagName(), getElementsByClassName(), getElementsById()와 querySelectorAll()가 있는데 첫번째 예제에서 보이는 함수들은 간단한 조건만으로 요소를 찾는데 유용하고 복잡한 조건을 검색하는 것은 쉽지 않다.

<br>

### 1. 기본 셀렉터
> Document.querySelector()는 선택된 선택자 또는 선택자 그룹과 일치하는 문서 내 첫 번째 Element를 반환한다. 일치하는 요소가 없으면 null을 반환한다.

> Document.querySelectorAll()는 선택된 선택자 그룹에 일치하는 도큐먼트의 엘리먼트 리스트를 나타내는 NodeList를 반환한다.

#### 1-1. 태그 셀렉터
```js
console.log(document.querySelectorAll('p')); // NodeList(5) [p, p, p, p, p]
```

#### 1-2. ID 셀렉터
```js
console.log(document.querySelectorAll('#tag')); // NodeList [h2#tag]
```

#### 1-3. 클래스 셀렉터
```js
console.log(document.querySelectorAll('.article')); //NodeList(3) [div.article, div.article, div.article]
```

#### 1-4. 속성 셀렉터
```js
// value라는 속성을 가진 요소 검색
console.log(document.querySelectorAll('[value]')); // NodeList(2) [input.form-control, input]
// value의 속성 값이 1234인 요소 검색
console.log(document.querySelectorAll('[value="1234"]')); // NodeList [input]
```

<br>
  

### 2. 셀렉터 조합하기

#### 2-1\. OR 조건으로 찾기

여러 셀렉터를 ,로 연결하면 각 조건을 만족하는 요소 모두를 검색

```js
// h1 태그 또는 input 태그 찾기
console.log(document.querySelectorAll('h1 ,input')); // NodeList(3) [h1, input.form-control, input#password]
```

#### 2-2\. AND 조건으로 찾기

다른 종류의 기본 셀렉터를 띄어쓰기 없이 이어붙이면 해동 조건들을 동시에 만족하는 요소를 검색. 이어 붙일 때 태그 셀렉터가 제일 앞에 나와야 하고 클래스 셀렉터나 속성 셀렉터는

```js
// div 태그에 article 클래스 속성값이 지정된 요소 검색
 console.log(document.querySelectorAll('div.article'));
// input 태그에 id 속성값이 password이고 type 속성값이 password인 요소 검색
console.log(document.querySelectorAll('input[type="password"]#password'));
```

<br>
  

### 3\. 계층 구조 조합하기

#### 3-1\. 계층 순서로 요소 찾기

여러 셀렉터를 공백으로 연결하면, 연결된 순서대로 부모/자식 계층 관계를 가지는 요소를 검색

```js
// div 태그를 상위 요소로 가진 모든 p 태그 요소 검색
console.log(document.querySelectorAll('div p')) // NodeList(5) [p, p, p, p, p]
// div 태그를 상위 요소로 두 번 가진 모든 p 태그 요소 검색
console.log(document.querySelectorAll('div div p')) // NodeList(4) [p, p, p, p]
```

#### 3-2\. 직접적인 자식 요소 찾기

여러 기본 셀렉터를 > 기호를 사용해 연결하면 부모/자식 계층 관계를 가지는 요소를 검색

```js
// container 클래스 속성 값을 가진 div 요소의 직접적인 자식 중 p 태그 요소 검색
console.log(document.querySelectorAll('div.container > p')) // NodeList [p]
```

#### 3-3\. 동일한 부모를 가진 요소 찾기

여러 기본 셀렉터를 ~ 기호를 사용하여 연결하면 찾은 요소를 기준으로 동일한 부모를 갖는 조건을 만족하는 모든 요소 검색

```js
// id가 test인 요소와 동일한 부모를 가진 input 태그 요소 검색
console.log(document.querySelectorAll('#test ~ input')) // NodeList(2) [input.form-control, input#password]
```

#### 3-4\. 동일한 부모를 가지면서 인접한 요소 찾기

여러 기본 셀렉터를 + 기호를 사용하여 연결하면 찾은 요소를 기준으로 동일한 부모를 가지면서 해당 요소 바로 다음에 나오는 요소 하나를 검색

```js
// id가 test인 요소와 동일한 부모를 가진 input 태그 요소 검색
console.log(document.querySelectorAll('#test + input')) // NodeList [input.form-control]
```



# Next.js, Gatsby 알아보자

리액트 프레임워크 중 대표적인 것들을 비교해보자

> https://nextjs.org/
> https://www.gatsbyjs.com/


공통점으로
### 리액트로 프로그램을 만들면 디폴트로 클라이언트 사이드 렌더링이 된다.
즉 유저가 웹 사이트로 이동한 후에 js를 다운 받고 리액트가 UI를 빌드하게 된다.
-> 인터넷 문제가 있거나 js파일에 문제가 있거나 하면 유저는 빈 화면만 보게 된다.
-> 리액트만 사용해 해결해도 되지만 이 프레임워크들을 서버사이드 렌더링을 통해 문제를 해결할 수 있다.

### CSR의 문제점 중 하나인 SEO에 대한 문제를 프레임워크를 쓴다면 사용자에게 보여질 콘텐츠를 포함하고 있는 HTML 문서를 응답으로 전달하므로 해결할 수 있다.

<br><br>

---
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png"/>

# 👍 Next.js
## NextJs는 생산(Production)을 위한 리액트 프레임워크
## Next.js는 SSR를 구축하는데 사용된다. 그러면서도 정적 페이지 생성, CDN 캐싱 등 정적 페이지 생성에서 활용할 수 있는 모든 이점들을 지원한다.
## 일반적으로 Next는 SSR과 정적 페이지 최적화를 모두 지원하는 사이트가 필요한 경우 사용된다.

<br>

### 장점 
##### 1. 정적으로 만들어진 React Application을 가장 쉽게 제공한다.
##### 2. 새로운 Framework를 배울 필요 없이 Next.js에서 단 한 줄로 정적 페이지를 배포할 수 있다.
##### 3. ‘styled-jsx’ 라이브러리를 제공할 뿐만 아니라 사용자들이 즐겨 사용하는 CSS-in-js Solution(styled-components, emotion 등)을 같이 사용할 수도 있다.
##### 4. 자동 코드 분할, 파일에 기반한 Routing, Hot Reloading, SSG로 불리는 Universal Rendering을 사용자가 따로 설정할 필요 없이 사용 가능하다.
##### 5. Babel과 Webpack을 컨트롤할 수 있으며, 맞춤형 서버와 Routing, next-plugin을 사용해서 완벽하게 확장할 수 있다.
##### 6. 더 작은 빌드 용량을 위한 최적화를 제공하고 있으며, 향상을 위한 수십가지의 편의 기능을 제공하기 때문에 상용 친화적으로 개발이 가능하다.
##### 7. SSR 뿐만 아니라 SSR도 지원


> SSG
>> Static-Generation(또는 SSG) 방식은 빌드 타임(npm run build)시 우리가 pages 폴더에서 작성한 각 페이지들에 대한 각각의 HTML 문서를 생성해서 정적(static) 문서로 가지고 있게 된다.이 페이지에 대한 유저들의 요청이 발생하게 되면, 요청에 따라 계속 서버에서 재생성 하는 것이 아니라 이미 생성이 완료된 페이지를 반환해주게 된다. 따라서 생성이 완료된 HTML 문서를 재활용 하기에 응답 속도가 매우 빠르다.

<br>

### 단점
##### 1. 기본 지원 플러그인이 약간 불편하다.
##### 2. SSR로 인한 라이브러리 호환성 이슈가 존재한다.
##### 3. Gatsby에 비해 자동화가 부족하여 직접 Node 코드를 작성하는 경우가 많았다.

<br><br>


---

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Gatsby_Logo.png/220px-Gatsby_Logo.png"/>

# 👍 Gatsby
## Gastby.js는 정적으로 HTML을 생성하는 웹 사이트를 구축하는 데 사용되는 React 프레임워크.
### React, GraphQl, react-router등을 결합하여 개발자가 직접 webpack 등의 개발환경을 설정할 필요없이 빠르게 웹 사이트를 구축하는데 도움을 줍니다.
### Gatsby는 페이지 수를 예측할 수 있고 콘텐츠가 대부분 정적으로 유지되는 사이트를 구축하는데 주로 사용됩니다.(블로그, 포트폴리오 사이트 등)

<br>

## 개츠비 장점
##### 1. GraphQL을 기반으로 구축된 데이터 계층
##### 2. 정적 페이지 생성과 지능형 페이지 렌더링을 결합하여 중요한 컨텐츠만 선택적으로 미리 로드하여 빠른 웹사이트를 제공한다.
##### 3. Javascript, Git, CI/CD 등과 같은 도구와 웹 기술들이 결합 된 Gatsby는 유지 관리 및 최적화에 드는 개발자의 시간을 줄여준다.
##### 4. 다양한 테마, 플러그인, 스타터가 존재하며, 이를 사용하여 간단하게 웹사이트를 구축할 수 있다.(ex. gatsby-starter-bee)

<br>

## 단점
##### 1. 웹페이지의 콘텐츠 내용이 변경될 때마다 다시 빌드하여 배포해야 하는 번거로움
##### 2. 실시간으로 변경되는 데이터나, 게시판 같이 사용자들이 동적으로 만들어내는 컨텐츠를 보여주는 것에 최적화되어 있지는 않음

<br><br>

----

### 그럼 언제 Next.js를 쓰고 Gatsby를 쓰는게 좋을까?

## 1. Next.js를 사용할 때
콘텐츠가 많거나 시간이 지남에 따라 콘텐츠가 증가할 것으로 예상되는 경우에는 사이트를 구축하는 데 시간이 많이 걸리므로 SSR을 사용하는 것이 좋다.

## Gatsby를 사용할 때
소규모 웹사이트와 블로그를 구축하면서 페이지의 수를 예상할 수 있다면 Gatsby를 사용하는 것이 좋으며 Gatsby는 많은 템플릿과 테마, 플러그인을 가지고 있어 빠른 개발이 가능하다.


#### ✌️ 둘 다 장단점이 존재하기 때문에 어떤 프레임워크를 쓸 지는 사용 목적과 개발 성향에 따라 접근해야한다.




> 참고
> https://remix.run/