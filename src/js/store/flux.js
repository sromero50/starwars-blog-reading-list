const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			characters: [],
			planets: [],
			vehicles: [],
			favourites: []
		},
		actions: {
			getCharacters: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/people");
					let responseBody = await response.json();
					setStore({ characters: responseBody.results });
				} catch (error) {
					console.log(error);
				}
			},

			getPlanets: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/planets");
					let responseBody = await response.json();
					setStore({ planets: responseBody.results });
				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				try {
					let response = await fetch("https://swapi.dev/api/vehicles");
					let responseBody = await response.json();
					setStore({ vehicles: responseBody.results });
				} catch (error) {
					console.log(error);
				}
			},

			addFavorite: character => {
				console.log(character);
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
