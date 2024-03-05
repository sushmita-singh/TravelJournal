import React from "react";
import data from "../data"

export default function Card() {
    const travelData = data.map((item) => {
        return (
            <div className="card">
                <div className="image--section">
                    <img className="image" src={`../../public/images/${item.img}`} alt={item.img} />
                </div>
                <div className="card--data">
                    <div className="card--location">
                        <img className="location-logo" src="../../public/images/location-logo.png" alt="location-logo" />
                        <p className="upper">{item.country}</p>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <h2>{item.location}</h2>
                    <p className="bold">{item.startDate} - {item.endDate}</p>
                    <p className="desc">{item.description}</p>
                </div>
            </div>
        )
    })
    return (
       <>
        {travelData}
       </> 
    )
}