import { memo, useState } from "react";
import "./ContactEditor.css";
import { useContext } from "react";
import { ContactDispatchContext } from "../App";

function ContactEditor() {
  const {onCreateContact} = useContext(ContactDispatchContext)
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

// ContactEditor는 사용자가 입력을 매번 할때와 버튼을 누를 때 리렌더링이 됩니다. 그러므로 리렌더링 되어야하는 name과 contact, onCreateContact에 리렌더링 최적화를 해줄 필요가 싶기는 한데...
// 그래도 굳이 해보자면 이전 onCreateContact와 이후 onCreateContact를 비교해보는 정도라고 생각되었습니다. (물론 onCreateContact도 App.jsx에서 useCallback으로 최적화를 하고 있긴 하지만...)
export default memo(ContactEditor, (prevProps, nextProps) => {
  if (prevProps.onCreateContact !== nextProps.onCreateContact) return false;
  // 이 경우 앞전의 useCallback의 사용을 이미 한 상황이므로, 해당 훅이 적용되어 있는 한 console.log를 출력하지는 않을 것입니다.
  console.log(`삐빅, 동일한 생성 함수입니다!`)
  return true;
})