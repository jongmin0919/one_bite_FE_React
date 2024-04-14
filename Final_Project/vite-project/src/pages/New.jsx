import React from 'react'
import { useSearchParams } from "react-router-dom"

export default function New() {

  // useSearchParams 해당 훅을 이용하면 useState와 비슷하게 사용자가 전달한 쿼리 스트링의 값이 params에 저장되고, setParams를 통해 해당 값을 제어할 수 있게 해주는 커스텀 훅.
  const [params, setParams] = useSearchParams();

  const value = params.get("value");

  return (
    <div>
      {`입력된 주소는 ${value} 입니다. `}
    </div>
  )
}
