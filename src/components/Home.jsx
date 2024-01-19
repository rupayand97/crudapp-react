import React from 'react'
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
      <Link to="/adminlogin">Admin</Link>
      <Link to="/hrlogin">HR</Link>
      <Link>Student</Link>
    </div>
  )
}

export default Home
