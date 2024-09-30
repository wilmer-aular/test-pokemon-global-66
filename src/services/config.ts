let host = "https://pokeapi.co/api/v2/";
//prod

if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  host = "https://pokeapi.co/api/v2/";
}

export { host };
