import { useState } from "react"
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


export const CreateForm = () => {

    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ age, setAge ] = useState(0) 

    const navigate = useNavigate()

    const userCollectionRef = collection(db, 'users')

    const onStore = async (event) => {
        event.preventDefault();
        await addDoc( userCollectionRef, {name, lastName, email, age} 
            //{name: name, lastName: lastName, email: email, age: age}
            )
        navigate('/')
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Create a New User</h2>

                    <form onSubmit = {onStore}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={name}
                                onChange= { (e) => setName(e.target.value) }
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={lastName}
                                onChange= { (e) => setLastName(e.target.value) }
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={email}
                                onChange= { (e) => setEmail(e.target.value) }
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input 
                                type="number" 
                                className="form-control"
                                value={age}
                                onChange= { (e) => setAge(e.target.value) }
                            />
                        </div>

                        <button type='submit' className="btn btn-success">Create User</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </>
  )
}
