import './Editor.css'
import React from 'react'
import { useState, useRef, useContext } from "react"
// App.jsx로부터 받아온 정보 TodoContext를 임포트
import { TodoDispatchContext } from "../App"

export default function Editor() {
  const {onCreate} = useContext(TodoDispatchContext) // useContext를 사용해 App.jsx로부터 전달 받은 TodoContext의 정보를 전달 받음
  const [content, setContents] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContents(e.target.value)
  }

  const onKeydown = (e) => {
    if(e.keyCode === 13) onSubmit()
  }

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return
    }
    onCreate(content)
    setContents("");
  }

  return (
    <div className="Editor">
      <input ref={contentRef} onKeyDown={onKeydown} value={content} onChange={onChangeContent} placeholder="새로운 Todo..." type="text" />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}
