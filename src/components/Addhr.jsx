import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Addhr = () => {
    let name = useRef()
    let email = useRef()
    let phone = useRef()
    let password = useRef()
    let addNewhr = (e) => {
        e.preventDefault();
        let newHr = {
            "name": name.current.value,
            "email": email.current.value,
            "phone": phone.current.value,
            "password": password.current.value
        }
        let config = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newHr)
        }
        fetch("http://localhost:5000/hr", config)
            .then(() => {
                alert("HR added successfully!")
            })
    }
    return (
        <div>
            <form >
                <input type="text" placeholder='name' ref={name} />
                <input type="email" placeholder='email' ref={ email} />
                <input type="text" placeholder='phone' ref={ phone} />
                <input type="text" placeholder='password' ref={ password} />
                <input type="submit" value="Add HR" onClick={addNewhr} />
            </form>
            <Link to="/adminhome"> Home</Link>
        </div>
    )
}

export default Addhr
