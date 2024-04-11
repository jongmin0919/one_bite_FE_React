import { useRef, useReducer, useCallback, useContext, createContext, useMemo,  } from "react";
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

export const ContactStateContext  = createContext()
export const ContactDispatchContext  = createContext()

function App() {

  const [contacts, dispatch] = useReducer(reducer, [])

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

  // contacts가 변경됨에 따라 리렌더링이 발생할 경우, 해당 함수들도 재생성이 될것이기 때문에 이를 방지하고자 memo로 묶음.
  // 음... 솔직히 useCallback이랑 useMemo의 개념글을 다른 블로그에서도 참고를 해봤지만, 제가 유추한 결론은 useCallback은 생성 함수의 재생성 방지(의존성 배열), useMemo는 재활용을 통한 메모리제이션의 극대화에서 그 차이점을 볼 수 있을 것 같습니다.
  const memoizedDispatch = useMemo(() => {
    return { onCreateContact, onDeleteContact }
}, []);

  
  
  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contacts}>
      <ContactDispatchContext.Provider value={memoizedDispatch}>
        <section>
          <ContactEditor/>
        </section>
        <section>
          <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
        </section>
      </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
