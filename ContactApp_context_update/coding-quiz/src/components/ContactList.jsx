import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { ContactStateContext} from "../App";

export default function ContactList() {
  
  // 구조분해할당으로 받는 것이 아니므로 중괄호 사용 안해도됨
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
