import React, { useState, useTransition } from "react";

const InitialValue = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

const Transition = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState(InitialValue);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const newText = e.target.value;
    setText(newText);
    startTransition(() => {
      setArray(InitialValue.filter((curr) => curr.includes(newText)));
    });
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <ul>
        {isPending ? "Loading.." : array.map((curr, index) => <li key={index}>{curr}</li>)}
      </ul>
    </>
  );
};

export default Transition;
