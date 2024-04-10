import "./ContactList.css";
import ContactItem from "./ContactItem";

export default function ContactList({ states, onDeleteContact }) {
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {states.map((item) => (
        <ContactItem key={item.id} {...item} onDeleteContact={onDeleteContact} />
      ))}
    </div>
  );
}
