import Header from "./components/Header"
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";

import './App.css'

function reducer(state, action){
  switch (action.type) {
    case 'CREATE': return [action.data, ...state]
    case 'UPDATE': return state.map((item) => item.id === action.targetId? {...item, isDone: !item.isDone} : item)
    case 'DELETE': return state.filter((item) => item.id !== action.targetId);
    default: return state
  }
}

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

function App() {
  
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3)

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    })
  }

  const onUpdate = (targetId) => { 
    dispatch({
      type: 'UPDATE',
      targetId : targetId
    })
  }

  const onDelete = (targetId) => {
    // 인수 : 기존의 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 반환
    // 즉 필터링으로 삭제 대상이 아닌 요소들만 다시 반환 받아 setTodos에 저장
    dispatch({
      type : 'DELETE',
      targetId : targetId
    })
  }

  return (
    <div className="App">
      <Header/>
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
