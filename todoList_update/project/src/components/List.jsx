import './List.css'
import React, { useState, useMemo, useContext } from 'react'
import TodoItem from "./TodoItem"
import { TodoStateContext } from "../App";


export default function List() {
  
  const todos = useContext(TodoStateContext)
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    // LowerCase 적용으로 대소문자 구분 없이 검색 가능하도록 두 대상의 글자 포맷을 일치시킴
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
  }

  const filteredTodos = getFilteredData();

  // 첫번째는 콜백 함수, 두번째 배열은 유존성 배열,
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("호출")
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount, doneCount, notDoneCount
    }
  }, [todos])

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>{`totalCount : ${totalCount}`}</div>
        <div>{`doneCount : ${doneCount}`}</div>
        <div>{`notDoneCount : ${notDoneCount}`}</div>
      </div>
      <input value = {search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." type="text" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}/>
        })}
      </div>
    </div>
  )
}
