const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				const store = getStore();
				try {
					let response = await fetch("https://swapi.dev/api/people");
					let responseBody = await response.json();
					setStore({ characters: responseBody.results });
					setStore(
						store.characters.map((item, index) => {
							return (item.id = index), (item.link = "/character/");
						})
					);
					console.log(store.characters);
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				const store = getStore();
				try {
					let response = await fetch("https://swapi.dev/api/planets");
					let responseBody = await response.json();
					setStore({ planets: responseBody.results });
					setStore(
						store.planets.map((item, index) => {
							return (item.id = index), (item.link = "/planet/");
						})
					);
					console.log(store.planets);
				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				const store = getStore();
				try {
					let response = await fetch("https://swapi.dev/api/vehicles");
					let responseBody = await response.json();
					setStore({ vehicles: responseBody.results });
					setStore(
						store.vehicles.map((item, index) => {
							return (item.id = index), (item.link = "/vehicle/");
						})
					);
					console.log(store.vehicles);
				} catch (error) {
					console.log(error);
				}
			},

			addFavorite: favorite => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, favorite] });
				console.log(store.favorites);
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
