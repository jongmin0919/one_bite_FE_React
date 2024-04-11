import React from 'react'
import './TodoItem.css'
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

function TodoItem({id, isDone, content, date,}) {

  const { onUpdate, onDelete } = useContext(TodoDispatchContext)
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

//  
export default memo(TodoItem, (prevProps, currentProps) => {
  // 콜백 함수의 매개변수는 이전 프롭스와 현재의 프롭스. 이들을 비교하여 반환된 true 및 false에 따라 리렌더링(false)되거나 상태를 유지(true)함.
  // 
  if (prevProps.id !== currentProps.id) return false;
  if (prevProps.isDone !== currentProps.isDone) return false;
  if (prevProps.content !== currentProps.content) return false;
  if (prevProps.date !== currentProps.date) return false;

  return true;
});