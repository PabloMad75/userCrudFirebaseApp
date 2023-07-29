import { useState } from "react"
import { db } from "../config/firebase"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

import { CrudForm } from "./CrudForm"

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

                    <CrudForm 
                        submit = {onStore}
                        name={name}
                        lastName={lastName}
                        age={age}
                        email={email}
                        setName={setName}
                        setLastName={setLastName}
                        setAge={setAge}
                        setEmail={setEmail}
                        button='Create'
                        />
                    
                </div>
            </div>
        </div>
    </>
  )
}
