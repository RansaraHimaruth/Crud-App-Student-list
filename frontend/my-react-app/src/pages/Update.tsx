import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/read/"+id)
        .then((response) => {
            console.log(response.data)
            setValues({...values, name: response.data[0].Name, email: response.data[0].Email})
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const [values, setValues] = useState({
        name: '',
        email: '',  
        });

        const handleUpdate = (e: any) => {
            e.preventDefault();
            axios.put("http://localhost:8081/update/"+id, values)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
        }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <form onSubmit={handleUpdate}>
          <h2>Update Students</h2>
          <div className="mb-2">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" placeholder="Enter Name" className="form-control" id="name" value={values.name} onChange={e => setValues({...values , name: e.target.value})}/>
          </div>
          <div className="mb-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" placeholder="Enter Email" className="form-control" id="email" value={values.email} onChange={e => setValues({...values , email: e.target.value})}/>
          </div>
          <button className="btn btn-success" type="submit">Update</button>
      </form>
    </div>
  </div>

  )
}

export default Update
