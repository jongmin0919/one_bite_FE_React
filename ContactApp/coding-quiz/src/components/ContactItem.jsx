import "./ContactItem.css";

export default function ContactItem({ id, name, contact, date, onDeleteContact }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <div className="date">{new Date(date).toLocaleString()}</div>
      <button onClick={() => onDeleteContact(id)}>🗑️ Remove</button>
    </div>
  );
}
