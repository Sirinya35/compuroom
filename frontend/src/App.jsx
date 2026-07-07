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

  const [editId, setEditId] = useState(null);


  // โหลดข้อมูล
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


  // รับค่าจาก input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  // เพิ่ม / แก้ไข
  const handleSubmit = (e) => {
    e.preventDefault();

    const method = editId ? "PUT" : "POST";

    const url = editId
      ? `http://localhost:3000/api/computers/${editId}`
      : "http://localhost:3000/api/computers";


    fetch(url, {
      method: method,
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

        setEditId(null);

      });
  };


  // กดแก้ไข
  const editComputer = (computer) => {

    setEditId(computer.id);

    setForm({
      asset_code: computer.asset_code,
      brand_model: computer.brand_model,
      cpu: computer.cpu,
      ram_gb: computer.ram_gb,
      room: computer.room,
      status: computer.status
    });

  };


  // ลบ
  const deleteComputer = (id) => {

    if (!confirm("ต้องการลบข้อมูลนี้หรือไม่?")) {
      return;
    }


    fetch(`http://localhost:3000/api/computers/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        fetchComputers();
      });

  };


  return (

    <div className="container">

      <h1>
        🖥️ Computer Room Management
      </h1>


      <form className="form" onSubmit={handleSubmit}>


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
          placeholder="RAM"
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
          {editId ? "บันทึกการแก้ไข" : "เพิ่มเครื่อง"}
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
            <th>Action</th>
          </tr>

        </thead>


        <tbody>

          {
            computers.map((computer) => (

              <tr key={computer.id}>

                <td>{computer.id}</td>
                <td>{computer.asset_code}</td>
                <td>{computer.brand_model}</td>
                <td>{computer.cpu}</td>
                <td>{computer.ram_gb} GB</td>
                <td>{computer.room}</td>
                <td>{computer.status}</td>

                <td>

                  <button
                    onClick={() => editComputer(computer)}
                  >
                    ✏️
                  </button>


                  <button
                    onClick={() => deleteComputer(computer.id)}
                  >
                    🗑️
                  </button>

                </td>

              </tr>

            ))
          }


        </tbody>

      </table>


    </div>

  );

}


export default App;