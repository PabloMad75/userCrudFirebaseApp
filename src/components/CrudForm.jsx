

export const CrudForm = ({submit, name, lastName, age, email, setName, setLastName, setEmail, setAge, button}) => {
  return (
    <form onSubmit = {submit}>
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
    
        <button type='submit' className="btn btn-success">{button}</button>
    </form>
  )
}
