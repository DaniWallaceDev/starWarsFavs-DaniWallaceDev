import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const SingleCharacter = () => {
	const { store, actions } = useContext(Context);
    const {character_uid} = useParams();
    const [character,setCharacter] = useState({});
    useEffect(() => {
        const getSingleCharacter = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${character_uid}`)
            const data = await response.json()
            setCharacter(data.result.properties)
        }
        getSingleCharacter()
    },[])

	return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center mt-5">
                <img className="rounded-3" src={`https://raw.githubusercontent.com/JorgeAJT/star-wars-reading-blog/master/src/img/characters/c${character_uid}.jpg`}/>
                <div className="ms-5">
                    <h1>Name:{character.name}</h1>
                    <h5>Gender:{character.gender}</h5>
                    <h5>Height:{character.height}</h5>
                    <h5>Mass:{character.mass}</h5>
                    <h5>Hair Color:{character.hair_color}</h5>
                    <h5>Skin Color:{character.skin_color}</h5>
                    <h5>Eye Color:{character.eye_color}</h5>
                </div>
            </div>
        </div>
	);
};
