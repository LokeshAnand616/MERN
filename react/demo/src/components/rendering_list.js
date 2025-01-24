import  {people} from "../assets/data";
import React from "react";

function RenderingList() {
  return (
    <div>
      <ul>
        {people.map((keys) => (
          <React.Fragment key={keys.id}>
            <li>{keys.name}</li>
            <li>{keys.profession}</li>
            <li>{keys.accomplishment}</li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
export default RenderingList;
