import React, { useState } from "react";

const InputElement = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [password,setPassword] =  useState("");

  const handleSubmit = (FormData) => {
    console.log("Text:", FormData.get("textInput"));
    console.log("File:", FormData.get("fileInput"));
  };
  const passStrength = password.length === 10?"strong password":"weak password"

  return (
    <>
      <form action={handleSubmit}>
        <input
          type="text"
          name="textInput"
          maxLength="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="file"
          name="fileInput"
          accept=".jpg, .png, .pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input type="text" autoComplete="on"/>
        <input type="submit" value="Submit" />
        <textarea cols={60} rows={6} wrap="hard"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} maxLength={10}/>
        <progress value={password.length} max={10} />
        <span>{passStrength}</span>
      </form>
    </>
  );
};

export default InputElement;
