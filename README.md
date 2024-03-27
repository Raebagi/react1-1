# 박래현 202030111

* [1주차 강의 정리](#3월-13일-강의-내용-정리)<br>
* [2주차 강의 정리](#3월-20일-강의-내용-정리)<br>
* [3주차 강의 정리](#3월-27일-강의-내용-정리)<br>

# 3월 27일 강의 내용 정리

## JSX(JavaScript XML)란?

- javascript에 XML을 추가한 확장 문법입니다. 
- [JSX](https://ko.reactjs.org/docs/introducing-jsx.html,"JSX 소개")
 
```js
const element = <h1>Hello, world!</h1>;
```

## JSX의 역할

- JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
- React 가 createElement함수를 사용하여 자동으로 자바스크립트로 변환해줍니다.
- 만일 JS작업할 경우 직접 createElemenet함수를 사용해야 합니다.
- 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여 주는 역할을 합니다.

## JSX의 장점

- 코드가 간결해짐
- 가독성이 향상됨
- Injection Attack이라 불리는 해킹을 방어함으로써 보안에 강함

## JSX 사용법

- 모든 자바스크립트 문법을 지원함
- 자바스크립트 문법에 XML과 HTML을 섞어서 사용
- 아래 코드의 2번 라인처럼 섞어서 사용
- 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {} 괄호를 사용합니다.

```js  
    01  const nmae = '소플'; 
    02  const element = <h1>안녕, {name}</h1>
    03 
    04  ReactDOM.render(
    05      element,
    06      document.getElementById('root')
    07  ); 
```




### Book.jsx
![Book jsx](https://github.com/Raebagi/react1-1/assets/144668955/6df3ffe4-f4f1-4ff5-b641-1dd5ac88d22a)
### Library.jsx
![Library jsx](https://github.com/Raebagi/react1-1/assets/144668955/66795ed8-a3a7-43cf-a307-16fc7e33e8e0)

* index.js에 Library import해서 사용

### index.js
```js
import Library from './chaptor03/Library';



  <React.StrictMode>
    <Library/>
  </React.StrictMode>
  ```

## 엘리먼트란 ?

### 1. 엘리먼트의 정의
- 엘리먼트는 리액트 앱을 구성하는 요소를 의미
- 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명
- 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미

### 리액트 엘리먼트와 DOM 엘리먼트의 차이
- 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있음
- DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움
- 리엑트 엘리먼트는 변화한 부분만 갖고 있어 가벼움

![차이점](https://github.com/Raebagi/react1-1/assets/144668955/c359ed07-10c5-49f8-9fc5-6ceea0fb8d8d)

### 2. 엘리먼트의 생김새
- 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재
- 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 JS객체
- 이 객체는 마음대로 변경할 수 없는 불변성을 가짐

#### 버튼을 나타내기 위한 예시

![EX](https://github.com/Raebagi/react1-1/assets/144668955/dae7aa8a-53dc-438c-b72b-4490f9d0ee28)


### 3. 엘리먼트의 특징<br>
- 리액트 엘리먼트의 가장 큰 특징은 불변성
- 즉, 한 번 생성된 엘리먼트의 childred이나 속성(attributes)을 바꿀 수 없음

### 만일 내용이 바뀐다면?
- 이 때는 컴포넌트를 통해 새로운 엘리먼트 생성
- 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸기
- 이렇게 교체하는 작업을 위해 Virture DOM을 사용

### 4.2 엘리먼트 렌더링하기

#### Root DOM node

다음 html코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드입니다. <br>
이 div 태그안에 리액트 엘리먼트가 렌더링 되며, 이 것을 Root DOM node라고 합니다.<br>

```js
01 <div id = "root"></div>
```

엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요 <br>

```js
01 const element = <h1>안녕, 리액트</h1>;
02 ReactDOM.render(element, document.getElemenetById('root'));
```

이때 render()함수를 사용하게 됨<br>
이 함수의  첫 번째 파라메터는 출력할 리액트 엘리먼트이고 두 번째 파라메터는 출력할 타겟을 나타냄<br>
즉 리액트 렌더링의 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정이라고 할 수 있음<br>

### 4.3 렌더링된 엘리먼트 업데이트하기

- 다음 코드는 tick()함수를 정의하고 있음
- 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 렌더링 해 줌
- 허나 라인 12를 보면 setInterval()함수를 이용해서 위에서 정의한 tick()를 1초에 한번 씩 호출
- 결국 1초에 한번씩 새로운 element를 만들고 그것을 교체
- 다음 코드를 실행 후, 크롬 개발자도구에서 확인해보면 시간 부분만 업데이트 되는것을 확인

```js
01  function tick() {
02    const element = (
03      <div>
04        <h1>안녕, 리액트!</h1>
05        <h2>현재 시간: {new.Date().toLocaleTimeString()}</h2>
06      <div>
07    );
08
09   ReactDOM.render(element, document.getElementById('root'));
10  }
11
12  setInterval(tick,1000);
```

# 3월 20일 강의 내용 정리

*[목차](#박래현-202030111)

## 리액트의 장점

#### 빠른 업데이트 

#### 렌더링 속도 
- 이것을 가능하게 만드는건 Virture DOM이다.
  Virture DOM은 DOM조작이 변화하지 않는 것까지 생각하여 고안한 방법이다.

## 리액트의 단점
#### 방대한 학습량
- 자바스크립트를 공부한 경우 빠르게 학습 가능
#### 높은 상태 관리 복잡도
- state, component life cycle 등의 개념이 있지만, 그리 어렵지 않다.

- npx create-react-app test-app
- npm start

## 3월 13일 강의 내용 정리
*[목차](#박래현-202030111)

### GIT 명령어 정리

#### git init
* 리포지토리 초기화. '.git'폴더 생성

#### git status
* 리포지토리 상태 표시

#### git commit -m '커밋메세지'
* 스테이지 영역에 기록된 시점들 파일을 실제 리포지토리 변경 내역에 반영

#### git remote add origin 사용자명/저장소이름.git
* 주소의 저장소를 원격 저장소로 설정

#### git remote -v
* 저장소 url 확인

#### git push -u origin main
* main 브랜치로 push

#### git branch
* 브랜치 목록 표시, 현재 어떤 브랜치인지 표시

