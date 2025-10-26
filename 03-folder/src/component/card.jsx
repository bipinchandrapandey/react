import React from "react";
import { Bookmark } from "lucide-react";
import "../index.css"; // or "./card.css"

const CardUser = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt={props.companyName} />
        <button>
          Save <Bookmark size={20} />
        </button>
      </div>

      <div className="center">
        <h3>
          {props.companyName} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.postTag1}</h2>
        <div className="tags">
          <h4>{props.postTag1}</h4>
          <h4>{props.postTag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${props.pay}/hr</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default CardUser;
