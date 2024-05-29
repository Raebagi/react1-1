# 박래현 202030111

* [1주차 강의 정리](#3월-13일-강의-내용-정리-1주차)<br>
* [2주차 강의 정리](#3월-20일-강의-내용-정리-2주차)<br>
* [3주차 강의 정리](#3월-27일-강의-내용-정리-3주차)<br>
* [4주차 강의 정리](#4월-3일-강의-내용-정리-4주차)<br>
* [5주차 강의 정리](#4월-17일-강의-내용-정리-5주차)<br>
* [7주차 강의 정리](#5월-1일-강의-내용-정리-7주차)<br>
* [8주차 강의 정리](#5월-8일-강의-내용-정리-8주차)<br>
* [9주차 강의 정리](#5월-22일-강의-내용-정리-9주차)<br>

# 5월 22일 강의 내용 정리 (9주차)

### 11.1 폼이란?
- 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됨.

```js
<form>
  <label>
    이름:
    <input type = "text" name = "name" />
  </label>
  <button type = "submit">제출</button>
</form>
```
### 11.2 제어컴포넌트

- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트임.

### 9.5 (실습) 로그인 여부를 나타내는 툴바 만들기

### 리스트와 키란 무엇인가?
* 리스트는 자바스크립트의 변순 객체를 하나의 변수로 묶어놓은 배열과 같은 것입니다.
* 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
* 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링 할 수 있습니다.
### 여러 개의 컴포넌트 렌더링 하기
* 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를 map() 함수를 이용하여 렌더링 합니다.

### 10.4 리스트의 키에 대해 알아보기

- 리스트에서 키는 "리스트 에서 아이템을 구별하기 위한 고유한 문자열"임.
- 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용
- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨.

# 5월 8일 강의 내용 정리 (8주차)

### 8.2 Arguments 전달하기

- 함수를 정의할 때는 파라미터(parameter)혹은 매개변수, 함수를 사용할 때는 아규먼트(argument)혹은 인수 라고 부름.
- 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 있음.

```js
01  <button onClick = {(event) => this.deleteItem(id,event)}>삭제하기</button>
02  <button onClcik = {this.deleteItem.bind(this, id)}>삭제하기</button>
```
- 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른 하나는 bind를 사용했음
- event라는 매개변수는 리액트의 이벤트 객체를 의미
- 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달
- 첫 번째 코드는 명시적으로 event를 매개변수로 넣어주었고, 두 번째 코드는 id 이후 두 번째 매개변수로 event가 자동 전달됨.(이 방법은 클래스형에서 사용)
- 함수형 컴포넌트에서 이벤트 핸들러에 매개변수를 전달할 때는 254페이지 코드와 같이 함.

```js
01  function MyButton(props){
02    const handleDelete = (id, event) => {
03      console.log(id, event.target);
04    };
05
06    return(
07      <button onClcik ={(event) => handleDelete(1, event)}>삭제하기</button>
08    )
09  }
```

### 8.3 (실습)클릭 이벤트 처리하기
1. ConfirmButton 컴포넌트 만들기.
2. 클래스 필드 문법 사용하기.
3. 함수 컴포넌트로 변경하기.

### 9.1 조건부 렌더링이란?

- 여기서 조건이란 우리가 알고있는 조건문의 조건임.
```js
  function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
      return <UserGreeting/>
    }
    return <GusetGreeting/>;
  }
```
- props로 전달 받은 isLoggedIn이 true면 UserGreeting을, false면 GuestGreeting을 반환


### 9.2 엘리먼트 변수

- 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수
- 272페이지 코드처럼 state에 따라 button 변수에 컴포넌트의 객체를 저장하여 return문에 사용.
```js
  let button;
  if(isLoggedIn){
    button = <LogoutButton onClick = {handleLogoutClick}/>;
  }else{
    button = <LoginButton onClick = {handleLoginClick}/>;
  }

  return(
    <div>
      <Greeting isLoggedIn={isLoggedIn}/>
      {button}
    </div>
  )
```

### 9.3 인라인 조건

- 필요한 곳에 조건문을 직접 넣어 사용하는 방법.

1. 인라인if
- if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용함.
- &&는 and연산자로 모든 조건이 참일때만 참.
- 첫 조건이 거짓이면 두번 째 조건은 판단할 필요 x 단추경가.

```js
01  {unreadMessages.length > 0 &&
02    <h2>
03      현재 {unreadMessage.length}개의 읽지않은 메시지가 있습니다.
04    </h2>
05  }
```
- 판단만 하지 않고 결과 값 그대로 리턴.

2. 인라인 if-else
- 삼항연산자를 사용
- 문자열이나 엘리먼트를 넣어서 사용할 수 있음.

```js
  function UserStatus(props){
    return(
      <div>
        이 사용자는 현재 <br>{props.isLoggedIn ? '로그인' : '로그인 하지 않은'}</br>상태입니다.
      </div>
    )
  }
```
```js
  <div>
    <Greeting isLoggedIn = {isLoggedIn}/>
    {isLoggedIn}
      ? <LogoutButton onCLick = {handleLogoutClick}/>
      : <LoginButton onClickj = {handleLoginClick}/>
  </div>
```

  ### 9.4 컴포넌트 렌더링 막기

  - 컴포넌트를 렌더링하고 싶지 않을 떄에는 null을 리턴.
  ```js
    function WarningBanner(props){
      if(!props.warning){
        return null;
      }

      return(
        <div>경고!</div>
      );
    }
  ```
  
# 5월 1일 강의 내용 정리 (7주차)

### 7.8 나만의 훅 만들기

- 필요하다면 직접 훅을 만들어 쓸 수도 있음. 이것을 커스텀 훅이라 함

1. 커스텀 훅을 만들어야 하는 상황
에제 UserStatus 컴포넌트는 isOnline이라는 state에 따라서 사용자의 상태가 온라인인지 아닌지를 텍스트로 보여주는 컴포넌트

```js
01  import React, { useState, useEffect} from "react";
02
03  function UserStatus(props){
04    const [isOnline, setIsOnline] = useState(null);
05
06    useEffect(() => {
07      function handleStatusChange(status){
08        setIsOnline(status.isOnline);
09      }
10
11      ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
12      return() => {
13        ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
14      }  
15    });
16
17    if(isOnline === null) {
18      return '대기중...';
19    }
20    return isOnline ? '온라인' : '오프라인';
21  }
```

2. 커스텀 훅 추출하기

- use로 시작하는 훅을 만들고, 내부에서 다른 훅을 호출하면 됨.
- 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것
```js
01  import React, { useState, useEffect} from "react";
02
03  function useUserStatus(props){
04    const [isOnline, setIsOnline] = useUserState(null);
05
06    useEffect(() => {
07      function handleStatusChange(status){
08        setIsOnline(status.isOnline);
09      }
10
11      ServerAPI.subscribeUserStatus(userId, handleStatusChange);
12      return() => {
13        ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
14      } ;
15    });
16
17    return isOnline;
18  }
```

3. 커스텀 훅 사용하기
- 2에서 작성했던 코드를 사용자 훅을 사용해서 수정하면 다음과 같음.
```js
01  function UserStatus(props){
02    const isOnline =useUserStatus(props.user.id)
03
04    if (isOnline === null){
05      return '대기중...';
06    }
07    return isOnline ? '온라인' : '오프라인';
08  }
09
10  function UserListItem(props){
11    const isOnline = useUserStatus(props.user.id);
12
13    return(
14        <li style == {{ color: isOnline ? 'green': 'black'}}>
15          {props.user.name}
16        </li>
17    );
18  }
```

### 8.1 이벤트 처리하기

- DOM에서 클릭 이벤트를 처리하는 예제 코드
```js
01  <button onclick = "activate()">
02    Activate
03  </button>
```

- React에서 클릭 이벤트를 처리하는 예제코드
```js
01  <button onClick = {activate}>
02    Activate
03  </button>
```

- 둘의 차이점은
1) 이벤트 이름이 onclick에서 onClick로 변경. (Camel Case)
2) 전달하려는 함수는 문자열에서 함수 그대로 전달.

- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러(Event Handler)"라고 함. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너(Event Listner)"라고 부르기도 함.

- 이벤트 핸들러 추가하는 방법은?
- 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick()함수를 호출하도록 되어있음
- bind를 사용하지 않으면 this,handleClick은 글로벌 스코프에서 호출되어, undefined으로 사용할 수 없기 때문
- bind를 사용하지 않으려면 화살표 함수 사용
- 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 함
```js
01  class Toggle extends React.Component{ 
02    construnctor(props){
03        super(props);
04
05        this.state = {isToggleOn : true};
06
07
08        this.handleClick = this.handleClick.bind(thils);
09      }
10
11      handleClick(){
12        this.setState(prevState => ({
13          isToggleOn: !prevState.isToggleOn
14      }));
15    }
16
17    render() {
18      return (
19        <button onClick = {this.handleClick}>
20          {this.state.isToggleOn ? '켜짐' : '꺼짐'}
21        </button>  
22      );
23    }
24  }
```

- 클래스형을 함수형으로 바꾸면 다음과 같습니다.
- 함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지 입니다.
- 함수형에서 this를 사용하지 않고, onClick에서 바로 HandleClick를 넘기면 됩니다.

```js
  function Toggle(props){
      const [isToggleOn, setIsToggleOn] = useState(true)
      
      //방법 1
      function handleClick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
      }

      //방법 2
      const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn) 
      }
      return(
        <button onClick = {handleClick}>
          {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
      )
  }
```
# 4월 17일 강의 내용 정리 (5주차)

## 훅

### 7.1 훅이란?

- 클래스형 컴포넌트에서는 생성자(constructor)에서 state를 정의하고, setState() 함수를 통해 state를 업데이트.
- 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅(Hook).
- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 통일하게 구현할 수 있게 됨.
- Hook이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수.
- 훅의 이름은 모두 'use'로 시작
- 사용자 정의 훅(custom hook)을 만들 수 있으며, 이 경우에 이름은 'use'로 시작할 것을 권장

### 7.2 useState

- useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook임.
- 다음 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트.
- 하지만 증가는 가능하지만 증가할 때마다 재 렌더링은 일어나지 않음.
- 이럴 때 state를 사용해야 하지만 함수형은 없기에 useState() 사용.

```js
01  import React, {useState} from "react";
02
03  function Counter(props){
04    const [count, setCount] = useState(0);
05
06    return (
07      <div>
08        <p> 총 {count}번 클릭했습니다.</p>
09        <button onClick ={() => count++}>
10            클릭
11        </button>
12      </div>
13    );
14  }
```

### 7.3 useEffect

- useState와 함께 가장 많이 사용하는 Hook임
- 이 함수는 사이드 이펙트를 수행하기 위한 것
- 영어로 side effect는 부작용을 의미함, 일반적으로 프로그래밍에서 사이드 이펙트는 '개발자가 의도하지 않은 코드가 실행되며 버그가 발생하는 것'을 뜻함
- 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가까움
- 예를 들어 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미
- 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에는 작업이 완료될 수 없기 때문임. 렌더링이 끝난 이후에 실행되어야 하는 작업들임.
- 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공
- 저자는 useEffect가 side effect가 아니라 effect에 가깝다고 설명하지만, 이것은 부작용의 의미를 잘못 해석해서 생긴 오해이다. 부작용의 부를 不(아닐 부)로 생각했기 때문이다
- side Effect는 '원래의 용도 혹은 목적의 효과외에, 부수적으로 다른 효과가 있는 것'을 뜻함
- 결국 sideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말함.
- 예를 들면 네트워크 리퀘스트, DOM 수동 조작, 로깅등은 정리(clean-up)가 필요 없는 경우들
- useEffect()함수는 다음과 같이 사용
- 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어감.
```js
01 useEffect(이펙트 함수, 의존성 배열);
```
- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨.
- 이펙트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행됨.
- 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 됨. 이 경우 props나 state에 있는 어떤 값에도 의존하기 않기 때문에 여러 번 실행되지 않음.

- componentUseWill
![image](https://github.com/Raebagi/react1-1/assets/144668955/7aed0502-454f-40e7-ad2f-0d9026f49322)

```js
  useEffect(() => {
    // 컴포넌트가 마운트 된 이후,
    // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행
    // 의존성 배열에 빈 배열을 넣으면 마운트와 언마운트시에 단 한번씩만 실행됨
    // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
    ...

    return () => {
      // 컴포넌트가 마운트 해제되기 전에 실행됨
      ...
    }
  }, [의존성 변수1, 의존성 변수2, ...]
  );
```


### 7.4 useMemo

- useMemo()훅은 Memoized value를 리턴하는 훅.
- 이전 계산값을 갖고있기 때문에 연산량이 많은 작업의 반복을 피함.
- 이 훅은 렌더링이 일어나는 동안 실행됨.
- 따라서 렌더링이 일어나는 동안 실행되선 안될 작업을 넣으면 안됨.
- 예를 들면 useEffect에서 실행되어야 할 사이드 이펙트같은 것.
- 정리하자면
```js
  const MemoizedValue = useMemo(
    () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2]
  );
```
- 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행됨.
- 따라서 의존성 배열을 넣지 않는 것은 의미가 없음.
- 만약 빈 배열을 넣게되면 컴포넌트 마운트 시에만 함수가 실행됨.
```js
01  const MemoizedValue = useMemo(
02    () =>  computeExpensiveValue
03  );
```

### 7.5 useCallback

- useCallback() 훅은 useMemo()와 유사한 역할을 합니다.
- 차이점은 값이 아닌 함수를 반환한다는 점입니다.
- 의존성 배열을 파라미터로 받는 것은 useMemo와 동일함.
- 파라미터로 받은 함수를 콜백이라고 함.
- useMemo와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환

```js
  const MemoizedValue = useCallback(
    () => {
      doSomething(의존성 변수1, 의존성 변수2);
    },
    [의존성 변수1, 의존성 변수2]
  );
```

### 7.6 useRef

- useRef() 혹은 레퍼런스를 사용하기 위한 훅.
- 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미
- useRef() 훅은 바로 이 레퍼런스 객체를 반환함.
- 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미함.
```js
const refContainer = useRef(초깃값);
```
- 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됨.
- 즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미.

- 예시
```js
01  import React, {useRef} from "react"
02  
03  export default function FocusButton(props){
04    const inputElem = useRef(null)
05
06    const onButtonClick = () => {
07      inputElem.current.focus()
08    }
09    return(
10        <>
11          <input ref = {inputElem} type = "text"/>
12          <button onClick = {onButtonClick}>Focus the input</button>
13        </>
14    )
15  }
```

### 7.7 훅의 규칙

- 첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미
- 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨.
- 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 함.
- 페이지 224의 코드는 조건에 따라 호출됨으로 잘못된 코드
- 두번 째 규칙은 리액트 함수형 컴포넌트에서만 훅을 호출해야 한다는 것임.
- 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨.
- 훅은 리액트의 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있음.
- 두 번째 규칙은 함수형 컴포넌트에서만 훅을 호출해야 함.
- 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됨.
- 훅은 함수영 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출 가능


# 4월 3일 강의 내용 정리 (4주차)

## 컴포넌트에 대해 알아보기

- 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 가짐.
- 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미.
- 컴포넌트는 자바스크립트 함수처럼 입력과 출력이 있다는 면에서 유사함.
- 다만 입력은 Props가 담당하고, 출력은 리액트 엘리먼트의 형태로 출력됩니다.
- 엘리먼트를 필요한 만큼 만들어 사용함
- 의존성 배열을 생략하는 경우는 업데이트 될 때마다 호출됨.

![image](https://github.com/Raebagi/react1-1/assets/144668955/3d539cc1-c01f-4b6c-bef3-323ea36cb36a)

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

