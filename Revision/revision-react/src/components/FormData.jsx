import React from "react";

const FormData = () => {
  // const {pending} = useFormStatus(); //used only in server components
  function search(FormData) {
    setTimeout(() => {
      const searchVal = FormData.get("search");
      alert(`The searched item ${searchVal}`);
    }, 3000);
  }
  return (
    <>
      <form action={search}>
        <input type='search' name='search' />
        <button type="submit">
          submit
          {/* {pending ? "issubmitting.." : "submit"} */}
          </button>
      </form>
    </>
  );
};

export default FormData;
