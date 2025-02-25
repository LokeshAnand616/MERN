import React from "react";

const Events = () => {
  function handleClick(event) {
    console.log("child");
  }

  function handleParentClick() {
    console.log("parent");
  }

  function handleLiClick(event){
    console.log(event.target.textContent);
  }

  return (
    <>
      <div onClick={handleParentClick}>
        <button onClick={handleClick}>child</button>
      </div>
      <div onClickCapture={handleParentClick}>
        <button onClick={handleClick}>child</button>
      </div>
      <ul onClick={handleLiClick}>
        <li>apple</li>
        <li>banana</li>
        <li>orange</li>
      </ul>
    </>
  );
};

export default Events;
