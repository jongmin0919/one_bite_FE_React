import { useState } from "react";

const OrderEditor = () => {
  
  const [menu, setMenu] = useState("족발");
  const [address, setAddress] = useState("");
  const [request, setRequest] = useState("");

  // 상태 변경 핸들러
  function handleChangeMenu(elm) {
    setMenu(elm.target.value);
  }

  function handleChangeAddress(elm) {
    setAddress(elm.target.value);
  }

  function handleChangeRequest(elm) {
    setRequest(elm.target.value);
  }

  // 상태 출력 핸들러
  function handleAlertSubmit() {
    alert(
      `주문이 완료되었습니다. 메뉴 : ${menu}, 주소 : ${address}, 요청사항 : ${request}`
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          value={menu}
          onChange={handleChangeMenu}
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
          value={address}
          onChange={handleChangeAddress}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          value={request}
          onChange={handleChangeRequest}
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
