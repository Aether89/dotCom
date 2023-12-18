// Composables
import { createRouter, createWebHistory } from 'vue-router'
import languages from '@/i18n/languages'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      // Add routes from each language
      ...Object.keys(languages).flatMap(languageKey =>
        Object.keys(languages[languageKey].pages).map(pageKey => ({
          path: languages[languageKey].pages[pageKey].url,
          name: languages[languageKey].pages[pageKey].name,
          component: () => import(`@/views/${pageKey}.vue`),
        }))
      ),
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
