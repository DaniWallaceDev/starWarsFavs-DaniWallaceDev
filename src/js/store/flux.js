const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addFavorite: (name,id) => {
				const updatedFavorites = [...getStore().favorites, {title:name, uid:id}]
				setStore({favorites: updatedFavorites})
			},
			deleteFavorite: (id) => {
				const updatedFavorites = getStore().favorites.filter((fav)=>{
					return !(fav.uid===id)
				})
				setStore({favorites: updatedFavorites})
			},
			getCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people")
				const data = await response.json()
				setStore({characters: data.results})
			},
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets")
				const data = await response.json()
				setStore({planets: data.results})
			},
			getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles")
				const data = await response.json()
				setStore({vehicles: data.results})
			},
			selectView: (uid) =>{
				let viewSelected = ""
				switch (uid[0]){
					case "c":
						viewSelected = "characters"
						break
					case "p":
						viewSelected = "planets"
						break
					case "v":
						viewSelected = "vehicles"
						break
				}
				return viewSelected
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
