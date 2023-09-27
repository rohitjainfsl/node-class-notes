import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const risabhIdharDekho = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:4000/new", {
        name: name,
        age: age,
        phone: phone,
      })
      .then((result) => {
        console.log(result);
        if(result.statusText === "OK")  navigate("/");
      });
  };
  return (
    <>
      <form onSubmit={risabhIdharDekho}>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputEmail1">Email address</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="htmlForm-control"
            id="exampleInputName"
            aria-describedby="NameHelp"
            placeholder="Enter name"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputAge">Age</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            className="htmlForm-control"
            id="exampleInputAge"
            placeholder="Age"
          />
        </div>
        <div className="htmlForm-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="htmlForm-control"
            id="exampleInputPhone"
            placeholder="Phone"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
