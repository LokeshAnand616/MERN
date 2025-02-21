const DisplayImage = () => {
    return (
      <>
        <h2>Displayed Image</h2>
        <img
          src="http://localhost:3000/images/image.jpg"
          alt="My Image"
          style={{ width: "300px", height: "auto" }}
        />
      </>
    );
  };
  
  export default DisplayImage;