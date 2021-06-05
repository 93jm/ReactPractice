import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }; //최신화 불변성 유지
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = e => {
    console.log(e.target);
    dispatch(e.target);
  };
  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />
      <div>
        <b>이름 : {name} </b>
      </div>
      <div>
        <b>닉네임 : {nickname} </b>
      </div>
    </div>
  );
};

export default UseReducer;
