import React from 'react';

export default function Welcome(props) {
  return (
    <>
      {/* 해당 상태에 따라 Welcome 컴포넌트가 출력 할 문구의 상태 값이 달라짐 */}
      {props.isMember ? `${props.name}님 다시 오셨군요.` : `${props.name}님 가입하시겠어요?`}
    </>
  );
}
