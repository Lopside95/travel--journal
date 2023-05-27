import React from "react";

export default function Card(props) {
  function toMaps() {}

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
          <p className="country-name">{props.country}</p>
          <a className="maps-url" href={props.mapsUrl}>
            {props.mapsUrl}
          </a>
        </div>
        <p className="dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
