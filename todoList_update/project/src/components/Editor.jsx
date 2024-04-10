import './Editor.css'
import React from 'react'
import { useState, useRef } from "react"

export default function Editor({ onCreate }) {
  
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
