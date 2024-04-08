import React from 'react'
import './TodoItem.css'


export default function TodoItem({ id, isDone, content, date, onUpdate, onDelete }) {

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      {/* 체크박스(input)의 발생 이벤트가 onclick이 아니라 onChange인 이유는 요소가 button이 아니라 input이기 때문임. */}
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  )
}
