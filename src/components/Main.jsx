import React from "react";

const Main = (props) => {
  return (
    <section className="main-section">
      <div className="main-container">
        <div>
          <img src={props.tData.imageUrl} className="main-image" />
        </div>
        <div className="main-info">
          <div className="main-info-link">
            <p><i class="fa-solid fa-location-dot" style={{color: "#F55A5A"}}></i> {props.tData.location}</p>
            <span>
              <a href={props.tData.googleMapsUrl}>View on Google Maps</a>
            </span>
          </div>
          <p className="main-info-title">{props.tData.title}</p>
          <p className="main-info-date">
            {props.tData.startDate} - {props.tData.endDate}
          </p>
          <p className="main-info-description">{props.tData.description}</p>
        </div>
      </div>
 
    </section>
  );
};

export default Main;
