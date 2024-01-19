import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Adminhome = () => {
    let [req, setReq] = useState()
    useEffect(() => {
        fetch("http://localhost:4000/requirements")
            .then(res => { return res.json(); })
            .then(data => {
                console.log(data);
                setReq(data)
            })
    }, [])

    return (
        <div>
            <nav>
                <Link to="/adminhome">Home</Link>
                <Link to="/addhr">Add HR</Link>
                <Link to="/addreq">Add Requirements</Link>
            </nav>
            <div>
                <table border="3px">
                    <thead>
                        <tr>
                            <td>Sl.no</td>
                            <td>Company Name</td>
                            <td>Skills Required</td>
                            <td>Bond</td>
                            <td>Salary</td>
                            <td>No of Positions</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    {req &&

                        <tbody>
                            {req.map((v, i, a) => {
                                return (

                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{v.companyName}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><Link to="/reqdetails">View</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default Adminhome
