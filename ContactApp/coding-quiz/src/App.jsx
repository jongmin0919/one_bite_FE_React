import { useRef, useReducer } from "react";
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

  const onCreateContact = (name, contact) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
        date: new Date().getTime()
      }
    })
  }

  const onDeleteContact = (targetId) => {
    console.log(targetId)
    dispatch({
      type: 'DELETE',
      targetId: targetId
    })
  }
  
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
