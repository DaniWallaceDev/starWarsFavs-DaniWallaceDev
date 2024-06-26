import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SinglePlanet = () => {
	const { store, actions } = useContext(Context);
    const {planet_uid} = useParams();
    const [planet,setPlanet] = useState({});
    useEffect(() => {
        const getSinglePlanet = async () => {
            const response = await fetch(`https://www.swapi.tech/api/planets/${planet_uid}`)
            const data = await response.json()
            setPlanet(data.result.properties)
        }
        getSinglePlanet()
    },[])

	return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-5">
                <img className="rounded-3" src={`https://raw.githubusercontent.com/JorgeAJT/star-wars-reading-blog/master/src/img/planets/p${planet_uid}.jpg`}/>
                <div className="ms-5">
                    <h1>Name:{planet.name}</h1>
                    <h5>Climate:{planet.climate}</h5>
                    <h5>Diameter:{planet.diameter}</h5>
                    <h5>Gravity:{planet.gravity}</h5>
                    <h5>Terrain:{planet.terrain}</h5>
                    <h5>Orbital Period:{planet.orbital_period}</h5>
                    <h5>Rotation Period:{planet.rotation_period}</h5>
                </div>
            </div>
        </div>
	);
};
