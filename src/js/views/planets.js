import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Planets = () => {
	const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPlanets()
    },[])

	return (
        <div className="container-fluid">
            <div className="row">
                {store.planets.map((planet,index) =>
                <div className="col-3" key={index}>
                    <Card
                    title={planet.name}
                    image={`https://raw.githubusercontent.com/JorgeAJT/star-wars-reading-blog/master/src/img/planets/p${planet.uid}.jpg`}
                    uid={`p${planet.uid}`}
                    />
                </div>
                )}
            </div>
        </div>
	);
};
