import { useRef, useReducer, useCallback } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

function reducer (state, action){
  switch (action.type) {
    case "CREATE": return [action.data, ...state];
    case "DELETE": return state.filter((item) => item.id !== action.targetId);
    default: return state;
  }
}

function App() {

  const [states, dispatch] = useReducer(reducer, [])

  const idRef = useRef(0);

  // 2. useCallback으로 렌더링마다 새로운 이벤트 핸들링 함수(객체의 주소값이 다른) 가 생성되는 것을 막기 위해 useCallback을 사용
  // 의존성 배열을 추가하지 않는 한, 최초 생성 이후 해당 함수를 재사용. 의존성 배열에 특정 값을 넣으면 그 값의 상태 변화 때마다 해당 함수가 재생성(리렌더링)
  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
        date: new Date().getTime()
      }
    })
  }, []);

  const onDeleteContact = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    })
  }, []);
  
  /* 만약 useReducer를 사용하지 않았다면 해당 이벤트 처리 함수들은 다음과 같을 것입니다.

  const [states, setStates] = useState([]);

  const onCreateContact = (name, contact) => {
    const newContact = {
      id: idRef.current++,
      name: name,
      contact: contact,
    };
    setStates([newContact, ...states]);
  }

  const onDeleteContact = (targetId) => {
    setStates(states.filter((item) => item.id !== targetId));
  }
  */

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreateContact={onCreateContact}/>
      </section>
      <section>
        <ContactList states={states} onDeleteContact={onDeleteContact} />
      </section>
    </div>
  );
}

export default App;
