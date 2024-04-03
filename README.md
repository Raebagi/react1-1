# 박래현 202030111

* [1주차 강의 정리](#3월-13일-강의-내용-정리-1주차)<br>
* [2주차 강의 정리](#3월-20일-강의-내용-정리-2주차)<br>
* [3주차 강의 정리](#3월-27일-강의-내용-정리-3주차)<br>
* [4주차 강의 정리](#4월-3일-강의-내용-정리-4주차)<br>

# 4월 3일 강의 내용 정리 (4주차)

## 컴포넌트에 대해 알아보기

- 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 가짐.
- 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미.
- 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서 유사함.
- 다만 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
- 엘리먼트를 필요한 만큼 만들어 사용함

## Props에 대해 알아보기

### 1. Props의 개념

- props는 prop(property : 속성, 특성)의 준말.
- 이 props가 바로 컴포넌트의 속성임.
- 컴포넌트에 어떤 속성, props를 넣느냐에 따라 속성이 다른 엘리먼트가 출력.
- props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체.
- 에어비앤의의 예도 마찬가지

![props](https://github.com/Raebagi/react1-1/assets/144668955/b1620736-81f4-43ed-8352-4615f705da03)

### 2. Props의 특징

- 읽기 전용, 변경할 수 없음.
- 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됨.

### Pure 함수 vs Impure함수

- Pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수.
- Impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수입니다.

```js
01  // pure함수
02  // input을 변경하지 않으며 같은 input에 대해서 항상 같은 output을 리턴
03  function sum(a,b) {
04      return a + b;
05  }
```

```js
01  //impure 함수
02  //input을 변경함
03  function withdraw(account, amount) {
04    account.total -= amount;
05  }
```

### 3. props의 사용법
- JSX에서는 key-value쌍으로 props를 구성

```js
01  function App(props){
02    return (
03      <profile
04        name = "소플"
05        introduction="안녕하세요, 소플입니다."
06        viewCount={1500}
07      />
08    );
09  }
```
#### 위의 코드는

1. App컴포넌트에서 props를 인자로 받아,
2. 내부의 profile 컴포넌트로 전달해서 name, introduction, viewCount에 각각 속성을 할당하는,
3. 이 때 전달되는 props는 다음과 같은 자바 스크립트 객체

```js
01  {
02    name: "소플",
03    introduction: "안녕하세요, 소플입니다.",
04    viewCount : 1500
05  }
```

- JSX에서는 중괄호를 사용하면 JS코드를 넣을 수 있음.
- 다음 코드처럼 props를 통해서 value를 할당 할 수 있고, 직접 중괄호를 사용하여 할당할 수 있음.

```js
01  function App(props){
02    return (
03      <Layout
04        width={2560}
05        height={1440}
06        header={
07          <Header title="소플의 블로그입니다." />
08        }
09        footer={
10          <Footer />  
11        }
12      />
13    );
14  }
```

- JSX를 사용하지 않는 경우 props의 전달 방법은 createElement()함수를 사용

```js
01  React.creatElement(
02    type,
03    [props],
04    [...children]
05  )
```
- createElement()함수의 두번 째 매개변수가 바로 props입니다.
- JSX를 사용하지 않으면 다음과 같이 코드를 작성할 수 있음

```js
01 React.createElement(
02    Profile,
03    {
04      name: "소플",
05      introduction: "안녕하세요, 소플입니다."
06      viewCount: 1500
07    },
08    null  
09  );
```

## 컴포넌트 만들기

### 1. 컴포넌트의 종류

- 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용
- 이후 Hook이라는 개념이 나오며 최근에는 함수형 컴포넌트를 주로 사용
- 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에,
- 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해두어야함

![컴컴](https://github.com/Raebagi/react1-1/assets/144668955/03aa4f29-9056-4334-b54b-9a3f5e954069)

### 2. 함수형 컴포넌트

- Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕", 뒤에 넣어 반환.

```js
01  function Welcome(props){
02    return <h1>안녕, {props.name}</h1>;
03  }
```

### 3. 클래스형 컴포넌트

- Welcome컴포넌트는 React.Component class로 부터 상속받아 선언.
```js
01    class Welcome exends React.component{
02      render() {
03        return <h1>안녕, {this.props.name}</h1>;
04      }
05    }
```

### 4. 컴포넌트 이름 짓기

- 이름은 항상 대문자로 시작
- 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식. html tag
#### * 컴포넌트 파일 이름과 컴포넌트 이름은 같게함.

### 5. 컴포넌트의 렌더링

- 렌더링의 과정은 다음 코드와 같음

```js
01  function Welcome(props){
02    return <h1>안녕, {props.name}</h1>;
03  }
04
05  const element = <Welcome name="인제" />;
06  ReactDom.render(
07    element,
08    document.getElementById('root')
09  );
```

## 5.4 컴포넌트 합성

- 컴포넌트 합성은 여려개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것
- 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있음.
- 다음 코드에서는 props의 값을 다르게 해서 welcome 컴포넌트를 여러 번 사용함.

```js
01  function Welcome(props){
02    return <h1>Hello, {props.name}</h1>;
03  }
04
05  function App(props) {
06    return (
07      <div>
08        <Welcome name = "Mike" />
09        <Welcome name = "Steve" />
10        <Welcome name = "Jane" />
11      </div>
12    )
13  }
14
15  ReactDOM.Render(
16    <App />,
17    document.getElementById('root')  
18  );
```

![컴포합성2](https://github.com/Raebagi/react1-1/assets/144668955/57e76ee2-e16b-4f35-84bf-f5e1dee9ec2e)

## 5.5 컴포넌트 추출

- 복잫반 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있음
- 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만든느 것.
#### *실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는것이 좋음.

- Comment는 댓글 표시 컴포넌트입니다.
- 내부에는 이미지, 이름, 댓글과 작성일이 포함되어 있음.
- 첫 번째로 이미지 부분을 Avatar 컴포넌트로 출력 해봄.

```js
01  function Avatar(props){
02    return(
03      <img className="avatar"
04        src = {props.user.avatarUrl}
05        alt = {props.user.name}
06      />  
07    );
08  }
```
![캡처2](https://github.com/Raebagi/react1-1/assets/144668955/d800d9f2-7511-4343-899d-4914659c4847)

- 두 번째로 사용자 정보 부분을 추출함.
- 컴포넌트 이름은 UserInfo로 함. React 컴포넌트 이름은 Camel notation을 사용.

- 추출 후 다시 결합한 UserInfo를 Comment 컴포넌트에 반영하면 다음과 같은 모습이 됨.
- 처음에 비해 가독성이 높아진 것을 확인.

![zjavh](https://github.com/Raebagi/react1-1/assets/144668955/0695959a-6d1c-4ef0-b17c-4e60b7463950)

#### * 기본적으로는 한 컴포넌트에 하나의 기능을 수행하도록 설계하는 것이 바람직함

## 5.6(실습) 댓글 컴포넌트 만들기
- 프로젝트 디렉토리에서 /src/chaptor_05 디렉 생성.
- 그 안에 Comment.jsx 파일 생성 <br>
https://github.com/Raebagi/react1-1/blob/c7104dfeb4312fde4b2a9727affb695ab694685a/test-app/src/chaptor05/Comment.jsx#L1-L49
- 다음으로 CommentLisx.jsx파일 생성 <br>
https://github.com/Raebagi/react1-1/blob/c7104dfeb4312fde4b2a9727affb695ab694685a/test-app/src/chaptor05/CommentList.jsx#L1-L12

## 6.1 state
#### 1. State란?
- State는 리액트 컴포넌트의 상태를 의미함.
- 상태의 의미는 정상 or 비정상이 아니라 컴포넌트의 데이터를 의미
- 정확히는 컴포넌트의 변경가능한 데이터를 의미
- State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함.

#### 2. State의 특징

- 리액트만의 특별한 형태가 아닌 자바스크립트의 객체.
- 예의 LikeButton은 class컴포넌트임.
- constructor 은 생성자이고 그 안에 있는 this.state가 현 컴포넌트의 state임
- state는 변경이 가능하나 직접 수정 x
- 불가능 하다고 생각하는것이 좋음.
- state를 변경하고자 할 때는 setstate()함수 사용
```js
01  //state를 직접 수정(잘못된 사용범)
02  this.state = {
03    name : "Inje"
04  };
05
06  // setState 합수를 통한 수정
07  this.setState({
08    name : "Inje"
09  });
```
![zjavhzzz](https://github.com/Raebagi/react1-1/assets/144668955/de58ce1c-1700-40cf-b33b-57c85ffe35fe)



## 6.2 생명주기에 대해 알아보기

- 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타냄.
- constructor가 실행  되며 컴포넌트 생성.
- 생성 직후 componentDidMount() 함수 호출
- 컴포넌트가 소멸하기 전까지 여러번 렌더링
- 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어짐.
- 그리고 렌더링이 끝나면 componentDinUpdate()함수 호출
- 마지막으로 컴포넌트 언마운트 되면 componentWillUnmount() 함수가 호출.
![safsaf](https://github.com/Raebagi/react1-1/assets/144668955/502cf9ab-6fb7-45f3-aed8-0603f9f515f2)
# 3월 27일 강의 내용 정리 (3주차)

## JSX(JavaScript XML)란?

- javascript에 XML을 추가한 확장 문법입니다. 
- [JSX](https://ko.reactjs.org/docs/introducing-jsx.html,"JSX 소개")
 
```js
01 const element = <h1>Hello, world!</h1>;
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

# 3월 20일 강의 내용 정리 (2주차)

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

## 3월 13일 강의 내용 정리 (1주차)
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

