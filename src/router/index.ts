import { createRouter, createWebHistory } from 'vue-router';

import FavoritePokemonsVue from '../pages/FavoritePokemons.vue';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import Pokemons from '../pages/AllPokemons.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/all',
        name: 'All',
        component: Pokemons,
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: FavoritePokemonsVue,
    },
    {
        path: '/:catchAll(.*)', // Esta ruta captura cualquier ruta no definida
        name: 'NotFound',
        component: NotFound,
      },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;