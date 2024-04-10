import './List.css'
import React, { useState } from 'react'
import TodoItem from "./TodoItem"

export default function List({ todos, onUpdate, onDelete}) {
  
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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input value = {search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." type="text" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div>
    </div>
  )
}
