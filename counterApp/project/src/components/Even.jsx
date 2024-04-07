import { useEffect } from "react";

import React from 'react'

export default function Even() {
  useEffect(() => {
    return () => {
      // 유즈 이펙트의 콜백 함수가 반환하는 또 다른 콜백 함수를 클린업, 정리함수라고도 함. 주로 메모리 정리 위주의 작업에 사용됨.
      // 즉 빈 배열이 들어가 있는 유즈 이펙트의 경우 마운트 될 때 사용되는데 종료 될 때 콜백 종료 함수(return)를 호출하게 됨.
      console.log("unmount")
    }
  }, [])
  return (
    <div>
      짝수입니다.
    </div>
  )
}
