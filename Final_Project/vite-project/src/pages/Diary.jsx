import React from 'react'
import { useParams } from "react-router-dom"

export default function Diary() {

  // useParams는 브라우저에 명시된 파라미터(:)의 값을 가져오는 커스텀 훅임.
  const params = useParams();

  return (
    <div>
      {params.id}번 일기입니다.
    </div>
  )
}
