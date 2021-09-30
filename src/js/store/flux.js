const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			search: []
		},
		actions: {
			getCharacters: async () => {
				const store = getStore();
				if (localStorage.getItem("characters") == null) {
					try {
						const response = await fetch("https://swapi.dev/api/people");
						const responseBody = await response.json();
						setStore({ characters: responseBody.results });
						setStore(
							store.characters.map((item, index) => {
								return (item.id = index), (item.link = "/character/");
							})
						);
						localStorage.setItem("characters", JSON.stringify(store.characters));
					} catch (error) {
						console.log(error);
					}
				} else {
					setStore({ characters: JSON.parse(localStorage.getItem("characters")) });
				}
			},

			getPlanets: async () => {
				const store = getStore();
				if (localStorage.getItem("planets") == null) {
					try {
						let response = await fetch("https://swapi.dev/api/planets");
						let responseBody = await response.json();
						setStore({ planets: responseBody.results });
						setStore(
							store.planets.map((item, index) => {
								return (item.id = index), (item.link = "/planet/");
							})
						);
						localStorage.setItem("planets", JSON.stringify(store.planets));
					} catch (error) {
						console.log(error);
					}
				} else {
					setStore({ planets: JSON.parse(localStorage.getItem("planets")) });
				}
			},

			getVehicles: async () => {
				const store = getStore();
				if (localStorage.getItem("vehicles") == null) {
					try {
						let response = await fetch("https://swapi.dev/api/vehicles");
						let responseBody = await response.json();
						setStore({ vehicles: responseBody.results });
						setStore(
							store.vehicles.map((item, index) => {
								return (item.id = index), (item.link = "/vehicle/");
							})
						);
						localStorage.setItem("vehicles", JSON.stringify(store.vehicles));
					} catch (error) {
						console.log(error);
					}
				} else {
					setStore({ vehicles: JSON.parse(localStorage.getItem("vehicles")) });
				}
			},

			getLocal: () => {
				const store = getStore();
				localStorage.setItem("guardado", store.characters);
			},

			addFavorite: favorite => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, favorite] });
			},

			delFavorite: delFav => {
				const store = getStore();
				const newList = store.favorites.filter(item => item.name !== delFav.name);
				setStore({ favorites: newList });
				if (newList.length === 0) {
					setStore({ favorites: [] });
				}
			}
		}
	};
};

export default getState;
