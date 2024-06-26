import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/workspaces/starWarsFavs-DaniWallaceDev/src/img/602bb81d5c5b2300043add92.png"
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-secondary-subtle
 mb-3">
			<Link to="/">
				<img src={logo} className="logo navbar-brand mb-0 h1"/>
			</Link>
			<div className="ml-auto">
				<Link to="/characters">
					<button className="btn fw-bold fs-4">Characters</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn fw-bold fs-4 ms-3 me-3">Vehicles</button>
				</Link>
				<Link to="/planets">
					<button className="btn fw-bold fs-4">Planets</button>
				</Link>
			</div>
			<div className="dropdown">
				<button className="btn btn-secondary fw-semibold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="ms-3">{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu">
					{store.favorites.length === 0 ? 
					<li className="dropdown-item text-center fw-normal"> Empty </li>
					:
					store.favorites.map((favorite,index)=>
					<li className="dropdown-item d-flex align-items-center me-2" key={index}> 
						<Link className="btn" to={`/${actions.selectView(favorite.uid)}/${favorite.uid.slice(1)}`}>
							<span>{favorite.title}</span>
						</Link>
						<i onClick={()=>actions.deleteFavorite(favorite.uid)} className="fa-solid fa-trash-arrow-up"></i>
					</li>
					)
					}
				</ul>
			</div>
		</nav>
	);
};
