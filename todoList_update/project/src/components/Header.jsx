import './Header.css'
import React from 'react'
import { memo } from "react"

function Header() {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      {/* 그냥 new Date를 호출하면  원본이 나오므로 읽기 쉽도록 toDateString 호출*/}
      <h1>{new Date().toDateString()}</h1>      
    </div>
  )
}

const memorizedHeader = memo(Header)
export default memorizedHeader
