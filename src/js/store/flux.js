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
						const response = await fetch("https://3000-amber-duck-rrkzulpn.ws-us18.gitpod.io/character");
						const responseBody = await response.json();
						setStore({ characters: responseBody });
						setStore(
							store.characters.map((item, index) => {
								return (item.link = "/character/");
							})
						);
						localStorage.setItem("characters", JSON.stringify(store.characters));
						console.log(responseBody);
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
						let response = await fetch("https://3000-amber-duck-rrkzulpn.ws-us18.gitpod.io/planet");
						let responseBody = await response.json();
						setStore({ planets: responseBody });
						setStore(
							store.planets.map((item, index) => {
								return (item.link = "/planet/");
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
						let response = await fetch("https://3000-amber-duck-rrkzulpn.ws-us18.gitpod.io/vehicle");
						let responseBody = await response.json();
						setStore({ vehicles: responseBody });
						setStore(
							store.vehicles.map((item, index) => {
								return (item.link = "/vehicle/");
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
			},

			login: (username, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					username: username,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-amber-duck-rrkzulpn.ws-us18.gitpod.io/login", requestOptions)
					.then(response => response.json())
					.then(result => localStorage.setItem("token", result.token))
					.catch(error => console.log("error", error));
			},

			signup: (username, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					username: username,
					password: password,
					is_active: true
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://3000-amber-duck-rrkzulpn.ws-us18.gitpod.io/signup", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			profile: () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://3000-amber-duck-rrkzulpn.ws-us18.gitpod.io/profile", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ user: result }))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
