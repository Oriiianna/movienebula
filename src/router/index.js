import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails.vue'
import Favorites from '../views/Favorites.vue'
import About from '../views/About.vue'
import ContactPage  from '@/views/ContactPage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/movie/:id', name: 'MovieDetails', component: MovieDetails },
    { path: '/favorites', name: 'Favorites', component: Favorites },
    { path: '/about', name: 'About', component: About },
    { path: '/contactPage', name: 'Contact', component: ContactPage}

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
