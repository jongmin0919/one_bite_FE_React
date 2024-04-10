import { useState } from "react";
import "./ContactEditor.css";

export default function ContactEditor({ onCreateContact }) {
  
  const [state, setState] = useState({
    name: "",
    contact: "",
  })

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value //각 인풋의 고유 속성인 name속성을 이용해 스프레드 된 state(name과 contact) 중 각 이름에 맞는 속성에 대한 value를 할당
      // 즉 인풋의 입력 타입이 name이면 그 값은 name속성으로, contact면 contact 속성으로 삽입하는 것임.
    })
  }

  const onSubmit = () => {
    // 사용자가 공백을 여러번 입력할 수도 있어서 해당 조건을 추가.
    const trimedName = state.name;
    const trimedContact = state.contact;

    if (!trimedName || !trimedContact) {
      alert("올바르게 작성해주세요.")
      return;
    }
    onCreateContact(state.name, state.contact)

    setState({
      name: "",
      contact:"",
    })
  }

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input name="name" value={state.name} onChange={onChangeState} className="name" placeholder="이름 ..."  />
        <input name="contact" value={state.contact} onChange={onChangeState} className="contact" placeholder="연락처(이메일) ..." />
      </div>
      <button onClick={() => onSubmit()}>Add</button>
    </div>
  );
}
