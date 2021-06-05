import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('name만');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, []);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
      <div>
        <b>이름 : {name} </b>
      </div>
      <div>
        <b>닉네임 : {nickname} </b>
      </div>
    </div>
  );
};

export default UseEffect;
