import Header from "./components/Header"
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from "react";

import './App.css'

// 임시 데이터 
const mockData = [
  {
    id:0,
    isDone: false,
    content: "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id:1,
    isDone: false,
    content: "노래 연습하기",
    date : new Date().getTime(),
  },
  {
    id:2,
    isDone: false,
    content: "빨래하기",
    date : new Date().getTime(),
  },
]

function reducer(state, action){
  switch (action.type) {
    case 'CREATE': return [action.data, ...state]
    case 'UPDATE': return state.map((item) => item.id === action.targetId? {...item, isDone: !item.isDone} : item)
    case 'DELETE': return state.filter((item) => item.id !== action.targetId);
    default: return state
  }
}

// 특별한 경우가 아니라면 컨텍스트는 컴포넌트 외부에서 생성 (이때 데이터를 전달하기 위해서 export 시켜줘야함)
export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()



function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  // useCallback은 첫번째는 최적화 하고 싶은 함수를, 두번째는 의존성 배열을 삽입.
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => { 
    dispatch({
      type: 'UPDATE',
      targetId : targetId
    })
  }, []);
  

  const onDelete = useCallback((targetId) => {
    // 인수 : 기존의 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 반환
    // 즉 필터링으로 삭제 대상이 아닌 요소들만 다시 반환 받아 setTodos에 저장
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, [])

  const memopizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete}
  }, [])


  return (
    <div className="App">
      <Header />
      {/* TodoContext의 범위 안에 있는 컴포넌트들에게 밸류프롭들을 직접적으로 전달 */}  
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memopizedDispatch}>
          <Editor />
          <List/>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
