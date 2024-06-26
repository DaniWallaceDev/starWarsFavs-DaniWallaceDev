import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Characters = () => {
	const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacters()
    },[])

	return (
        <div className="container-fluid">
            <h1 className="text-center fw-bold">Characters</h1>
            <div className="row">
                {store.characters.map((character,index) =>
                <div className="col-3" key={index}>
                    <Card
                    title={character.name}
                    image={`https://raw.githubusercontent.com/JorgeAJT/star-wars-reading-blog/master/src/img/characters/c${character.uid}.jpg`}
                    uid={`c${character.uid}`}
                    />
                </div>
                )}
            </div>
        </div>
	);
};
