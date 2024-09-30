import { ActionContext, createStore } from "vuex";

import { IPokemon } from "../interfaces";

export interface State {
  favorites: IPokemon[];
}

type ActionContextType = ActionContext<State, State>;

const store = createStore<State>({
  state: {
    favorites: [],
  },
  mutations: {
    addFavorite(state: State, pokemon: IPokemon) {
      state.favorites.push(pokemon);
    },
    removeFavorite(state: State, pokemonName: string) {
      state.favorites = state.favorites.filter((pokemon: IPokemon) => pokemon.name !== pokemonName);
    },
  },
  actions: {
    addToFavorites(context: ActionContextType, pokemon: IPokemon) {
      context.commit("addFavorite", pokemon);
    },
    removeFromFavorites(context: ActionContextType, pokemonName: string) {
      context.commit("removeFavorite", pokemonName);
    },
  },
  getters: {
    getFavorites: (state: State) => state.favorites,
  },
});

export default store;