import React from "react";

export default function Card(props) {
  return (
    <div className="card-div">
      <img className="img" src={props.img} alt=""></img>
      <div className="content">
        <h3 className="place">{props.place}</h3>
        <div className="country">
          <img
            className="pin"
            src="./travel-journal-photos/Fill 219.png"
            alt=""
          ></img>
          <h6 className="country-name">{props.country}</h6>
          <p className="maps-url">{props.mapsUrl}</p>
        </div>
        <p className="dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
