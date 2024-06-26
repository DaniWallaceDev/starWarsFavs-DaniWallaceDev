import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = ({title,uid,image}) => {
    const { store, actions } = useContext(Context);
    const [favHand,setFavHand] = useState("");
    useEffect(() => {
        const favorite = store.favorites.some((item)=>item.uid === uid)
        if (favorite) {
            setFavHand("fa-solid fa-thumbs-up")
        }
        else{
            setFavHand("fa-regular fa-thumbs-up")
        }
    },[store.favorites])
    const fav = ()=>{
        const favorite = store.favorites.some((item)=>item.uid === uid)
        if (favorite) {
            actions.deleteFavorite(uid)
            console.log(store.favorites)
        }
        else{
            actions.addFavorite(title,uid)
            console.log(store.favorites)
        }
    }

    return (

	<div className="card mt-3">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="d-flex justify-content-between">
                <Link to={`/${actions.selectView(uid)}/${uid.slice(1)}`} className="btn btn-primary">Read More</Link>
                <button className="btn btn-warning " onClick={fav}><i className={favHand}></i></button>
            </div>
        </div>
    </div>
    )
};