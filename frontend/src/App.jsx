import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [computers, setComputers] = useState([]);

  const [form, setForm] = useState({
    asset_code: "",
    brand_model: "",
    cpu: "",
    ram_gb: "",
    room: "",
    status: ""
  });

  // ดึงข้อมูล
  const fetchComputers = () => {
    fetch("http://localhost:3000/api/computers")
      .then((res) => res.json())
      .then((data) => {
        setComputers(data);
      });
  };

  useEffect(() => {
    fetchComputers();
  }, []);


  // รับค่าจากช่องกรอก
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  // เพิ่มข้อมูล
  const addComputer = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/computers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        ram_gb: Number(form.ram_gb)
      })
    })
      .then((res) => res.json())
      .then(() => {
        fetchComputers();

        setForm({
          asset_code: "",
          brand_model: "",
          cpu: "",
          ram_gb: "",
          room: "",
          status: ""
        });
      });
  };


  return (
    <div className="container">

      <h1>🖥️ Computer Room Management</h1>


      <form onSubmit={addComputer} className="form">

        <input
          name="asset_code"
          placeholder="Asset Code"
          value={form.asset_code}
          onChange={handleChange}
        />

        <input
          name="brand_model"
          placeholder="Brand Model"
          value={form.brand_model}
          onChange={handleChange}
        />

        <input
          name="cpu"
          placeholder="CPU"
          value={form.cpu}
          onChange={handleChange}
        />

        <input
          name="ram_gb"
          placeholder="RAM GB"
          type="number"
          value={form.ram_gb}
          onChange={handleChange}
        />

        <input
          name="room"
          placeholder="Room"
          value={form.room}
          onChange={handleChange}
        />

        <input
          name="status"
          placeholder="Status"
          value={form.status}
          onChange={handleChange}
        />

        <button>
          + เพิ่มเครื่อง
        </button>

      </form>


      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Asset</th>
            <th>Brand</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>Room</th>
            <th>Status</th>
          </tr>
        </thead>


        <tbody>

          {computers.map((computer) => (

            <tr key={computer.id}>

              <td>{computer.id}</td>
              <td>{computer.asset_code}</td>
              <td>{computer.brand_model}</td>
              <td>{computer.cpu}</td>
              <td>{computer.ram_gb} GB</td>
              <td>{computer.room}</td>
              <td>{computer.status}</td>

            </tr>

          ))}

        </tbody>

      </table>


    </div>
  );
}

export default App;