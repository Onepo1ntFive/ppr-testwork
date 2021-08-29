import { createRouter, createWebHashHistory } from 'vue-router'
import TheMovies from '../views/TheMovies'
import TheMovie from '../views/TheMovie'

const routes = [
  { path: '/', redirect: '/discover' },
  {
    path: '/discover',
    name: 'movies',
    component: TheMovies,
  },
  {
    path: '/discover/:movieId',
    name: 'movie',
    component: TheMovie,
    props: true
  },
  {
    path: '/:notFound(.*)',
    redirect: '/discover'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
