import React from 'react'

const User = (props) => {
     const User = props.user;
  
  return (
    <div>
      <div className="parent">
      <div className="card">
        <img
          src={props.img}
          alt="icon"
        />
        <h1>{User ? User : "Bipin Pandey"}</h1>
      
      </div>
    </div>
    </div>
  )
}

export default User
