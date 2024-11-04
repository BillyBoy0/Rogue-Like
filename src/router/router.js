// src/router.js

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../HomePage.vue'    // Import de la page d'accueil (app.vue)
import Game from '../Game.vue'    // Import de la page game.vue

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Chemin vers ta page d'accueil (app.vue)
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game,  // Chemin vers ta page de jeu (game.vue)
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
