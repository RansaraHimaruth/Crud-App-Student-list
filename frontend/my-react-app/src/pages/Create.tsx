import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


function Create() {
const [values, setValues] = useState({
    name: "",
    email: "",  
    });

    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:8081/student", values)
        .then(res => {
            console.log(res.data)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
            <h2>Add Students</h2>
            <div className="mb-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control" id="name" onChange={e => setValues({...values , name: e.target.value})}/>
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" placeholder="Enter Email" className="form-control" id="email" onChange={e => setValues({...values , email: e.target.value})}/>
            </div>
            <button className="btn btn-success" type="submit">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default Create
