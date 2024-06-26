import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SingleVehicle = () => {
	const { store, actions } = useContext(Context);
    const {vehicle_uid} = useParams();
    const [vehicle,setVehicle] = useState({});
    useEffect(() => {
        const getSingleVehicle = async () => {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${vehicle_uid}`)
            const data = await response.json()
            setVehicle(data.result.properties)
        }
        getSingleVehicle()
    },[])

	return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-5">
                <img className="rounded-3" src={`https://raw.githubusercontent.com/JorgeAJT/star-wars-reading-blog/master/src/img/vehicles/v${vehicle_uid}.jpg`}/>
                <div className="ms-5">
                    <h1>Name:{vehicle.name}</h1>
                    <h5>Model:{vehicle.model}</h5>
                    <h5>Vehicle Class:{vehicle.vehicle_class}</h5>
                    <h5>Passengers:{vehicle.passengers}</h5>
                    <h5>Manufacturer:{vehicle.manufacturer}</h5>
                    <h5>Cargo Capacity:{vehicle.cargo_capacity}</h5>
                    <h5>Max Atmosphering Speed:{vehicle.max_atmosphering_speed}</h5>
                </div>
            </div>
        </div>
	);
};
