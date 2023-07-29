import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../config/firebase'
import { CrudForm } from './CrudForm'

export const EditForm = () => {

    const [ name, setName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ age, setAge ] = useState(0) 

    const { id } = useParams()
    const navigate = useNavigate()

    const updateUser = async (id) => {
        const user = await getDoc(doc(db, 'users', id))
        console.log(user)
       if (!user.exists()) {
            console.log('No se encontro el documento');
        }else{
            setName(user.data().name)
            setLastName(user.data().lastName)
            setEmail(user.data().email)
            setAge(user.data().age)
        }
 

        /* 
        if (!user.exists()) {
            console.log('No se encontro el documento');
            return;
        }

        setName(user.data().name)
        setLastName(user.data().lastName)
        setEmail(user.data().email)
        setAge(user.data().age)
        */
    }

    const onUpdate = async (event) => {
        event.preventDefault()
        const user = doc(db, 'users', id)
        const data ={
            name,       //name: name
            lastName,   //lastName: lastName
            age,        //age: age
            email       //email: email
        }

        await updateDoc(user, data)
        navigate('/')
    }

    useEffect(() => {
        updateUser(id);
    }, [])



  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Edit User</h2>

                     <CrudForm 
                        submit = {onUpdate}
                        name={name}
                        lastName={lastName}
                        age={age}
                        email={email}
                        setName={setName}
                        setLastName={setLastName}
                        setAge={setAge}
                        setEmail={setEmail}
                        button='Edit'
                    /> 
                </div>
            </div>

        </div>
    </>
  )
}
