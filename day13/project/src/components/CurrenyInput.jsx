import React from "react"


// 커런시인풋 컴포넌트
export default function CurrenyInput({ country, money, handler }) {
  return (
    <div>
      <div>{country} : <input type="number" value={money} onChange={(event) => handler(country, event.target.value)} />{country === "krw" ? " ₩" : " US$"}</div>
    </div>
  )
}
