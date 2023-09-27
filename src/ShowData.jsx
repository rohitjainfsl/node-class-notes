import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";

function ShowData() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchStudentsData();
  }, []);

  async function fetchStudentsData() {
    const result = await axios.get("http://localhost:4000");
    setData(result.data);
  }

  function handleDelete(id) {
    async function fetchData() {
      const result = await axios.delete("http://localhost:4000/delete/" + id);
      if (result.status === 200 && result.statusText === "OK")
        fetchStudentsData();
    }
    fetchData();
  }

  function handleEdit(id) {
    navigate("/edit/" + id);
  }
  return (
    <>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => {
              return (
                <tr className="record" key={Date().now}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button onClick={() => handleDelete(student.id)}>
                      <BsFillTrash3Fill />
                    </button>
                    <button onClick={() => handleEdit(student.id)}>
                      <BsFillPencilFill />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ""
      )}

      <Link to="/add">Add Data</Link>
    </>
  );
}

export default ShowData;
