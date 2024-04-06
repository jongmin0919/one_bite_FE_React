import { useRef, useState } from "react";

const OrderEditor = () => {
  
  // 유즈스테이트에 사용자의 주문 값들을 담을 order 객체의 세 개의 속성을 빈 문자열로 세팅
  const [order, setOrder] = useState({
    menu: "",
    address: "",
    request: ""
  });

  // 각각 어느 필드에서 넘어온 정보인지를 구별하기 위해 각 태그에 name속성을 지정 후 해당 속성의 값에 따라 상태 객체의 특정 값을 업데이트 합니다.
  const handleStatesChanger = (event) => {
    const { name, value } = event.target
    if (name === "menu") setOrder((order) => ({ ...order, menu: value })); // 이전 값을 펴낸 후(rest) 그 속성의 특정 속성 값만 변경
    else if (name === "address") setOrder((order) => ({ ...order, address: value }));
    else if (name === "request") setOrder((order) => ({...order, request : value }));
  };

  const refAddress = useRef(null); 
  // DOM 요소인 주소창(input)를 참조할 Ref훅을 초기값으로 설정
  function handleAlertSubmit() {
    if (!order.address) { // 사용자가 제출을 눌렀을 때 주소값 입력을 하지 않은 경우(즉 값이 없는 경우)
      refAddress.current.focus(); // 참조하고 있는 돔 요소에 접근하여 focus 메서드를 실행
      return // alert로 넘어가지 않고 그대로 이벤트 종료
    }
    // 사용자가 하나라도 입력을 한 상태라면 위의 조건문은 무시되고 아래의 alert를 실행
    alert(
      `주문이 완료되었습니다. 메뉴 : ${order.menu}, 주소 : ${order.address}, 요청사항 : ${order.request}`
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          value={order.menu}
          name="menu"
          onChange={handleStatesChanger}
        > {/* 사용자가 보쌈을 입력했다면 value는 menu(기존의 족발)에서 '보쌈' 값이 변경된 후 onchange의 핸들러가 실행되어 실제 상태값(menu)를 변경하게 됨.*/}
          
          <option value={"족발"}>족발</option>
          <option value={"보쌈"}>보쌈</option>
          <option value={"치킨"}>치킨</option>
          <option value={"피자"}>피자</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          value={order.address} 
          name="address" // 공통 핸들러의 식별값
          ref={refAddress} // 해당 돔 요소를 refAddress(useRef)가 참조할 수 있도록 하는 속성
          onChange={handleStatesChanger}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          value={order.request}
          name="request"
          onChange={handleStatesChanger}
        />
      </div>
      <div>
        <button onClick={handleAlertSubmit} style={{ width: 300, padding: 5 }}>
          {/* 해당 부분은 사용자가 지금까지 입력한 상태값을 출력하는 구간이기 때문에 value값을 지정할 필요가 없음. */}
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
