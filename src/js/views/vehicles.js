import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Vehicles = () => {
	const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getVehicles()
    },[])

	return (
        <div className="container-fluid">
            <h1 className="text-center fw-bold">Vehicles</h1>
            <div className="row">
                {store.vehicles.map((vehicle,index) =>
                <div className="col-3" key={index}>
                    <Card
                    title={vehicle.name}
                    image={`https://raw.githubusercontent.com/JorgeAJT/star-wars-reading-blog/master/src/img/vehicles/v${vehicle.uid}.jpg`}
                    uid={`v${vehicle.uid}`}
                    />
                </div>
                )}
            </div>
        </div>
	);
};
