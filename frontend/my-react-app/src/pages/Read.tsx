import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {

    const {id} = useParams();
    
    interface Student {
      ID: number;
      Name: string;
      Email: string;
    }
    
    const [student, setStudent] = useState<Student>({
      ID: 0,
      Name: '',
      Email: ''
    });

useEffect(() => {
    axios.get("http://localhost:8081/read/"+id)
    .then((response) => {
        console.log(response.data)
        setStudent(response.data[0])
    })
    .catch((error) => {
        console.log(error)
    })
}, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h2>Student Details</h2>
        <h2>{student.ID}</h2>
        <h2>{student.Name}</h2>
        <h2>{student.Email}</h2>    
        <Link to="/" className="btn btn-primary me-2">Back</Link>
        <Link to={`/edit/${student.ID}`} className="btn btn-info">Edit</Link>
      </div>
    </div>
  )
}

export default Read
