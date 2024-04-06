import React, { useState } from "react";

const OrderEditor = () => {
  const [menu, setMenu] = useState("족발");
  const [address, setAddress] = useState("");
  const [request, setRequest] = useState("");

  function handleChangeMenu(elm) {
    setMenu(elm.target.value);
  }

  function handleChangeAddress(elm) {
    setAddress(elm.target.value);
  }

  function handleChangeRequest(elm) {
    setRequest(elm.target.value);
  }

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
        >
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
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
