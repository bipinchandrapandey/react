import React from 'react';

const Card = (props) => {
  const user = props.user;
  const age = props.age;
  const detail = props.detail;
 


  return (
    <div className="parent">
      <div className="card">
        <img
          src={props.img}
          alt="wallpaper"
        />
        <h1>{user ? user : "Bipin Pandey"}</h1>
        <p>{age ? `Age: ${age}` : "Age not specified"}</p>
        <p>{detail ? ` ${detail}`: "detail not specified"} </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
