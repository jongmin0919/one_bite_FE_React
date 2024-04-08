import Header from "./components/Header"
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

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

function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date : new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId) => { 
    // todos State의 값들 중 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // 인수 : todos 배열 중 targetId와 일치하는 id를 갖는 요소의 데이터(isDone)만 토글하여 새로운 객체 배열로 반환  
    setTodos(todos.map((todo) => todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo));

    // 위 코드와 같음
    // setTodos(todos.map((todo) => {
    //   if (todo.id === targetId) {
    //     return {
    //       ...todo, 
    //       isDone: !todo.isDone
    //     }
    //   }
    //   return todo
    // }))
  }

  const onDelete = (targetId) => {
    // 인수 : 기존의 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열 반환
    // 즉 필터링으로 삭제 대상이 아닌 요소들만 다시 반환 받아 setTodos에 저장
    setTodos(todos.filter((todo) => todo.id !== targetId))
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
