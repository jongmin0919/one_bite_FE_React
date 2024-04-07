import './App.css'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import Even from "./components/Even"
import { useEffect, useState, useRef } from "react"

function App() {
  
  //  스페이스 리프팅 : 프롭스나 이벤트의 진행 방향은 부모에서 자식으로 단방향 데이터 흐름을 갖는다는 패턴
  //유즈 이펙트의 두번째 요소(배열)은 의존성 배열이라고도 함.  즉  유즈 이펙트가 특정 상태나 props 값이 변경 될떄마다 실행되는 의존성을 보이는 개념임.
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")
  const isMount = useRef(false); // 업데이트를 관리하는 useEffect에서 최초 마운트 접근을 블로킹할 useRef 변수를 false로 하나 생성

  // 1. 마운트 : 컴포넌트의 라이프 사이클 시작 (의존성 배열이 비어있는 경우 돔이 최초로 생성 되는 시점에만 콜백 함수 실행)
  useEffect(() => {
    console.log("mount")
  }, [])
  // 2. 업데이트 : 컴포넌트의 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) { // 마운트시에 useRef의 값은 false이고, 조건값은 반전(true)되므로 isMount의 current 값을 true로 만들어준 후 return
      isMount.current = true // 이렇게 되면 마운트 될 때는 조건에 걸려 아래의 업데이트마다 실행될 코드문이 실행되는걸 막을 수 있음. 이후부터는 useRef의 current 값이 true이므로 조건문에 해당하지 않아(true의 반전은 false) 조건문을 아예 무시하고 업데이트에 대한 콜백 함수를 실행하게됨.
      return
    }
    console.log("update");
  },)
  // 3. 언마운트 : 컴포넌트의 생명 주기 종료 : Even.jsx 참조
  

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section><input value={input} onChange={(e) => {
        setInput(e.target.value)
      }} /></section>
      <section><Viewer count={count} />{count % 2 === 0 ? <Even/> : null}</section>
      <section><Controller onClickButton={onClickButton} /></section>
      
      
    </div>
  )
}

export default App
