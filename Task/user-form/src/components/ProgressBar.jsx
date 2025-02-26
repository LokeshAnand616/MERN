import React from "react";

const ProgressBar = ({ strength }) => {
  console.log(strength);

  const getColor = () => {
    if (strength <= 25) return "red";
    if (strength <= 50) return "orange";
    if (strength <= 75) return "yellow";
    return "green";
  };

  return (
    <div>
      <progress value={strength ? strength : 0} max='100'></progress>

      <span
        style={{
          color: getColor(),
          fontWeight: "bold",
        }}
      >
        {strength===0?"":strength < 50
          ? "Weak"
          : strength <= 75 && strength >= 50
          ? "Medium"
          : "strong"}
      </span>
    </div>
  );
};

export default ProgressBar;
