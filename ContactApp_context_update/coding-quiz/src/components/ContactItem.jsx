import { memo } from "react";
import "./ContactItem.css";
import { useContext } from "react";
import { ContactDispatchContext } from "../App";

function ContactItem({ id, name, contact, date }) {
  
  const { onDeleteContact } = useContext(ContactDispatchContext)
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button onClick={() => onDeleteContact(id)}>🗑️ Remove</button>
    </div>
  );
}

// memo사용시 익명 컴포넌트 처리 오류 해결을 위해 ESlint에 해당 문구를 rules에 삽입! 'react-refresh/only-export-components': "off" 

// 1. 해당 컴포넌트에서 불필요한 리렌더링을 제거하기 위해 사용자가 임의 조건을 콜백 함수로 거는 memo를 활용하여 true일때만 리렌더링.
export default memo(ContactItem, (prevProps, nextProps) => {
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.name !== nextProps.name) return false;
  if (prevProps.contact !== nextProps.contact) return false;
  if (prevProps.date !== nextProps.date) return false;
  // 이 경우 이전에 받아온 값들과, 지금 리렌더링 되는 값들이 같기 때문에 정보를 추가할 때마다 리렌더링이 될것입니다.
  console.log(`리렌더링 완료`)
  return true;
});
