import React, { useCallback, useMemo, useState, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균 값 계산중...");
  console.log("길이값은?", numbers.length);
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseRef = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //처음 컴포넌트 렌더 될때 함수생성 그대로 유지

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus(); //ref 값이 바뀌어도 컴포넌트는 렌더링이 되지 않는다 렌더와 관련 없을때 사용한다
    },
    [number, list]
  ); //함수안에 상태값에 의존할 경우 변경될때마다 새로 생성되는 함수를 위해 값 넣기

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default UseRef;
