import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext } from "../App";

export default function ContactList() {
  
  // 컨텍스트 값을 받아올때는 useContext를 이용해야 하며, 단독 데이터를 받을 때에는 중괄호 사용(구조 분해 할당)않하고 받아도 됨
  const contacts = useContext(ContactStateContext);
  
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((item) => (
        <ContactItem key={item.id} {...item}/>
      ))}
    </div>
  );
}
