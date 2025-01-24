import { useId, useEffect } from "react";

const UseIdForm = () => {
  const passID = useId();
  const nameID = useId();

  useEffect(() => {
    // Access elements after the component is rendered
    const pass = document.getElementById(passID);
    const name = document.getElementById(nameID);

    // Check if elements exist before applying styles
    if (pass) {
      pass.style.color = 'red';  // Apply color to password input
    }
    if (name) {
      name.style.color = 'green';  // Apply color to name input
    }
  }, [passID, nameID]); // Dependency array to run the effect after passID and nameID are assigned

  return (
    <>
      <label htmlFor={passID} aria-labelledby={passID}>Password:</label>
      <input type="password" name="password" id={passID} />

      <label htmlFor={nameID} aria-labelledby={nameID}>Name:</label>
      <input type="text" name="Name" id={nameID} />
    </>
  );
};

export default UseIdForm;
