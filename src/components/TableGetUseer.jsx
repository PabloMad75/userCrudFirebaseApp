import { useState, useEffect } from "react"

import { collection, getDocs } from 'firebase/firestore'
import { db } from "../config/firebase";
import { Link } from "react-router-dom";


export const TableGetUseer = () => {

    const [ users, setUsers ] = useState([]);

    const userCollectionRef = collection(db, 'users')
    
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef)
        setUsers(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        )
    }

    useEffect(() => {
        getUsers()
    }, [])



  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link to='create' className= ' btn btn-success my-2 p-2'>
                            Create User
                        </Link>
                    </div>

                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Name</th>
                                <th>Email Address</th>
                                <th>Age</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            { users.map( user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`edit/${user.id}`} className = 'btn btn-warning mx-2'>Edit</Link>
                                        <button className ='btn btn-danger mx-2'>Delete</button>
                                    </td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}
