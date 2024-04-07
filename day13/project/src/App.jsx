import CurrenyInput from "./components/CurrenyInput";

import './App.css'
import { useEffect, useRef, useState } from "react";

function App() {
  const exchangeRate = 1300;
  const [state, setState] = useState({
    krw : 0,
    usd : 0,
  })

  const isMount = useRef(false)

  // useEffect 연습 겸
  useEffect(() => {
    console.log("환율 변환기 실행 시작")
  }, [])

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return
    }
    console.log(`krw : ${state.krw} usd : ${state.usd} `)
  },)

  const handleCurrencyChanger = (country, money) => {
    if (country === "krw") setState(({ krw : money, usd : (money / exchangeRate).toFixed(3) }));
    else setState(({ krw : money * exchangeRate, usd : money}));
    

    /* 처음 작성했던 스테이트 처리 코드는
    if (country === "krw") setState((state) => ({ ...state, usd: (money / Exchange_Rate) }));
    else setState((state) => ({ ...state, kor: (money * Exchange_Rate) })); 였는데요.
    간단하게 저는 해당되는 환율을 바꾸면 되겠지 하고 실행해 봤더니... 괴이하게 입력이 되길래
    뭐지 하고 봤더니 과제를 내주신 예시에는 어느 한쪽 값을 입력하면 그 값은 그대로 들어가고, 
    나머지 한 쪽은 환율로 곱하거나 나눈 값을 표시해 줘야 하더라고요. 그래서 윗쪽 최종 코드처럼 처리를 해줬습니다.
    */
    
  }

  return (
    <>
      <h2>환율 변환기 (KRW-USD)</h2>
      {/* country 값만 다른 두 개의 CurrenyInput를 사용했는데. map을 이용해 키에 맞는 컴포넌트를 생성해 반환하는 방법도 있지 않을까 해서 연습해 봤습니다. */}
      {Object.keys(state).map((key) => (<CurrenyInput key={key} country={key} money={state[key]} handler={handleCurrencyChanger} />))}
    </>
  )
}

export default App
