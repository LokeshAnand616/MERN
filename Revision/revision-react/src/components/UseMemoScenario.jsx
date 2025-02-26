import React, { useMemo, useState } from "react";

const UseMemoScenario = () => {
  const [text, setText] = useState("");
  const arr = Array.from({ length: 100 }, (_, i) => i);
  console.log("arr", arr);
  const filterItem = (text) => {
    const numText = Number(text);
    return arr.filter((curr) => curr === numText);
  };

  const item = useMemo(() => filterItem(text), [text]);

  console.log(item);
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ul>
        {item.map((curr, index) => (
          <li key={index}>{curr}</li>
        ))}
      </ul>
    </>
  );
};

export default UseMemoScenario;
